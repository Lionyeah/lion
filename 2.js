const canvas_1 = document.querySelectorAll(`canvas`)[0];
const canvas_2 = document.querySelectorAll(`canvas`)[1];
const canv_1 = canvas_1.getContext('2d');
const canv_2 = canvas_2.getContext('2d');
let j=180;
    house()
    function house(){
    j--
    console.log(j)
    canv_1.save()
    canv_1.beginPath();
    canv_1.translate(3,-4);
    canv_1.moveTo(10,10);
    canv_1.rotate(1*Math.PI/180);
    canv_1.lineTo(250,5);
    canv_1.lineTo(245,40);
    canv_1.lineTo(5,45);
    canv_1.lineTo(10,10);
    canv_1.fill();
    canv_1.closePath()
    canv_1.restore();
    canv_1.save()
    canv_1.beginPath();
    canv_1.moveTo(40,50);
    canv_1.save()
    canv_1.beginPath();
    canv_1.moveTo(10,10);
    canv_1.rotate(-1*Math.PI/180);
    canv_1.lineTo(250,5);
    canv_1.lineTo(245,40);
    canv_1.lineTo(5,45);
    canv_1.lineTo(10,10);
    canv_1.fillStyle =`rgb(224, 207, 176)`;
    canv_1.fill();
    canv_1.closePath()
    canv_1.restore();

    canv_2.beginPath()
    canv_2.moveTo(0,220);
    canv_2.lineTo(150,220);
    canv_2.lineTo(150,370);
    canv_2.fillStyle = `white`;
    canv_2.globalCompositeOperation = 'destination-over'
    canv_2.fill();
    canv_2.beginPath();
    canv_2.moveTo(0,260);
    canv_2.lineTo(110,370);
    canv_2.lineTo(90,370);
    canv_2.lineTo(0,280);
    canv_2.lineTo(0,260);
    canv_2.fill();
    canv_2.beginPath();
    let img = new Image();
        img.src = `./fz.jpg`;
    img.onload = function(){
        canv_2.drawImage(img,0,220,150,150);
    }
     canv_2.closePath();
    }
// let meiz = document.getElementsByClassName('mz')[0];
//  setTimeout(function(){
//     console.log(meiz)
//     meiz.style.opacity = `1`
//  },3000)
 let inner = document.getElementsByClassName('inner')[0];
 setTimeout(function () {
     inner.style.opacity = `1`;
 },500)