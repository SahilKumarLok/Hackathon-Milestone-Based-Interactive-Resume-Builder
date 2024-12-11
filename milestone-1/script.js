var contactsection = document.getElementById("contact-section");
var arrowup = document.getElementById("arrow-up");
var arrodown = document.getElementById("arrow-down");
var projectsection = document.getElementById("project-section");
var arrowup3 = document.getElementById("arrow-up3");
var arrodown3 = document.getElementById("arrow-down3");
var educationsection = document.getElementById("education-section");
var arrowup2 = document.getElementById("arrow-up2");
var arrodown2 = document.getElementById("arrow-down2");
var btt2 = document.getElementById("show-butt2");
var btt3 = document.getElementById("show-butt3");
arrodown.addEventListener("click", function () {
    contactsection.style.display = "block";
    arrowup.style.display = "block";
    arrodown.style.display = "none";
    if (window.matchMedia("(max-width: 500px)").matches) {
        contactsection.style.marginLeft = "2rem";
        btt2.style.marginTop = "20rem";
    }
});
arrowup.addEventListener("click", function () {
    contactsection.style.display = "none";
    arrowup.style.display = "none";
    arrodown.style.display = "block";
    if (window.matchMedia("(max-width: 500px)").matches) {
        btt2.style.marginTop = "0rem";
    }
});
arrodown2.addEventListener("click", function () {
    educationsection.style.display = "block";
    arrowup2.style.display = "block";
    arrodown2.style.display = "none";
    if (window.matchMedia("(max-width: 500px)").matches) {
        educationsection.style.marginLeft = "2rem";
        btt3.style.marginTop = "20rem";
    }
});
arrowup2.addEventListener("click", function () {
    educationsection.style.display = "none";
    arrowup2.style.display = "none";
    arrodown2.style.display = "block";
    if (window.matchMedia("(max-width: 500px)").matches) {
        btt3.style.marginTop = "0rem";
    }
});
arrodown3.addEventListener("click", function () {
    projectsection.style.display = "block";
    arrowup3.style.display = "block";
    arrodown3.style.display = "none";
    if (window.matchMedia("(max-width: 500px)").matches) {
        projectsection.style.marginLeft = "2rem";
    }
});
arrowup3.addEventListener("click", function () {
    projectsection.style.display = "none";
    arrowup3.style.display = "none";
    arrodown3.style.display = "block";
});
