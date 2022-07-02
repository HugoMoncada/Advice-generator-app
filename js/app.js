let adviceNumber = document.querySelector(".id");
let advice = document.querySelector(".advice");
let dice = document.querySelector(".dice-div");


dice.addEventListener("click", () => {
    callAPI(); 
}); 

const callAPI =  async () => {
    const response = await fetch("https://api.adviceslip.com/advice?t=" + Math.random());
    const myJson = await response.json(); 
    adviceNumber.innerHTML = myJson.slip.id;
    advice.innerHTML = myJson.slip.advice 
}

callAPI(); 
