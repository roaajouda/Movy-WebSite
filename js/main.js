let watch = document.querySelector(".watch");
let btn = document.querySelectorAll(".btn");
let logo = document.querySelector(".logo");
let movebtnsec = document.querySelectorAll(".movebtnsec");
// watch.onclick = function (){
//    watch.classList.add("activeback");
// }
document.addEventListener("click",(e)=>{
    // if(e.target.classList.contains("movebtnsec")){

    // }
    if(e.target.classList.contains("btn")){
        btn.forEach((ele)=>{
            ele.classList.remove("activeback")
        })
        e.target.classList.add("activeback");
    }
    else {
        btn.forEach((ele)=>{
            ele.classList.remove("activeback")
        })
    }
})

window.addEventListener("scroll",()=>{
    logo.classList.add("scroll");
    if(window.scrollY == 0) {
        logo.classList.remove("scroll");
    }
})

let logonav = document.querySelector(".logonav");
let divnav = document.querySelector(".divnav");
let divul = document.querySelector(".divul");
let xclose = document.querySelector(".logoside_nav i ")
logonav.addEventListener("click",(e)=>{
    divnav.style.display = "block";
    divul.classList.add("showsidenav")
})
xclose.onclick =  () => {
    divul.classList.remove("showsidenav");
    divnav.style.display = "none";
}







let upscroll = document.querySelector(".upscroll");

window.addEventListener("scroll",()=>{
    if(window.scrollY>= 100){
        upscroll.classList.add("showupscroll")
    }
    else {
        upscroll.classList.remove("showupscroll")
    }
})

upscroll.onclick = function () {
    window.scrollTo({
        
        top: 0
    }
    )

    
}