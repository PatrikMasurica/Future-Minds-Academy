const inquirer = require('@inquirer/prompts')


// async function run() {
//     const name = await inquirer.input({
//         message: "name",

//     });
//     const surname = await inquirer.input({
//         message: "surname",

//     });
//     console.log(name + surname)
// }

// run()


// const readLine = require('readLine');

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Name', (name) => {
//     console.log(name);
//     rl.close();
// })

// const calculator = require('./calculator.js');

// var colors = require('colors')

// console.log(calculator.add(7, 8))

// console.log(colors.green('Hello World'));
// console.log('Hello World'.green)

async function getUsername() {
    const username = await inquirer.input({
        message: "username",

    });
    const password = await inquirer.password({
        message: "password",

    });


}


