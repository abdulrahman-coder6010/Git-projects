const header = document.querySelector('.header.container');
const menu_item = document.querySelectorAll('.header.nav-bar.nav-list.text')

document.addEventListener("scroll",()=>{
var scroll_position =window.scrollY;
if (scroll_position > 250) {
    header.style.backgroundColor ="#29323c";
} else {
    header.style.backgroundColor ="transparent"
}
})


