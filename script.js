// This code was created by WerDeveloper.
// Unauthorized copying, distribution, or modification of this code, in whole or in part, is strictly prohibited without prior written permission.
// Please do not remove or alter the credit to the original creator. If you wish to use this code for personal or commercial purposes, kindly contact the creator for permissions.
// Thank you for respecting the work and effort that went into creating this code.


// Typing Effect
var typed = new Typed('#wrd', {
    strings: ['Data Engineer', 'Python Developer', 'Data Analyst', 'Financial Analyst', 'Cloud Practitioner'],
    typeSpeed: 100,
    loop: true
});

// menubar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// footer 
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.footer');
    const footerOffsetTop = footer.offsetTop;
    const footerHeight = footer.offsetHeight;

    function checkFooterVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > footerOffsetTop + footerHeight / 4) {
            footer.classList.add('footer-animation');
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility();
});
