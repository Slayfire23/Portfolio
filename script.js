// template_rloftdn
// service_yhcuodp
// ZDZuCk2DiWcQ7dz_E

let isContrast = false;
let currentProjectSlide = 0;

window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

function toggleContrast() {
    isContrast = !isContrast;
    document.body.classList.add("theme-switching");
    document.body.classList.toggle("dark-theme", isContrast);

    setTimeout(() => {
        document.body.classList.remove("theme-switching");
    }, 450);
}

function toggleMobileMenu() {
    document.body.classList.toggle("mobile-menu--open");
}

function closeMobileMenu() {
    document.body.classList.remove("mobile-menu--open");
}

function toggleModal() {
    clearContactOverlays();
    document.body.classList.toggle("modal--open");
    closeMobileMenu();
}

function closeModal() {
    document.body.classList.remove("modal--open");
    clearContactOverlays();
}

function clearContactOverlays() {
    document
        .querySelectorAll(".modal__overlay--visible")
        .forEach((overlay) => overlay.classList.remove("modal__overlay--visible"));
}

function contact(event) {
    event.preventDefault();

    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    const form = event.target;
    const submitButton = document.getElementById("contact__submit");

    loading.classList.add("modal__overlay--visible");
    submitButton.disabled = true;

    emailjs
        .sendForm("service_yhcuodp", "template_rloftdn", form)
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
            form.reset();
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The message service is temporarily unavailable. Please contact me directly by email.");
        })
        .finally(() => {
            submitButton.disabled = false;
        });
}

function setProjectSlide(index) {
    const projectList = document.querySelector(".project__list");
    const projects = document.querySelectorAll(".project");
    const dots = document.querySelectorAll(".project__carousel--dot");

    if (!projectList || !projects.length) {
        return;
    }

    currentProjectSlide = (index + projects.length) % projects.length;
    projectList.style.transform = `translateX(-${currentProjectSlide * 100}%)`;

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("project__carousel--dot-active", dotIndex === currentProjectSlide);
    });
}

function moveProjectCarousel(direction) {
    setProjectSlide(currentProjectSlide + direction);
}
