/*BackToTop Button*/
var back = document.getElementsByClassName("BackToTop")[0];
var position =document.getElementsByClassName("landing")[0].getBoundingClientRect();
let check = setInterval(()=>
{
    position = document.getElementsByClassName("landing")[0].getBoundingClientRect();
    if(position["bottom"] > 5)
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