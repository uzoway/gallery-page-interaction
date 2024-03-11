const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");

let leftImage = document.querySelector(".left__image");
let rightImage = document.querySelector(".right__image");

let i = 1;

nextBtn.addEventListener("click", (e) => {

    if(i < 16) {
        // leftImage.src = `assets/images/1%20(${i}).webp`

        gsap.timeline({ defaults: { ease: "power2.inOut" }})
        .to(leftImage, { duration: 0.4, scale: 1.5})
        
        .set(leftImage, {
        attr: { src: `assets/images/1%20(${i}).webp` }}, 0.1)

        .to(leftImage, { duration: 0.4, scale: 1}, 0.1);



        rightImage.src = `assets/images/1%20(${i}).webp`
        
        i++;
        console.log(i)
    }
    else {
        leftImage.src = `assets/images/1%20(2).webp`;
        rightImage.src = `assets/images/1%20(6).webp`;
        i = 1;
        console.log(i)
    }
})

prevBtn.addEventListener("click", () => {
    if (i > 1) {
        i--;
    } else {
        i = 15; // Reset to the last image index if at the first image
    }
    leftImage.src = `assets/images/1%20(${i}).webp`;
    rightImage.src = `assets/images/1%20(${i}).webp`;
    // console.log(leftImage.src);
    console.log(i)
});


// gsap.timeline()
//         .to(leftImage, { 
//             duration: 0.4,
//             // autoAlpha: 0.33,
//             // filter: 'brightness(0%) blur(20px)'
//             scale: 1.5,
//             ease: "power2.Out"
//         })

//         .set(leftImage, {
//         attr: {
//             src: `assets/images/1%20(${i}).webp`
//         }
//         }, 0.1)

//         .to(leftImage, {
//             duration: 0.4,
//             scale: 1,
//             ease: "power2.Out"
//             // autoAlpha: 1,
//             // filter: 'brightness(100%) blur(0px)'
//         }, 0.1)




// Register CustomEase plugin
// gsap.registerPlugin(CustomEase);


// //Custom Eases 
// CustomEase.create("ease-out-quart", "0.165,0.84,0.44,1");
// CustomEase.create("custom", ".85, 0, .15, 1");



// const images = document.querySelector(".images");

// function lerp(start, end, t) {
//     return start * (1 - t) + end * t;
// }

// let currentX = 0;
// let lastScrollY = 0;

// let lastScrollTime;
// let lastScrollYNew = 0;

// let scrollTimer;
// const defaultGap = '0.5rem'; // Default gap value

// window.addEventListener("wheel", (e) => {
//     // clearTimeout(scrollTimer); // Clear the scroll timer


//     lastScrollY += e.deltaY;
//     const maxScroll = images.scrollWidth - window.innerWidth;
//     lastScrollY = Math.min(Math.max(lastScrollY, 0), maxScroll);






    


//     // console.log(currentX)

//     // const currentTime = new Date().getTime();
//     // const timeDifference = currentTime - lastScrollTime;

//     // // Get the amount scrolled
//     // const deltaY = e.deltaY;
//     // const distanceScrolled = Math.abs(deltaY - lastScrollY);
//     // lastScrollYnew = deltaY;

//     // // Calculate speed (pixels per millisecond)
//     // const speed = distanceScrolled / timeDifference;

//     // // Update last scroll time
//     // lastScrollTime = currentTime;

//     // // console.log('Scroll speed:', speed);

//     // // images.style.gap = `(${speed})`;
    

//     // scrollTimer = setTimeout(function() {
//     //     // Reset the gap value to default
//     //     images.style.gap = defaultGap;
//     // }, 100); // Adjust the timeout value as needed


//     // function gap() {
//     //     images.style.gap = speed + 'px';

//     //     requestAnimationFrame(gap);
//     // }

//     // gap();

//     // console.log(images.style.gap)
// });

// function animate() {
//     currentX = lerp(currentX, lastScrollY, 0.075);

//     images.style.transform = `translateX(-${currentX}px)`;
    
//     requestAnimationFrame(animate);
// }

// animate();



// // Image carousel

