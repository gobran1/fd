let carouselItemsCount = $('.carousel-item').length
let carouselItems = $('.carousel-item');
$(carouselItems).eq(0).show();
let activeItemIndex = 0;
let timeInterval = 3000
let timerID;
timerID = setTimeout(()=>{
              $('.carousel-control.right').click();
          },timeInterval)

let resetTimer = ()=>
{
  clearInterval(timerID);
  timerID = setTimeout(()=>{
                timerId = $('.carousel-control.right').click();
            },timeInterval)
}


$('.carousel-control.right').click((event)=>{
  $(carouselItems).eq(activeItemIndex).hide('slow');
  activeItemIndex = (activeItemIndex == carouselItemsCount-1)?0:activeItemIndex+1;
  $(carouselItems).eq(activeItemIndex).show('slow');
  resetTimer();
})

$('.carousel-control.left').click((event)=>{
    $(carouselItems).eq(activeItemIndex).hide('slow');
    activeItemIndex = (activeItemIndex == 0)?carouselItemsCount-1:activeItemIndex-1;
    $(carouselItems).eq(activeItemIndex).show('slow');
    resetTimer();
});
