
const form = {
    email: document.querySelector("#inputEmail"),
    password: document.querySelector("#inputPassword"),
    submit: document.querySelector("#signin-btn-submit"),
};
let button = form.submit.addEventListener("click", (e) => {
    
    const login = "https://routela.somee.com/api/Account/login";

    fetch(login, {
        method: "POST",
        headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        // code here //
        if (data.error) {
            alert("Error Password or Username"); /*displays error message*/
        } else {
            console.log("success");/*opens the target page while Id & password matches*/
        }
        })
        .catch((err) => {
        console.log(err);
        });
});  