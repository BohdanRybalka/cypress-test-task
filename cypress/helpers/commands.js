export function generateUserData(){
    const Chance = require('chance');
    const chance = new Chance();
    const username = chance.name();
    const password = chance.string({ length: 8 });

    console.log('Username: ', username);
    console.log('Password: ', password);

    return {
        username: username,
        password: password
    };
}