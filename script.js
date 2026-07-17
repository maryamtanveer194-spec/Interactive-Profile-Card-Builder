const buttons = document.getElementsByClassName("greetButton");
let clickCount = [0, 0, 0];
const greetingMessage = (name, role) => {
    return `Hello, my name is ${name} and I am a ${role}!`;
};
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
    clickCount[i]++;
    let card = this.parentElement;
    let name = document.getElementById("name" + (i + 1)).innerText;
    let role = document.getElementById("role" + (i + 1)).innerText;
    let message = card.getElementsByClassName("message")[0];
    message.innerText = greetingMessage(name, role);
   let count = card.getElementsByClassName("count")[0];
   count.innerText = `Clicked ${clickCount[i]} times`;
   });
}