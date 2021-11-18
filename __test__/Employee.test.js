//Require statement to test Employee class
const Employee = require ('../lib/Employee.js');

//Create a employee object to test
test ('create a new employee object', () => {
    const employee = new Employee ('Travis', 44, 'travis.helms@gmail.com');

    expect (employee.name).toEqual ('Travis');
    expect (employee.id).toEqual (44);
    expect (employee.email).toEqual ('travis.helms@gmail.com');
});

// test the get employee id method
test('gets employee ID', () => {
    const employee = new Employee ('Travis', 44, 'travis.helms@gmail.com');

    expect (employee.getId ()).toEqual (44);
});

// test the get employee name method 
test('gets employee name', () => {
    const employee = new Employee ('Travis', 44, 'travis.helms@gmail.com');

    expect (employee.getName ()).toEqual ('Travis');
});

// test the get role of employee method
test('gets role of employee', () => {
    const employee = new Employee ('Travis', 44, 'travis.helms@gmail.com');

    expect (employee.getRole ()).toEqual ('Employee');
}); 

// test the get email method
test('gets employee email', () => {
    const employee = new Employee ('Travis', 44, 'travis.helms@gmail.com');

    expect (employee.getEmail ()).toEqual ('travis.helms@gmail.com');
});