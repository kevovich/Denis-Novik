const name = " Волуйкевич Андрій";
let age = 21;
let boo = true

const header = document.querySelector(".header");
const active = document.querySelectorAll(".active");
const knopka = document.querySelector('#knopka');
console.log(header);

function sayHello() {
    let massage = "Hello" + name;
    console.log(massage);
}
sayHello();


console.log(header);

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(35, 28);

knopka.addEventListener("click", function () {
    console.log('clicked');
});


const headers = document.querySelectorAll(".header div");
// for (let item of headers) {
//     console.log(item);
//     item.addEventListener("click", function () {
//         console.log(item.textContent);
//     });
// };
const headerHeight = document.getElementsByClassName('header-wrapper')[0].offsetHeight
headers.forEach(function(item) {
    item.addEventListener("click", function () {
        const tab = item.getAttribute('data-tab')
        const scrollToEl = document.getElementById(tab)
        scrollToEl.scrollIntoView({ behavior: 'smooth', block: "center" });
    });
});