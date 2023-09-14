let LastImage = document.getElementsByClassName("last-img")[0];
let MidImage = document.getElementsByClassName("mid-img")[0];
let BirdImage = document.getElementsByClassName("bird-img")[0];
let ObjekImage = document.getElementsByClassName("objek-img")[0];
let Button = document.querySelector(".btn");

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    BirdImage.style.left = value * 0.9 + 'px';
    BirdImage.style.top = value * 0.7 + 'px';
    LastImage.style.top = value * 0.7 + 'px';
    MidImage.style.top = value * 0.3 + 'px';

    ObjekImage.style.top = value * 0 + 'px';
    Button.style.marginTop = value * 0.1 + 'px';
})

$(document).ready(function(){
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        1200, 
        'linear'
      );
  
    });
  
  });




