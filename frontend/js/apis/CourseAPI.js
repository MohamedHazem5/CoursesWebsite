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
const courseDiv = document.getElementById('Course');
const Course = function (max_num) {
    GetData(BaseURL + "/Course")
        .then(function (data) {
            if (!data[0]["id"]) { alert("error to fetch data") }
            data.forEach(course => {
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
                max_num--;
                if (!max_num) {
                    return;
                }
            });

        })
}

document.addEventListener("DOMContentLoaded", Course(6))


