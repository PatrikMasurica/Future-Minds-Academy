function fetchData(callback) {
    setTimeout(() => {
        //simulon nje async operation
        callback('Data recieved!');
    }, 10000)
}

console.log('Fetching data...')

fetchData((data) => {
    console.log(data);
})

console.log('Other code running!');