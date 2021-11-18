// importing Employee constructor 
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

   // Gets School of intern
   getSchool () {
       return this.school;
   }

   //  overrides employee role to engineer
   getRole () {
       return 'Intern';
   }  
};

module.exports = Intern;