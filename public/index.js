const bar = document.querySelector("#bar");
const navBar = document.querySelector("#navBar");

function handleNav() {
    if (navBar.classList.contains("hidden")) {
        navBar.classList.remove("hidden");
    } else {
        navBar.classList.add("hidden");
    }
}

bar.addEventListener("click",handleNav)