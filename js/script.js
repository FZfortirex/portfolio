const texts = [
    "Web Developer",
    "Full-Stack Developer"
];

let count = 0;
let index = 0;
let isDeleting = false;
let currentText = '';
let typingSpeed = 100;

function type() {
    const display = document.getElementById('developerText');
    currentText = texts[count];

    if (isDeleting) {
        index--;
    } else {
        index++;
    }

    display.textContent = currentText.slice(0, index);

    if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        typingSpeed = 50;
        setTimeout(type, 1000); 
        return;
    }
    if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        typingSpeed = 100;
    }
    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);