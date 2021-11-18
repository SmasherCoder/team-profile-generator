// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // Gets Github id
    getGithub () {
        return this.github;
    }

     // overrides employee role to engineer
    getRole () {
        return 'Engineer';
    }
}

// to be exported 
module.exports = Engineer; 