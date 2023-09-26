document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Awesome Facts", "Hidden Truth"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

const externalLink = document.getElementById("external-link");


externalLink.addEventListener("click", function () {
    // Redirect to the specified URL when clicked
    window.location.href = this.href;
});
