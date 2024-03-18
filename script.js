const prevBtn = document.querySelector(".prev__btn");
const nextBtn = document.querySelector(".next__btn");

let leftImage = document.querySelector(".left__image");
let rightImage = document.querySelector(".right__image");

let i = 1;







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




// Image Gallery Carousel (GALLERY PAGE)

// Create images inside the left gallery wrapper
const leftImageWrapper = document.querySelector("#left-image");

for (let i = 1; i < 5; i++) {
    const imageTag = document.createElement("img");

    imageTag.classList.add("new-image");

    imageTag.src = `assets/images/1%20(${i}).webp`

    leftImageWrapper.appendChild(imageTag);
}


// Create images inside the right gallery wrapper
const rightImageWrapper = document.querySelector("#right-image");

for (let i = 6; i < 10; i++) {
    const imageTag = document.createElement("img");

    imageTag.classList.add("new-image-right");

    imageTag.src = `assets/images/1%20(${i}).webp`

    rightImageWrapper.appendChild(imageTag);
}


nextBtn.addEventListener("click", () => {
    let lastChild = document.querySelector(".new-image:last-child");
    let secondToLastChild = document.querySelector(".new-image:nth-last-child(2)");

    let rightlastChild = document.querySelector(".new-image-right:last-child");
    let rightsecondToLastChild = document.querySelector(".new-image-right:nth-last-child(2)");

    
    lastChild.style.animation = "slide-left 0.4s ease-in forwards";
    secondToLastChild.style.animation = "scale-up 0.4s ease-in forwards";

    rightlastChild.style.animation = "slide-left 0.4s ease-in forwards";
    rightsecondToLastChild.style.animation = "scale-up 0.4s ease-in forwards";

    setTimeout(() => {
        lastChild.style.animation = "";
        secondToLastChild.style.animation = "";

        rightlastChild.style.animation = "";
        rightsecondToLastChild.style.animation = "";

        leftImageWrapper.prepend(lastChild);
        rightImageWrapper.prepend(rightlastChild);
    }, 400);
});


prevBtn.addEventListener("click", () => {
    let lastChild = document.querySelector(".new-image:first-child");
    let rightlastChild = document.querySelector(".new-image-right:first-child");

    gsap.timeline()
    .set([lastChild, rightlastChild], {
        x: -500,
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        onComplete: () => {
            leftImageWrapper.append(lastChild);
            rightImageWrapper.append(rightlastChild);
        }
    })
    .to([lastChild, rightlastChild], {
        x: 0,
        duration: 0.6,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    })
});


