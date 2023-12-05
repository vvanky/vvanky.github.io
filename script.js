const wrapper = document. querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "uwaaa, i like you too Pii";
    gif.src =
    "https://raw.githubusercontet.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn. addEventListener("mouseover",  () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.Floor(Math.random() * maxX);
    const randomY = Math.Floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});