let title = document.querySelector('title');
let favicon = document.querySelector('.favicon');

let startNotification = function (text) {

    title.textContent = text;
    favicon.href = 'https://cdn-icons-png.flaticon.com/512/1827/1827272.png'
}

let endNotification = function () {
    title.textContent = 'Javascript Hands-On';
    favicon.href = 'x';
}

startNotification();
endNotification();


