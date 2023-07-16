let check;
const PostData = async function (url, Data) {
    check = false;
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
        check = true;
        alert("error")
        return check;
    }
    
}
const ValidData = function () {

    clearAlerts();
    const username = String($("#username").val());
    let gender = "";
    for(var i = 1; i <= 3; i++)
    {
        if($("#gender"+i).is(":checked"))
        {
            gender = $("#gender"+i).val();
            break;
        }

    }
    const date = String($("#birth").val() + "T03:50:11.898Z");
    const city = String($("#city").val());
    const country = String($("#country").val());
    const password = String($("#password").val());
    if (!gender || !city || !country || !password || !username) {
        $("#alert").html("*please complete the form")
        return;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password)) {
        $("#NotValid").html("*password should be min 6 characters contain <br> A Uppercase  A Lowercase A Number");
        return;
    }
    PostData('https://routela.somee.com/api/Account/register', {
        "username": username,
        "gender": gender,
        "dateOfBirth": date,
        "city": city,
        "country": country,
        "password": password
    });
    if (check != true)
    {
         $("#taken").html("registed");
    }
    else
    $("#taken").html("username is taken");
}
const clearAlerts = function () {
    $("#NotValid").html("");
    $("#alert").html("");
    $("#taken").html("");
}

$("#submit").click(ValidData)