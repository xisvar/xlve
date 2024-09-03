document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


function scrollToTop(){
    window.scrollTo(0, 0);
}

const toggleMenu = () => {
    document.body.classList.toggle("open");
};

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.navbar-burger');

    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        document.body.classList.remove("open");
    }
});

// Close menu when pressing the ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.body.classList.remove("open");
    }
});

AOS.init();
