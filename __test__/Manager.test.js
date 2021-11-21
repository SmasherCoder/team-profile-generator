// using Intern constructor 
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager ('Travis', 44, 'travis.helms@gmail.com', '234');

    expect (manager.name).toEqual ('Travis');
    expect (manager.id).toEqual (44);
    expect (manager.email).toEqual ('travis.helms@gmail.com');
    expect (manager.officeNumber).toEqual ('234');
});

test ("gets manager's role in the company", () => {
    const manager = new Manager ('Travis', 44, 'travis.helms@gmail.com', '234');

    expect (manager.getRole()).toEqual ('Manager');
})