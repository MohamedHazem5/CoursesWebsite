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

const lang = ["english","france","arapic"]
const skill = ["Beginner","Intermediate","Hard","Expert"]
const BaseURL = "https://routela.somee.com/api"
const courseDiv = document.getElementById('Course');
const Course = function () {
    GetData(BaseURL + "/Course")
        .then(function (data) {
            if (!data[0]["id"]) { alert("error to fetch data") }
            data.forEach(course => {
                if(course["id"] == $_GET["id"])
                {
                    const setValue = function(id,value)
                    {
                        const costDiv = document.getElementById(id);
                        costDiv.innerHTML = `${course[value]}`;
                    }
                    setValue('cost',"cost");
                    setValue('Name',"title");
                    setValue('duration','duration');
                    setValue('courseName',"title");
                    setValue('courseName_',"title");
                    setValue('desc',"description");
                    const desc = document.getElementById('lang');
                    desc.innerHTML = lang[course["language"]];
                    const skill_ = document.getElementById('skill');
                    skill_.innerHTML = skill[course["skillLevel"]];
                    document.getElementById("myImg").src = course["imageURL"]
                    // const tags = document.getElementById("tags")
                    // let tag_li = document.createElement("li")
                    // if (course["tags"])
                    // {
                    //     course["tags"].forEach(tag => {
                    //     tags.appendChild(tag_li.innerHTML(tag.name))
                    // })}

                }
            });
            
            return data;
        })
        .then(function (data) {
            if (!data[0]["id"]) { alert("error to fetch data") }
            let i = 0;
            data.forEach(course => {
                if (i < 3)
                {
                    let courseElement = document.getElementById("clone").cloneNode(true)
                    courseElement.innerHTML = `
                    <div class="card-image">
                        <img src="${course["imageURL"]}" alt="...">
                    </div>
                    <a class="course-title" href="./course-details.html?id=${course["id"]}">${course["category"].name}</a>
                    <div class="card-body pt-0">
                        <h5 class="course-instructor orange">${course["title"]}</h5>
                        <p class="card-text fs-4 fw-bold">${course["description"]}</p>
                        <div class="course-review d-flex justify-content-between">
                            <div class="stars ">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                            </div>
                            <div class="rating text-black-50">
                                <span><b>4.5</b>(45 Review)</span>
                            </div>
                        </div>
                        <hr class="text-black-50">
                        <div class="cost d-flex justify-content-between">
                            <div class="left">
                                <i class="fa-solid fa-clock"></i>
                                ${course["duration"]}
                            </div>
                            <div class="right">
                                <span class="price">$${(course["cost"]/ course["duration"]).toFixed(2)}/hr</span>
                            </div>
                        </div>
                    </div>`;
                    console.log(courseElement);
                    courseDiv.appendChild(courseElement);
                }
                i++;
            });

        })
}
Course();