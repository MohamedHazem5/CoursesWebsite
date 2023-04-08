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
var animate_elements = document.getElementsByClassName("animate__animated card");
let reached_0 = setInterval(()=>
{
    if(animate_elements[0].getBoundingClientRect()["top"] <= (window.innerHeight - 15))
    {
        animate_elements[0].classList.add("animate__fadeInLeft");
        animate_elements[0].classList.add("animate__delay-0.75s"); 
        clearInterval(reached_0);
    }
}, 200)
let reached_1 = setInterval(()=>
{
    if(animate_elements[1].getBoundingClientRect()["top"] <= (window.innerHeight - 15))
    {
        animate_elements[1].classList.add("animate__fadeInUp");
        animate_elements[1].classList.add("animate__delay-0.75s");
        clearInterval(reached_1);
    }
}, 200)
let reached_2 = setInterval(()=>
{
    if(animate_elements[2].getBoundingClientRect()["top"] <= (window.innerHeight - 15))
    {
        animate_elements[2].classList.add("animate__fadeInUp");
        animate_elements[2].classList.add("animate__delay-0.75s");
        clearInterval(reached_2);
    }
}, 200)
let reached_3 = setInterval(()=>
{
    if(animate_elements[3].getBoundingClientRect()["top"] <= (window.innerHeight - 15))
    {
        animate_elements[3].classList.add("animate__fadeInRight");
        animate_elements[3].classList.add("animate__delay-0.75s");
        clearInterval(reached_3);
    }
}, 200)
/* end of animation meet our experts*/
/**
 * counter up
 */
var itr1 = 0;
let icon_1 = setInterval(()=>
{
    var icon1 = document.getElementById("Icon1");
    if(icon1.getBoundingClientRect()["top"] <= (window.innerHeight - 20))
    {
        icon1.innerHTML = `${itr1}`;
        itr1+=11;
        if (itr1 >= 5670)
            clearInterval(icon_1);
    }
}, 1)
var itr2 = 0;
let icon_2 = setInterval(()=>
{
    var icon2 = document.getElementById("Icon2");
    if(icon2.getBoundingClientRect()["top"] <= (window.innerHeight - 20))
    {
        icon2.innerHTML = `${itr2}`;
        itr2 += 11;
        if (itr2 >= 5400)
            clearInterval(icon_2);
    }
}, 1)
var itr3 = 0;
let icon_3 = setInterval(()=>
{
    var icon3 = document.getElementById("Icon3");
    if(icon3.getBoundingClientRect()["top"] <= (window.innerHeight - 20))
    {
        icon3.innerHTML = `${itr3}`;
        itr3 += 4;
        if (itr3 >= 760)
            clearInterval(icon_3);
    }
}, 9)
var itr4 = 0;
let icon_4 = setInterval(()=>
{
    var icon4 = document.getElementById("Icon4");
    if(icon4.getBoundingClientRect()["top"] <= (window.innerHeight - 20))
    {
        icon4.innerHTML = `${itr4}`;
        itr4 += 5;
        if (itr4 >= 2460)
            clearInterval(icon_4);
    }
}, 1)
/* end of counter
/**
 * iframe - budy append child 
 * 
 */

var link = {};
for (var i = 0; i < 3; i++)
link[i] = document.getElementsByClassName("play_button")[i].firstElementChild.getAttribute("href").valueOf();

var iframe = {};
for (var i = 0; i < 3; i++)
iframe[i] = document.createElement("div");
for (var i = 0; i < 3; i++)
iframe[i].innerHTML = `<div class="mfp-bg mfp-ready"></div>
                        <div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabindex="-1" style="overflow: hidden auto;">
                            <div class="mfp-container mfp-s-ready mfp-iframe-holder">
                                <div class="mfp-content">
                                    <div class="mfp-iframe-scaler">
                                        <button title="Close (Esc)" type="button" class="mfp-close">×</button>
                                        <iframe class="mfp-iframe" src=${link[i]} frameborder="0" allowfullscreen=""></iframe>
                                    </div>
                                </div>
                            <div class="mfp-preloader">Loading...</div>
                        </div>
                    </div>`;
// /*on click*/
var buttons = {};
for (var i = 0; i < 3; i++)
buttons[i] = document.getElementsByClassName("play_button")[i].firstElementChild;

var close ;
for (var i = 0; i < 3; i++)
{
    buttons[i].addEventListener("click", ()=>{
        document.body.prepend(iframe[i]);
        close =  document.getElementsByClassName("mfp-close")[0];
        close.addEventListener("click",()=>{
            document.body.removeChild(document.body.firstChild);
        })
    })
}
// i sweer i dont know the reason but you should not remove this
for (var i = 0; i < 0; i++)
{
    blabla.addEventListener("");
}

// /*on click*/
// document.body.removeChild(iframe);