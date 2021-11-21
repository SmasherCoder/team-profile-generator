// team profiles
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern'); 
const Engineer = require('./lib/Engineer');

// link to page creation
const generateHTML = require('./src/generateHTML');

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team:', 
            validate: nameInput => {
                //validates answer for symbols
                var symbols = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
                if(symbols.test(nameInput)){
                    console.log ("Please try again.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's numerical ID:",
            validate: id => {
                if  (isNaN(id)) {
                    console.log ("Please try again.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email:",
            validate: email => {
                //if email doesn't have a @ symbol then it won't validate
                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (validRegex.test(email))
                {
                  return true;
                } else {
                  console.log("Please try again.");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number:",
            validate: officeNumber => {
                //just checks if input is given. could be any type of input
                if (officeNumber) {
                    return true;
                } else {
                    console.log ("Please try again. Enter the manager's office number:");
                    return false; 
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 

        console.log ('***Added manager to Team Profile***');
    })
};

const addEmployee = () => {
    console.log(`
    -------------------------
    Add employees to the team
    -------------------------
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose your employee's role in the company:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the name of the employee:", 
            validate: nameInput => {
                //validates answer for symbols
                var symbols = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
                if(symbols.test(nameInput)){
                    console.log ("Please try again.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's numerical ID.",
            validate: nameInput => {
                //validates for number input
                if  (isNaN(nameInput)) {
                    console.log ("Please try again.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email:",
            validate: email => {
                //if email doesn't have a @ symbol then it won't validate
                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (validRegex.test(email))
                {
                  return true;
                } else {
                  console.log("Please try again.");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                //validates if response was given
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                //validates answer for symbols
                var symbols = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
                if(symbols.test(nameInput)){
                    console.log ("Please try again.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members:',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log ('***Added Engineer to Team Profile***');

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log ('***Added Intern to Team Profile***');

        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error with writing the team 
        if (err) {
            console.log(err);
            return;
        // Team profile created successfully
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });