function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is comming!")
        }, 2000);
    }
    );
}

fetchData()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log("Error", error);

    });