const sections = document.querySelectorAll('.section');
let currentIndex = 0;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

function handleScroll(event) {
    currentIndex += Math.sign(event.deltaY);

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= sections.length) {
        currentIndex = sections.length - 1;
    }

    scrollToSection(currentIndex);
}

window.addEventListener('wheel', handleScroll);