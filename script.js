// Leave transition animation for all pages

const leaveTransitionTl = gsap.timeline({paused: true, defaults: { ease: "power4.inOut", duration: 0.7 }})

.to(".transition__overlay", { top: "0", ease: "expo.inOut" })
.to(".transition__overlay", { top: "-100%", ease: "expo.inOut", delay: 0.3 });

const leaveTransition = (container) => {
    return new Promise((resolve) => leaveTransitionTl.restart().play().then(resolve));
};


// Scripts for the Home and Gallery page

const imageGalleryAnimation = () => {
    // Image Gallery Carousel (GALLERY PAGE)
    const prevBtn = document.querySelector(".prev__btn");
    const nextBtn = document.querySelector(".next__btn");

    let i = 1;

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


    // Next button animation
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


    // Previous button animation
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
}

const galleryPageOnceTransition = (container) => {
    imageGalleryAnimation();

    const galleryPageTl = gsap.timeline({ defaults: { ease: "expo.inOut", duration: 0.7 } });
    galleryPageTl
  
    .to([".left__container .image__wrapper", ".right__container .image__wrapper"], { "--white-translate-y-percent": "-100%", delay: 0.25 })
    .to([".left__container .image__wrapper", ".right__container .image__wrapper"], { "--gray-translate-y-percent": "-100%", delay: 0.3, duration: 0.5, ease: "power2.out"}, ">-0.1")
    .fromTo([".left__container .image__wrapper .new-image", ".right__container .image__wrapper .new-image-right"], { scale: 1.5 }, { scale: 1, duration: 0.5, ease: "power2.out"}, ">-0.4")
    .from("#gallery-text", { autoAlpha: 0, duration: 0.3, ease: "power2.out" }, "<")
  
    return galleryPageTl;
}

const galleryPageEnterTransition = (container) => {
    imageGalleryAnimation();

    const galleryPageTl = gsap.timeline({ defaults: { ease: "expo.inOut", duration: 0.7 } });
    galleryPageTl
  
    .to([".left__container .image__wrapper", ".right__container .image__wrapper"], { "--white-translate-y-percent": "-100%", delay: 0.35 })
    .to([".left__container .image__wrapper", ".right__container .image__wrapper"], { "--gray-translate-y-percent": "-100%", delay: 0.3, duration: 0.5, ease: "power2.out"}, ">-0.1")
    .fromTo([".left__container .image__wrapper .new-image", ".right__container .image__wrapper .new-image-right"], { scale: 1.5 }, { scale: 1, duration: 0.5, ease: "power2.out"}, ">-0.4")
    .from("#gallery-text", { autoAlpha: 0, duration: 0.3, ease: "power2.out" }, "<")
  
    return galleryPageTl;
}

const homePageOnceTransition = (container) => {
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
}


// Barba initialization

barba.init({
    transitions: [{
        name: 'home-transition',
        to: {
            namespace: ["home-page"]
        },
        async once(data) {
            homePageOnceTransition(data.next.container);
        },
        async leave(data) {
            gsap.to(data.current.container, { opacity: 0 });
            await leaveTransition();
        },
        async enter(data) {
            data.current.container.style.opacity = "0";
            homePageOnceTransition(data.next.container);
        }
    },

    {
        name: "gallery-transition",
        to: {
            namespace: ["gallery-page"]
        },
        async once(data) {
            galleryPageOnceTransition(data.next.container);
        },
        async leave(data) {
            data.current.container.style.opacity = "0";
            await leaveTransition();
        },
        async enter(data) {
            gsap.to(data.current.container, { opacity: 0 });
            galleryPageEnterTransition(data.next.container);
        }
    }]
});