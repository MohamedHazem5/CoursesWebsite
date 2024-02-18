var check;
const PostData = async function (url, Data) {
    window.check = false;
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Data)
    });
    try {
        const res = await response.json()
        return res;
    }
    catch (error) {
        window.check = true;
        $("#taken").html("username is taken");
        $("#taken").css("color", "red");
        return window.check;
    }
    
}
const ValidData = async function () {

    clearAlerts();
    const username = String($("#username").val());
    const email = String($("#email").val());
    const valid = ValidateEmail(email);
    if (!valid)
    {
        $("#ValidEmail").html("please enter valid email");
        return;
    }
    const FirstName = String($("#FirstName").val());
    const LastName = String($("#LastName").val());
    let gender = "";
    for(var i = 1; i <= 3; i++)
    {
        if($("#gender"+i).is(":checked"))
        {
            gender = $("#gender"+i).val();
            break;
        }

    }
    const date = String($("#birth").val() + "T00:00:00Z");
    const city = String($("#city").val());
    const country = String($("#country").val());
    const password = String($("#password").val());
    if (!gender || !city || !country || !password || !username || !email || !FirstName || !LastName) {
        $("#alert").html("*please complete the form")
        return;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password)) {
        $("#NotValid").html("*password should be min 6 characters contain <br> A Uppercase  A Lowercase A Number");
        return;
    }
    PostData('https://routela.somee.com/api/Account/register', {
        "username": username,
        "email":email,
        "FirstName":FirstName,
        "LastName":LastName,
        "gender": gender,
        "dateOfBirth": date,
        "city": city,
        "country": country,
        "password": password
    })
    .then(Data)
    {
        console.log(Data)
    }
    if (!$("#taken").html())
    {
        $("#taken").html("registed");
        $("#taken").css("color", "green");
    }
    

}
const clearAlerts = function () {
    $("#NotValid").html("");
    $("#alert").html("");
    $("#taken").html("");
    $("#ValidEmail").html("");
}

$("#submit").click(ValidData)
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}