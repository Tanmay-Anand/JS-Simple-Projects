const themeToggle = document.getElementById("toggle");
const quote = document.getElementById("quote");
const sun = document.getElementById("main-sun");
const moon = document.getElementById("main-moon");
const earth = document.getElementById("main-earth");
const mars = document.getElementById("main-mars"); 

const cloudLeft = document.querySelector(".cloud-bottom-left");
const cloudRight = document.querySelector(".cloud-top-right");

// stars
function createStars(count, sizeClass) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star", sizeClass);
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(star);
  }
}


createStars(300, "small");
createStars(100, "medium");
createStars(50, "large");

// sun and moon 
function handleAnimationEnd(event) {
  if (event.target === sun) {
    if (event.animationName === 'sunExitCurve') {
      sun.style.opacity = '0';
      sun.style.transform = 'translate(100%, 100%) rotate(180deg)';
      sun.classList.remove("sun-exit-animate");

      moon.classList.add("moon-animate-enter");
      moon.addEventListener("animationend", handleAnimationEnd);
    } else if (event.animationName === 'sunEnterCurve') {
      sun.style.opacity = '1';
      sun.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      sun.classList.remove("sun-animate-enter");
    }
    sun.removeEventListener("animationend", handleAnimationEnd);

  } else if (event.target === moon) {
    if (event.animationName === 'moonEnterCurve') {
      moon.style.opacity = '1';
      moon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      moon.classList.remove("moon-animate-enter");
    } else if (event.animationName === 'moonExitCurve') {
      moon.style.opacity = '0';
      moon.style.transform = 'translate(100%, 100%) rotate(180deg)';
      moon.classList.remove("moon-animate-exit");

      sun.classList.add("sun-animate-enter");
      sun.addEventListener("animationend", handleAnimationEnd);
    }
    moon.removeEventListener("animationend", handleAnimationEnd);
  }
}

// --- Toggle  ---
themeToggle.addEventListener("change", () => {
  const isDark = themeToggle.checked;
  document.body.classList.toggle("dark-mode");

  quote.innerHTML = isDark
    ? `<p>Stars you see at night might have already died their light just arrived now.</p>`
    : `<p>You’re standing on a planet moving at ~1,670 km/h while orbiting the sun at ~107,000 km/h.</p>`;

  sun.classList.remove("sun-exit-animate", "sun-animate-enter");
  moon.classList.remove("moon-animate-enter", "moon-animate-exit");
  cloudLeft.classList.remove("cloud-exit-left", "cloud-enter-left");
  cloudRight.classList.remove("cloud-exit-right", "cloud-enter-right");

  sun.removeEventListener("animationend", handleAnimationEnd);
  moon.removeEventListener("animationend", handleAnimationEnd);

  void sun.offsetWidth;
  void moon.offsetWidth;
  void cloudLeft.offsetWidth;
  void cloudRight.offsetWidth;

  if (isDark) {
    sun.style.opacity = '1';
    sun.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    sun.classList.add("sun-exit-animate");
    sun.addEventListener("animationend", handleAnimationEnd);

    moon.style.opacity = '0';
    moon.style.transform = 'translate(-150%, 150%) rotate(0deg)';

    earth.classList.add("earth-rotate");
    cloudLeft.classList.add("cloud-exit-left");
    cloudRight.classList.add("cloud-exit-right");

    
    mars.addEventListener("mouseover", moveMarsRandomly);

  } else {
    moon.style.opacity = '1';
    moon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    moon.classList.add("moon-animate-exit");
    moon.addEventListener("animationend", handleAnimationEnd);

    sun.style.opacity = '0';
    sun.style.transform = 'translate(-150%, 150%) rotate(0deg)';

    earth.classList.remove("earth-rotate");
    cloudLeft.classList.add("cloud-enter-left");
    cloudRight.classList.add("cloud-enter-right");

    
    mars.removeEventListener("mouseover", moveMarsRandomly);
  }
});


// move Mars randomly [Imported]
function moveMarsRandomly() {
  
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  
  const marsRect = mars.getBoundingClientRect();
  const marsWidth = marsRect.width;
  const marsHeight = marsRect.height;

 
  const newLeft = Math.random() * (vw - marsWidth);
  const newTop = Math.random() * (vh - marsHeight);

  
  mars.style.left = `${newLeft}px`;
  mars.style.top = `${newTop}px`;
}