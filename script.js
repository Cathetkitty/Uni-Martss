/* =========================================
   UNIMART WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Get buttons */
    const getStarted =
        document.getElementById("getStarted");

    const loginBtn =
        document.getElementById("loginBtn");


    /* =========================================
       GET STARTED
    ========================================= */

    getStarted.addEventListener("click", function () {

        window.location.href = "login.html";

    });


    /* =========================================
       LOGIN
    ========================================= */

    loginBtn.addEventListener("click", function () {

        window.location.href = "login.html";

    });

});
// UniMart welcome page - script.js
// Palitan ang mga file name sa ibaba kung iba ang pangalan ng pages mo.

document.getElementById("getStarted").addEventListener("click", function () {
  window.location.href = "register.html";
});

document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "login.html";
});
/* =================================
   HAMBURGER MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");


/* OPEN MENU */

menuBtn.addEventListener("click", function () {

    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");

});


/* CLOSE MENU */

closeMenu.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

});


/* CLOSE WHEN CLICKING OUTSIDE */

menuOverlay.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

});


/* =================================
   ABOUT DEVELOPER
================================= */

const aboutDeveloper =
    document.getElementById("aboutDeveloper");

const developerModal =
    document.getElementById("developerModal");

const closeDeveloper =
    document.getElementById("closeDeveloper");

const doneDeveloper =
    document.getElementById("doneDeveloper");


/* OPEN ABOUT DEVELOPER */

aboutDeveloper.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

    developerModal.classList.add("active");

});


/* CLOSE ABOUT DEVELOPER */

closeDeveloper.addEventListener("click", function () {

    developerModal.classList.remove("active");

});


/* DONE BUTTON */

doneDeveloper.addEventListener("click", function () {

    developerModal.classList.remove("active");

});


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

developerModal.addEventListener("click", function (event) {

    if (event.target === developerModal) {

        developerModal.classList.remove("active");

    }
/* =================================
   HAMBURGER MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", function () {

    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");

});


/* CLOSE MENU */

closeMenu.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

});


/* CLICK OUTSIDE */

menuOverlay.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

});


/* =================================
   ABOUT DEVELOPER
================================= */

const aboutDeveloper =
    document.getElementById("aboutDeveloper");

const developerModal =
    document.getElementById("developerModal");

const closeDeveloper =
    document.getElementById("closeDeveloper");

const doneDeveloper =
    document.getElementById("doneDeveloper");


/* OPEN DEVELOPER */

aboutDeveloper.addEventListener("click", function () {

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");

    developerModal.classList.add("active");

});


/* CLOSE DEVELOPER */

closeDeveloper.addEventListener("click", function () {

    developerModal.classList.remove("active");

});


/* DONE */

doneDeveloper.addEventListener("click", function () {

    developerModal.classList.remove("active");

});


/* CLICK OUTSIDE DEVELOPER */

developerModal.addEventListener("click", function (event) {

    if (event.target === developerModal) {

        developerModal.classList.remove("active");

    }

});
});
