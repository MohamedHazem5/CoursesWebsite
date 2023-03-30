/*BackToTop Button*/
var back = document.getElementsByClassName("BackToTop")[0];
var position_of_landingPage = document.getElementsByClassName("landing")[0].getBoundingClientRect();
let check = setInterval(()=>
{
    position_of_landingPage = document.getElementsByClassName("landing")[0].getBoundingClientRect();
    if(position_of_landingPage["bottom"] > 5)
    {
        back.classList.remove("Visiable");
        
    }
    else{
        back.classList.add("Visiable");
    }
}, 500)
back.addEventListener("click", ()=>
{
    scroll(0, 0);
})
/*End Of BackToTop Button */
/**
 * animate meet our experts section 
 * all credits to https://animate.style/
 */
var animate_elements = document.getElementsByClassName("animate__animated");

let reached_0 = setInterval(()=>
{
    if(animate_elements[0].getBoundingClientRect()["top"] <= (window.innerHeight - 30))
    {
        animate_elements[0].classList.add("animate__fadeInLeft");
        animate_elements[0].classList.add("animate__delay-0.75s"); 
    }
}, 200)
let reached_1 = setInterval(()=>
{
    if(animate_elements[1].getBoundingClientRect()["top"] <= (window.innerHeight - 30))
    {
        animate_elements[1].classList.add("animate__fadeInUp");
        animate_elements[1].classList.add("animate__delay-0.75s");
    }
}, 200)
let reached_2 = setInterval(()=>
{
    if(animate_elements[2].getBoundingClientRect()["top"] <= (window.innerHeight - 30))
    {
        animate_elements[2].classList.add("animate__fadeInUp");
        animate_elements[2].classList.add("animate__delay-0.75s");
    }
}, 200)
let reached_3 = setInterval(()=>
{
    if(animate_elements[3].getBoundingClientRect()["top"] <= (window.innerHeight - 30))
    {
        animate_elements[3].classList.add("animate__fadeInRight");
        animate_elements[3].classList.add("animate__delay-0.75s");
    }
}, 200)