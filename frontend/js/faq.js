let selections = document.querySelectorAll(".card_header");
// To Collabse The card
// I Put tog To Detrmine When It Open And When Not
for (let selected of selections){
    selected.nextElementSibling.style.display = "none";
    selected.firstElementChild.classList.remove("fa-circle-minus")
    selected.firstElementChild.classList.add("fa-circle-plus")
}
for (let selected of selections)
{
    selected.addEventListener("click",() =>
    {
        if (selected.firstElementChild.classList[1] == "fa-circle-minus"){
            selected.firstElementChild.classList.remove("fa-circle-minus")
            selected.firstElementChild.classList.add("fa-circle-plus")
            selected.nextElementSibling.style.display = "none";
        }
        else
        {
            for (let selected of selections){
                selected.nextElementSibling.style.display = "none";
                selected.firstElementChild.classList.remove("fa-circle-minus")
                selected.firstElementChild.classList.add("fa-circle-plus")
            }
            selected.nextElementSibling.style.display = "block";
            selected.firstElementChild.classList.remove("fa-circle-plus")
            selected.firstElementChild.classList.add("fa-circle-minus")
        }
    })
}