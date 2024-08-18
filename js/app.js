// JavaScript for scroll-to-top button and bubbles animation

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Create bubbles......
const bubblesContainer = document.getElementById("bubbles");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 15000);
}

setInterval(createBubble, 1000);
