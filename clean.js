
   // Set the initial count down time
var initialCountDownTime = 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000 + 60 * 1000 + 1000;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get the current count down time
    var now = initialCountDownTime;

    // Decrement the count down time by 1 second
    now -= 1000;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(now / (1000 * 60 * 60 * 24));
    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((now % (1000 * 60)) / 1000);

    // Display the result in the elements with id
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (now <= 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }

    // Update the initial count down time for the next iteration
    initialCountDownTime = now;
}, 1000);


document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
        {
            text: "Healthy, clean, yummy, and in my case VEGAN meals (they offer meat ones too). It can be really hard to eat a meat-free diet down South and this has helped me immensely! The portion sizes are perfect. Fave dishes include coconut rice, masala, and artichoke caper pasta.",
            author: "~Alexis Sherman"
        },
        {
            text: "Absolutely love the variety and taste of the meals! Being a busy professional, this service has been a lifesaver. My top picks are the quinoa salad and the roasted veggie lasagna.",
            author: "~Jamie Fox"
        },
        {
            text: "As someone with dietary restrictions, finding delicious and safe meals has always been a challenge. These meals are not only healthy but also incredibly tasty!",
            author: "~Morgan Lee"
        }
    ];

    let currentIndex = 0;

    const textElement = document.getElementById("testimonial-text");
    const authorElement = document.getElementById("testimonial-author");

    const updateTestimonial = (index) => {
        textElement.innerHTML = testimonials[index].text;
        authorElement.innerHTML = testimonials[index].author;
    };

    document.getElementById("prev-button").addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        updateTestimonial(currentIndex);
    });

    document.getElementById("next-button").addEventListener("click", () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        updateTestimonial(currentIndex);
    });

    const autoChangeTestimonial = () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        updateTestimonial(currentIndex);
    };

    updateTestimonial(currentIndex); // Initialize with the first testimonial
    setInterval(autoChangeTestimonial, 2000); // Change testimonial every 5 seconds
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

        function createPopup(message) {
            const popupContainer = document.getElementById('popup-container');
            
            // Create popup element
            const popup = document.createElement('div');
            popup.className = 'fade-in p-4 bg-white shadow-lg rounded-md text-gray-700 flex items-center space-x-2';
            popup.innerHTML = `
              <i class="fas fa-info-circle text-blue-500"></i>
              <span>${message}</span>
            `};
            
        
//         const navItems = document.querySelectorAll('.md:p-4');
// const slider = document.querySelector('.slider');

// navItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     slider.classList.toggle('hidden');
//   });
// });