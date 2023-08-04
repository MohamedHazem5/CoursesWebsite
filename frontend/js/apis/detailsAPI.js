var $_GET = new Array();
function GET() {
	var url = location.search.replace("?", "").split("&");
	for (var index = 0; index < url.length; index++) {
		var value = url[index].split("=");
		$_GET[value[0]] = value[1];
	}
}
GET();

const GetData = async function (url = '') {
    const req = await fetch(url);
    try {
        const data = await req.json();
        return data
    }
    catch (error) {
        console.log("error", error)
    }

}
const BaseURL = "https://routela.somee.com/api"
const courseDiv = document.getElementById('cost');
const Course = function () {
    GetData(BaseURL + "/Course")
        .then(function (data) {
            if (!data[0]["id"]) { alert("error to fetch data") }
            data.forEach(course => {
                if(course["id"] == $_GET["id"])
                {
                    courseDiv.innerHTML = `$${course["cost"].toFixed(2)}`;
                }
            });
        })
}

document.addEventListener("DOMContentLoaded", Course())