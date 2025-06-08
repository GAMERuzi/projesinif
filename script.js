document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const message = document.getElementById("message");
    const audio = new Audio("sounds/dogru.mp3");

    startBtn.addEventListener("click", function () {
        message.textContent = "Doğru cevap! 🎉";
        audio.play();
    });
});
