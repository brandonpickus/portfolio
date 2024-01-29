const burger = document.querySelector(".burger");
const navContents = document.querySelector(".navbar-contents");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navContents.classList.toggle("active");
})

document.querySelectorAll(".navbar-a").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    navContents.classList.remove("active");
}))