
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

