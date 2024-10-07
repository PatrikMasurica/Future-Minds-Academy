const { default: inquirer } = require('inquirer');

let users = [];

const mainMenu = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Would you like to login or register?',
            choices: ['Login', 'Register'],
        },
    ]);


    if (answer.options === 'Login') {
        await loginUser();
    } else if (answer.options === 'Register') {
        await registerUser();
    }
};

const loginUser = async () => {
    const credentials = await inquirer.prompt([
        { type: 'input', name: 'username', message: 'Enter username:' },
        { type: 'password', name: 'password', message: 'Enter password:' }
    ]);


    const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
    if (user) {
        console.log(`Welcome back, ${user.username}!`);
    } else {
        console.log('Invalid username or password. Please try again.');
    }


    await mainMenu();
};

const registerUser = async () => {
    const newUser = await inquirer.prompt([
        { type: 'input', name: 'username', message: 'Choose a username:' },
        { type: 'password', name: 'password', message: 'Choose a password:' }
    ]);


    const exists = users.some(u => u.username === newUser.username);
    if (exists) {
        console.log('Username already taken. Try another.');
    } else {
        users.push(newUser);
        console.log(`User ${newUser.username} registered successfully!`);
    }


    await mainMenu();
};

mainMenu();
