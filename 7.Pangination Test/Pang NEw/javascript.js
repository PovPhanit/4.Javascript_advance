"use strict";
const slides=document.querySelectorAll('.slide');
const  slider=document.querySelector('.slider')
const btnLeft=document.querySelector('.slider__btn--left');
const btnRight=document.querySelector('.slider__btn--right');
const dotContainer=document.querySelector('.dots');
let curSlide=0;
const maxSlide=slides.length;
const createDots=function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',`
    <button class="dots__dot" data-slide="${i}"></button>`);
  });
}
const activeDot=function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot=>dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
// slider.style.transform='scale(0.3)';
// slider.style.overflow="visible";
//goto slide
const goToSlide=function(slide){
  slides.forEach((s,i)=>{
    console.log(i,slide);
    s.style.transform=`translateX(${100*(i-slide)}%)`;
  });
};
//next slide
const nextSlide=function(){
  if(curSlide===maxSlide-1){
    curSlide=0;
  }
  else{
    curSlide++;
  }
    goToSlide(curSlide);
    activeDot(curSlide);   //new
}
//previous slide
const previousSlide=function(){
  if(curSlide===0){
    curSlide=maxSlide-1;
  }
  else{
    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);  //new
}
//new
document.addEventListener('keydown',function(e){
  if(e.key=='ArrowLeft') {
    previousSlide();
  }
  else if(e.key==`ArrowRight`){
    nextSlide();
  }
});
const init=function(){
  goToSlide(0);
  createDots();
  activeDot(0);
}
init();
slides.forEach((s,i)=>{
  s.style.transform=`translateX(${100 * i}%)`;
});
btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',previousSlide);
dotContainer.addEventListener('click',function(e){
if(e.target.classList.contains('dots__dot')){
  const{slide}=e.target.dataset;
            console.log(slide);
  goToSlide(slide);
  activeDot(slide);
}
});
