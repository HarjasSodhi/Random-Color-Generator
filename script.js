let symbols = "0123456789abcdef"
let generateBtn = document.querySelector("button");
let body = document.querySelector("body");
let container = document.querySelector(".container div");
let copied = document.querySelector(".copied");
RandomColorGenerator();

generateBtn.addEventListener("click", RandomColorGenerator)

function RandomColorGenerator() {
    let NewCode = "#";
    symbolsArr = symbols.split("");
    for (let i = 0; i < 6; i++) {
        NewCode += symbolsArr[Math.floor(Math.random() * 16)];
    }
    const el = document.createElement('textarea');
    el.value = NewCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    copied.classList.add("copiedAnimation");
    setTimeout(() => {
        copied.classList.remove("copiedAnimation");
    }, 1000);
    body.style.backgroundColor = NewCode;
    container.innerText = NewCode;
}