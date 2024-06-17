setTimeout((e) => {
    // console.log(e);
    document.querySelector('.robot').style.opacity='0.3';
    document.querySelector('.shadow').style.opacity='0.3';

}, 1600);
setTimeout((e) => {
    // console.log(e);
    document.querySelector('.robot').style.opacity='0.8';
    document.querySelector('.shadow').style.opacity='0.8';

}, 1800);
setTimeout((e) => {
    // console.log(e);
    document.querySelector('.robot').style.opacity='1';
    document.querySelector('.shadow').style.opacity='1';
    document.querySelector('.robot').classList.add('activeRobot');
    document.querySelector('.shadow').classList.add('activeShadow');
}, 2000);

window.addEventListener('scroll',(e)=>{
    console.log(window.scrollY);
    document.querySelector('.logo').style.left=160+0.4*window.scrollY+'px';
})
window.addEventListener('mousemove',(e)=>{
    console.log(e.clientX,e.clientY);
})
document.querySelector('.robot').addEventListener('mouseenter',()=>{
    document.querySelector('.robot').classList.remove('activeRobot');
    document.querySelector('.shadow').classList.remove('activeShadow');
})
document.querySelector('.robot').addEventListener('mouseleave',()=>{
    document.querySelector('.robot').classList.add('activeRobot');
    document.querySelector('.shadow').classList.add('activeShadow');
})