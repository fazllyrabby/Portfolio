const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});
// Select all navbar links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' to the clicked link
        this.classList.add('active');
    });
});

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // scrolling down
        header.classList.add("hide");
    } else {
        // scrolling up
        header.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
}, false);


// EmailJS form submission

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload

    emailjs.sendForm("service_x06pqu3", "template_4r85izr", this)
        .then(() => {
            formMessage.textContent = "✅ Message sent successfully!";
            contactForm.reset();
        }, (error) => {
            formMessage.textContent = "❌ Failed to send message. Please try again.";
            console.error("EmailJS Error:", error);
        });
});




