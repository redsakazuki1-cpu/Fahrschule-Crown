
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        question.parentElement.classList.toggle("active");
    });
});


let hour = new Date().getHours();
let greetingText = "";

function showGreeting() {

    if (hour < 12) {
        greetingText = "Guten Morgen";
    }
    else if (hour < 17) {
        greetingText = "Guten Nachmittag";
    }
    else {
        greetingText = "Guten Abend";
    }
    document.getElementById("greeting").innerText = greetingText; 
}

showGreeting();


const heroImage = document.getElementById("heroImage");

let images = [
    "learner.jpg",
    "learner2.jpg",
    "learner3.png"
];

let currentImage = 0;

setInterval(function () {
    currentImage++; 
if (currentImage >= images.length) {
    currentImage = 0;
}
heroImage.style.opacity = "0.0001";
setTimeout(function () {
    heroImage.src = images[currentImage];
    heroImage.style.opacity = "1";

}, 800);
}, 10000);



