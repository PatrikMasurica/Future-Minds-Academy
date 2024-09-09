function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is comming!")
        }, 2000);
    }
    );
}

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is comming!")
        }, 2000);
    }
    );
}

const response = await getData();

console.log('Response', response);
