const header = document.querySelector('.header.container');
const menu_item = document.querySelectorAll('.header.nav-bar.nav-list.text')

document.addEventListener("scroll",()=>{
var scroll_position =window.scrollY;
if (scroll_position > 250) {
    header.style.backgroundColor ="#29323c";
    document.querySelector("#header > div > div > div.brand > a > h1").style.color = "#fff";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav1").style.color = "#fff";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav2").style.color = "#fff";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav3").style.color = "#fff";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav4").style.color = "#fff";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav5").style.color = "#fff";
} else {
    header.style.backgroundColor ="transparent";
    document.querySelector("#header > div > div > div.brand > a > h1").style.color = "#000";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav1").style.color = "#000";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav2").style.color = "#000";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav3").style.color = "#000";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav4").style.color = "#000";
    document.querySelector("#header > div > div > div.nav-list > ul > li > a.nav5").style.color = "#000";
}
})


