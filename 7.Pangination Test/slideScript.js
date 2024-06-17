// const scrollers = document.querySelectorAll(".scroller");
//   scrollers.forEach((scroller) => {
//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     const scrollerContent = Array.from(scrollerInner.children);
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//     //   duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });



  const testScroll=document.querySelector(".testScroll");
  const test1=document.querySelectorAll('li');
  test1.forEach((card)=>{
    const clone=card.cloneNode(true);
    testScroll.append(clone);
  })