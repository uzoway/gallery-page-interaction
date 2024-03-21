function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

let currentX = 0;
let lastScrollY = 0;

const images = document.querySelector(".images");

window.addEventListener("wheel", (e) => {
    lastScrollY += e.deltaY;
    const maxScroll = images.scrollWidth - window.innerWidth;
    lastScrollY = Math.min(Math.max(lastScrollY, 0), maxScroll);
});

function animate() {
    currentX = lerp(currentX, lastScrollY, 0.075);

    images.style.transform = `translateX(-${currentX}px)`;
    
    requestAnimationFrame(animate);
}

animate();