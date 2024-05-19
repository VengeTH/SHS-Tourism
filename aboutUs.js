document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");
    var footer = document.querySelector("footer");
    var anim = [
        { transform: 'translateX(150%)' },
        { transform: 'translateX(0)' }
    ];
    var setting = {
        duration: 2000,
        iterations: 1,
        fill: 'forwards',
    };
    const container = document.querySelector(".container");
    container.animate(anim, setting);

    setTimeout(function() {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.right = '0';
        footer.style.marginTop = 'auto';
        body.style.margin = 'auto';
    }, 5000);
});