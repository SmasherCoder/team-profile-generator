// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creates engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer ('Travis', 44, 'travis.helms@gmail.com', 'smashercoder');
    
    expect (engineer.name).toEqual ('Travis');
    expect (engineer.id).toEqual (44);
    expect (engineer.email).toEqual ('travis.helms@gmail.com');
    expect (engineer.github).toEqual ('smashercoder');
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer ('Travis', 44, 'travis.helms@gmail.com', 'smashercoder');

    expect (engineer.getGithub()).toEqual ('smashercoder');
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer ('Travis', 44, 'travis.helms@gmail.com', 'smashercoder');

    expect (engineer.getRole()).toEqual ('Engineer');
});