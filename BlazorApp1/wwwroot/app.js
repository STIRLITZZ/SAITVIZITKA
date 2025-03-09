document.getElementById('blazor-error-ui').style.display = 'none';

const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");



let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener("scroll", () => {
    let scroll = window.scrollY; 
    let sectionY = section.getBoundingClientRect().top;

    translate.forEach(element => {
        let speed = parseFloat(element.dataset.speed); 
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    ////opacity.forEach(element => {
    ////    element.style.opacity = Math.min(scroll / (sectionY + section_height), 1); 
    ////});

    big_title.style.opacity = Math.max(1 - scroll / (header_height / 2), 0);

    //shadow.style.height = `${Math.min(scroll * 0.5 + 300, 600)}px`;

    content.style.transform = `translateY(${Math.max(
        scroll / (section_height + sectionY) * 50 - 50,
        -50
    )}px)`;

    image_container.style.transform = `translateY(${Math.min(
        scroll / (section_height + sectionY) * -50 + 50,
        50
    )}px)`;

    border.style.width = `${Math.min(scroll / (sectionY + section_height) * 30, 100)}%`;
});

//document.addEventListener("DOMContentLoaded", () => {
//    const observerOptions = {
//        threshold: 0.2, 
//    };

//    const observer = new IntersectionObserver((entries, observer) => {
//        entries.forEach(entry => {
//            if (entry.isIntersecting) {
//                entry.target.classList.add("visible");
//                observer.unobserve(entry.target); 
//            }
//        });
//    }, observerOptions);

//    //const sections = document.querySelectorAll(".appear-on-scroll");
//    //sections.forEach(section => {
//    //    observer.observe(section);
//    //});
//});

//document.addEventListener("DOMContentLoaded", function () {
//    const observer = new IntersectionObserver(entries => {
//        entries.forEach(entry => {
//            if (entry.isIntersecting) {
//                entry.target.classList.add("visible");
//            }
//        });
//    }, { threshold: 0.3 });

//    document.querySelectorAll(".opacity").forEach(element => {
//        observer.observe(element);
//    });
//});

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.appear-on-scroll');

    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('opacity');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}