let homeHash = document.getElementById("homeHash");
window.onload = function () {
    if (window.scrollY !== 0 && location.hash !== homeHash.hash){
        window.scroll(0, 0);
        location.hash = "#Home";
    }
};

window.onscroll = function () {
    if (window.scrollY > 200) {
        document.getElementById("bi").style.bottom = "15px";
        document.getElementById("bi").style.opacity = "1";
    } else {
        document.getElementById("bi").style.bottom = "-50px";
        document.getElementById("bi").style.opacity = "0";
    }
};

document.getElementById("bi").onclick = function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
};

document.querySelector("span.play").addEventListener("click", function () {
    document.querySelector("span.pause").style.display = "flex";
    this.style.display = "none";
    document.getElementById("vid").play();
}, false);

document.querySelector("span.pause").addEventListener("click", function () {
    document.querySelector("span.play").style.display = "flex";
    this.style.display = "none";
    document.getElementById("vid").pause();
}, false);

document.querySelector(".bars").onclick = function () {
    if (document.querySelector("nav ul").style.transform !== "translateY(0px)") {
        document.querySelector("nav ul").style.transform = "translateY(0px)";
    } else {
        document.querySelector("nav ul").style.transform = "translateY(-100vh)";
    }
};

const navElements = document.querySelectorAll("nav ul a");
for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("click", function () {
        if (document.documentElement.clientWidth <= 991.98) {
            document.querySelector("nav ul").style.transform = "translateY(-100vh)";
        }
    });
};

setTimeout(function () {
    document.querySelector("div.loading-container").style.display = "none";
    document.body.style.overflowY = "auto";
}, 4000);

new WOW().init();