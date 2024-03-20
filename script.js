// function lerp(start, end, t) {
//     return start * (1 - t) + end * t;
// }

// let currentX = 0;
// let lastScrollY = 0;

// const images = document.querySelector(".images");

// window.addEventListener("wheel", (e) => {
//     lastScrollY += e.deltaY;
//     const maxScroll = images.scrollWidth - window.innerWidth;
//     lastScrollY = Math.min(Math.max(lastScrollY, 0), maxScroll);
// });

// function animate() {
//     currentX = lerp(currentX, lastScrollY, 0.075);

//     images.style.transform = `translateX(-${currentX}px)`;
    
//     requestAnimationFrame(animate);
// }

// animate();


function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
  
  let currentX = 0;
  let lastScrollY = 0;
  let currentGap = 0.5;
  
  const images = document.querySelector(".images");
  
  window.addEventListener("wheel", (e) => {
    lastScrollY += e.deltaY;
    const maxScroll = images.scrollWidth - window.innerWidth;
    lastScrollY = Math.min(Math.max(lastScrollY, 0), maxScroll);
  
    const scrollIntensity = Math.abs(e.deltaY);
    const adjustedGap = Math.min(2, lerp(0.5, 2, scrollIntensity / 100)); // Clamp adjustedGap to 2rem max
    currentGap = lerp(currentGap, adjustedGap, 0.1); // Update currentGap for smooth transitions
  });
  
  function animate() {
    currentX = lerp(currentX, lastScrollY, 0.085);
    images.style.transform = `translateX(-${currentX}px)`;
  
    const targetGap = lerp(currentGap, 0.5, 0.1); // Increase damping factor for faster reset
  
    images.style.gap = `${lerp(parseFloat(images.style.gap) || currentGap, Math.max(0.5, targetGap), 0.1)}rem`; // Interpolate and clamp targetGap to 0.5rem min
  
    requestAnimationFrame(animate);
  }
  
  animate();
  

