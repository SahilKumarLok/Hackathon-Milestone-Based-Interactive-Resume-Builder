
const contactsection = document.getElementById("contact-section") as HTMLElement;
const arrowup = document.getElementById("arrow-up") as HTMLElement;
const arrodown = document.getElementById("arrow-down") as HTMLElement;
const projectsection = document.getElementById("project-section") as HTMLElement;
const arrowup3 = document.getElementById("arrow-up3") as HTMLElement;
const arrodown3 = document.getElementById("arrow-down3") as HTMLElement;
const educationsection = document.getElementById("education-section") as HTMLElement;
const arrowup2 = document.getElementById("arrow-up2") as HTMLElement;
const arrodown2 = document.getElementById("arrow-down2") as HTMLElement;
const btt2 = document.getElementById("show-butt2") as HTMLElement;
const btt3 = document.getElementById("show-butt3") as HTMLElement;
arrodown.addEventListener("click", () => {
    contactsection.style.display = "block"
    arrowup.style.display = "block"
    arrodown.style.display = "none"
    if (window.matchMedia("(max-width: 500px)").matches) {
       contactsection.style.marginLeft ="2rem"
        btt2.style.marginTop = "20rem";
    }
   

})
arrowup.addEventListener("click", () => {
    contactsection.style.display = "none"
    arrowup.style.display = "none"
     arrodown.style.display = "block"
     if (window.matchMedia("(max-width: 500px)").matches) {
        
        btt2.style.marginTop = "0rem";
    }
     
})

arrodown2.addEventListener("click", () => {
    educationsection.style.display = "block"
    arrowup2.style.display = "block"
    arrodown2.style.display = "none"
    if (window.matchMedia("(max-width: 500px)").matches) {
       educationsection.style.marginLeft ="2rem"
        btt3.style.marginTop = "20rem";
    }

})
arrowup2.addEventListener("click", () => {
    educationsection.style.display = "none"
    arrowup2.style.display = "none"
     arrodown2.style.display = "block"
     if (window.matchMedia("(max-width: 500px)").matches) {
       
        btt3.style.marginTop = "0rem";
    }
})

arrodown3.addEventListener("click", () => {
    projectsection.style.display = "block"
    arrowup3.style.display = "block"
    arrodown3.style.display = "none"
    if (window.matchMedia("(max-width: 500px)").matches) {
       
        projectsection.style.marginLeft = "2rem";
    }

})
arrowup3.addEventListener("click", () => {
    projectsection.style.display = "none"
    arrowup3.style.display = "none"
     arrodown3.style.display = "block"
})