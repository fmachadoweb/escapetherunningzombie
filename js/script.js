const man = document.querySelector('.man');
const zombie = document.querySelector('.zombie');


const jump = () => {
    man.classList.add('jump');

    setTimeout (() => {
        man.classList.remove('jump');
    }, 500);
}





const loop = setInterval(() => {

    const zombiePosition = zombie.offsetLeft;
    const manPosition = +window.getComputedStyle(man).bottom.replace('px', '');


    if (zombiePosition <= 120 && zombiePosition > 0 && manPosition < 200) {

        zombie.style.animation ='none';
        zombie.style.left = `${zombiePosition}px`;

        man.style.animation ='none';
        man.style.bottom = `${zombiePosition}px`;

        man.src ='./img/gameover.gif';
        man.style.width = "280px";
        man.style.marginLeft = "50px";

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);

