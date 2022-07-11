const btn = document.querySelector(".btn");
const direct = document.querySelector("#direct");
const hex1 = document.querySelector("#hex1");
const hex2 = document.querySelector("#hex2");

let direction = ["to left", "to right", "to bottom"];
let randomDir;

btn.addEventListener("click", () => {
    hex1.innerHTML = `rgba(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`;
    hex2.innerHTML = `rgba(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`;
    randomDir = Math.floor(Math.random() * direction.length);
    console.log(`linear-gradient(${direction[randomDir]},${hex1.innerHTML},${hex2.innerHTML}`)
    document.body.style.backgroundImage = `linear-gradient(${direction[randomDir]},${hex1.innerHTML},${hex2.innerHTML}`;
})