
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



