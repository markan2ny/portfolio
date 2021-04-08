const toggle = document.querySelector(".toggle");
const navList = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const header =document.querySelector("header");



// Mobile Menu
toggle.addEventListener("click", function() {
    navList.classList.toggle("active");
})


// Header Scroll
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})

// NavLink
navLink.forEach(function(item) {
    item.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})

// Portfolio Gallery
$(document).ready(function() {

    $(".list").click(function() {
        const value = $(this).attr("data-filter");

        if(value == "all"){
            $(".card").show("1000");
        }
        else {
            $(".card").not("."+value).hide("1000");
            $(".card").filter("."+value).show("1000");
        }

        $(this).addClass("active").siblings().removeClass("active");
    })

})
// Typed JS
new Typed("#typing", {
	strings: ["Web Developer", "Programmer", "Freelancer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});