// Importing Employee constructor 
const Employee = require('./Employee');

// Manager constructor extends Employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // Overriden employee role to manager role 
    getRole () {
        return 'Manager';
    }
}

// to be exported 
module.exports = Manager; 