const fs = require('fs');

const data = 'Hello World';

fs.writeFileSync('example.txt', data, 'utf8', (error) => {
    if (err) {
        console.log('Its not working');
        return
    }
    console.log('File written succesfully')
})