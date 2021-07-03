let symbols = "0123456789abcdef"
let colorBtn = document.querySelector(".color");
let gradientBtn = document.querySelector(".gradient");
let body = document.querySelector("body");
let container = document.querySelector(".syntax");
let copied = document.querySelector(".copied");
RandomGradientGenerator();

colorBtn.addEventListener("click", RandomColorGenerator)
gradientBtn.addEventListener("click", RandomGradientGenerator)

function RandomGradientGenerator() {
    copied.classList.remove("copiedAnimation");
    let NewCode = [];
    symbolsArr = symbols.split("");
    for (let j = 0; j < 3; j++) {
        let temp = "#";
        for (let i = 0; i < 6; i++) {
            temp += symbolsArr[Math.floor(Math.random() * 16)];
        }
        NewCode.push(temp);
    }
    body.style.backgroundImage = 'linear-gradient('
        + "to left" + ', ' + NewCode[0] + ', ' + NewCode[1] + ", "+NewCode[2]+')';
    const el = document.createElement('textarea');
    el.value = NewCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    copied.classList.add("copiedAnimation");
    container.innerText = NewCode;
}

function RandomColorGenerator() {
    copied.classList.remove("copiedAnimation");
    body.style.backgroundImage ="none"
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
    body.style.backgroundColor = NewCode;
    container.innerText = NewCode;
}