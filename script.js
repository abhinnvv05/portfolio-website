// Typing Effect
const text = "Hi! I'm a 3rd-year CSE student passionate about Full-Stack Development, Machine Learning, and DSA.";
let index = 0;
const typingSpeed = 50;
const typingTextElement = document.getElementById("typing-text");

function typeText() {
    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

// Smooth Fade-in Effect
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Start typing effect when page loads
document.addEventListener("DOMContentLoaded", function() {
    typeText();
});
