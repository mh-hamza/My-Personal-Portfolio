/* ====================== pre loader ==================== */

var preloder = document.querySelector(".loader-bg");
function loadFunc(){
    preloder.style.display="none"
}


/* ====================== on click to active li list items "Home" "About" ==================== */

function toggleActive(element) {
    // Remove 'active' class from all list items
    let listItems = document.querySelectorAll('#myList li a');
    listItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked list item
    element.classList.add('active');
}


/* ========================= Typing Animation ========================== */
var typed = new Typed(".typing",{
    strings:["","Web Devloper", "web Designer", "Graphics Designer", "Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop: true
})

/* ========================= Aside Toggle Navbar  ========================== */
const aside = document.querySelector(".aside");
const navToggler = document.querySelector(".nav-toggler");
const cutIcon = navToggler.querySelector(".nav-toggler i");

navToggler.addEventListener("click", function(event){
    aside.classList.toggle("nav-active");
   
    if (aside.classList.contains('nav-active')) {
        navToggler.style.left="220px"
        navToggler.style.top="0px"
        cutIcon.classList.add('fa-solid', 'fa-xmark')
        navToggler.querySelector("span").style.display="none"
        blur.style.display="block"

      }
      else{
        navToggler.style.left="30px"
        navToggler.style.top="20px"
        cutIcon.classList.remove('fa-solid', 'fa-xmark')
        navToggler.querySelector("span").style.display=""
        blur.style.display="none"

      }
})

// aside active to show blur area
const mainContainer =document.querySelector(".main-container");
let blur = document.createElement("div");
mainContainer.appendChild(blur);
blur.className="blur-things"



blur.addEventListener("click", function(m){
    navToggler.style.left="30px"
        navToggler.style.top="20px"
        cutIcon.classList.remove('fa-solid', 'fa-xmark')
        navToggler.querySelector("span").style.display=""
        blur.style.display="none"
        aside.classList.toggle("nav-active");
})


/* ========================= Animation on scroll  ========================== */
let allSections = document.querySelectorAll("section");
const centerSection= ()=>{
  let windowH = window.innerHeight;
    allSections.forEach((item)=>{
        let top = item.getBoundingClientRect().top
        if(top< windowH){
            item.classList.add('animate-active');
        }
        else{
            item.classList.remove('animate-active');
        }
    })
}
centerSection()
window.addEventListener('scroll', centerSection);
let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}