/*BackToTop Button*/
var back = document.getElementsByClassName("BackToTop")[0];
var position_of_top = document.body.getBoundingClientRect();
let check = setInterval(()=>
{
    position_of_top = document.body.getBoundingClientRect();
    if(position_of_top["y"] > -1 * window.innerHeight)
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



console.log("test");
