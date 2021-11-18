// using Intern constructor 
const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern ('Travis', 44, 'travis.helms@gmail.com', 'University of Texas');

    expect (intern.name).toEqual ('Travis');
    expect (intern.id).toEqual (44);
    expect (intern.email).toEqual ('travis.helms@gmail.com');
    expect (intern.school).toEqual ('University of Texas');
});

// gets school from getSchool()
test ("gets intern's school value", () => {
    const intern = new Intern ('Travis', 44, 'travis.helms@gmail.com', 'University of Texas');

    expect (intern.getSchool()).toEqual ('University of Texas');
});

test ("gets intern's role in the company", () => {
    const intern = new Intern ('Travis', 44, 'travis.helms@gmail.com', 'University of Texas');

    expect (intern.getRole()).toEqual ('Intern');
})