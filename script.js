// Register CustomEase plugin
gsap.registerPlugin(CustomEase);


//Custom Eases 
CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");
CustomEase.create("custom", ".85, 0, .15, 1");



const images = document.querySelector(".images");

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

let currentX = 0;
let lastScrollY = 0;

let lastScrollTime;
let lastScrollYNew = 0;

let scrollTimer;
const defaultGap = '0.5rem'; // Default gap value

window.addEventListener("wheel", (e) => {
    // clearTimeout(scrollTimer); // Clear the scroll timer


    lastScrollY += e.deltaY;
    const maxScroll = images.scrollWidth - window.innerWidth;
    lastScrollY = Math.min(Math.max(lastScrollY, 0), maxScroll);






    


    // console.log(currentX)

    // const currentTime = new Date().getTime();
    // const timeDifference = currentTime - lastScrollTime;

    // // Get the amount scrolled
    // const deltaY = e.deltaY;
    // const distanceScrolled = Math.abs(deltaY - lastScrollY);
    // lastScrollYnew = deltaY;

    // // Calculate speed (pixels per millisecond)
    // const speed = distanceScrolled / timeDifference;

    // // Update last scroll time
    // lastScrollTime = currentTime;

    // // console.log('Scroll speed:', speed);

    // // images.style.gap = `(${speed})`;
    

    // scrollTimer = setTimeout(function() {
    //     // Reset the gap value to default
    //     images.style.gap = defaultGap;
    // }, 100); // Adjust the timeout value as needed


    // function gap() {
    //     images.style.gap = speed + 'px';

    //     requestAnimationFrame(gap);
    // }

    // gap();

    // console.log(images.style.gap)
});

function animate() {
    currentX = lerp(currentX, lastScrollY, 0.075);

    images.style.transform = `translateX(-${currentX}px)`;
    
    requestAnimationFrame(animate);
}

animate();



