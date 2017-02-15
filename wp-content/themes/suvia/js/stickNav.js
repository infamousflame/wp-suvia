var nav = document.querySelector(".menu-navigation-container");
const fromTop = nav.offsetTop;
const navHeight = nav.offsetHeight;
var scroll;

console.log(fromTop);
console.log(navHeight);


function stickyNav() {
  scroll = window.scrollY;
  if(scroll >= fromTop){
    document.body.classList.add('fixed');
    document.body.style.marginTop = navHeight + "px";
  }else{
    document.body.classList.remove('fixed');
    document.body.style.marginTop = 0;
    }

}


window.addEventListener('scroll', stickyNav);

