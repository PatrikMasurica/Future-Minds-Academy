let rrafshi = document.createElement('canvas');
rrafshi.width = 512;
rrafshi.height = 480;
document.body.appendChild(rrafshi);

let ctx = rrafshi.getContext('2d');

let bgrImg = new Image();
bgrImg.src = 'images/background.png';
bgrImg.onload = function () {
    ctx.drawImage(bgrImg, 0, 0)
}

let maca = {};
maca.x = 300;
maca.y = 300;

let macaImg = new Image();
macaImg.src = 'images/cat.png';
macaImg.onload = function () {
    ctx.drawImage(macaImg, maca.x, maca.y)
}

let miu = {};
miu.x = 50;
miu.y = 50;

let miuImg = new Image();
miuImg.src = 'images/mouse.png';
miuImg.onload = function () {
    ctx.drawImage(miuImg, miu.x, miu.y)
}

let timer = 0;
let render = function () {
    addEventListener('keydown', function (e) {
        if (e.key == 'ArrowUp') {
            maca.y -= 2;
            ctx.drawImage(macaImg.maca.x, maca.y);
        }
        if (e.key == 'ArrowDown') {
            maca.y += 2;
            ctx.drawImage(macaImg.maca.x, maca.y);
        }
        if (e.key == 'ArrowLeft') {
            maca.y += 2;
            ctx.drawImage(macaImg.maca.x, maca.y);
        }
        if (e.key == 'ArrowRight') {
            maca.y -= 2;
            ctx.drawImage(macaImg.maca.x, maca.y);
        }
    })
}


setInterval(render, 100);