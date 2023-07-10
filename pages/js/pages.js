// Search Form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}



// Navbar media query
let navbar = document.querySelector('.navbar');

document.getElementById('menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}



//window onscroll
window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}




// Events slides
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// Seacrch bar for location
const inputBox = document.getElementById('input-box');
const h3Elements = document.querySelectorAll('.box h3');
const errorElement = document.createElement('h1');
errorElement.textContent = 'No location results found.';
errorElement.classList.add('error-message');
const arrivalsSection = document.getElementById('arrivals');

inputBox.addEventListener('input', function() {
    const searchTerm = inputBox.value.toLowerCase();
    let found = false; // Flag to check if any match is found

    h3Elements.forEach(function(h3) {
        const h3Text = h3.textContent.toLowerCase();

        if (h3Text.includes(searchTerm)) {
            h3.parentNode.parentNode.style.display = 'block'; // Display the parent box element
            found = true;
        } else {
            h3.parentNode.parentNode.style.display = 'none'; // Hide the parent box element
        }
    });

    // Display error message if no match is found
    if (!found) {
        arrivalsSection.appendChild(errorElement);
    } else {
        // Remove any existing error message
        if (errorElement.parentNode === arrivalsSection) {
            arrivalsSection.removeChild(errorElement);
        }
    }
});






// eye full screen image
const overlay = document.querySelector('.full-screen-overlay');
const closeBtn = overlay.querySelector('.close-btn');
const imageContainer = overlay.querySelector('.image-container');
const images = document.querySelectorAll('.box .image img');
// Handle image click event
function showFullScreenImage(e) {
    e.preventDefault();
    const imageSrc = this.src;
    imageContainer.innerHTML = `<img src="${imageSrc}" alt="">`;
    overlay.classList.add('show'); // add show class to display overlay
}
// Handle close button click event
function closeFullScreenImage() {
    overlay.classList.remove('show'); // remove show class to hide overlay
    imageContainer.innerHTML = '';
}
// Attach event listeners to images
images.forEach(image => {
    image.addEventListener('click', showFullScreenImage);
});
// Attach event listener to close button
closeBtn.addEventListener('click', closeFullScreenImage);





