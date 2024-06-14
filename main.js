const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions={
    distance:"50px",
    origin:"bottom",
    duration:1000,

}

scrollRevealOptions().reveal(".header__content h1",{
    ...scrollRevealOptions,
});

scrollReveal().reveal("header__btn",{
    ...scrollRevealOptions,
    delay:500
})
