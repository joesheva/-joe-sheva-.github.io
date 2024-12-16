
window.onscroll = function() {scrollFunction()};





function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

        document.getElementById("hi-pic").style.height = "325px";
        document.getElementById("hi-pic").style.width = "325px";
       
    
      
      } else {
        document.getElementById("hi-pic").style.height = "350px";
        document.getElementById("hi-pic").style.width = "350px";
       
      }
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {


        document.getElementById("hi-pic").style.opacity = "100%";
 
       
    
      
      } else {
        document.getElementById("hi-pic").style.opacity = "100%";
       
      }
      
     

  if (document.body.scrollTop >  550|| document.documentElement.scrollTop > 550) {

    document.getElementById("hi-pic").style.height = "300px";
    document.getElementById("hi-pic").style.width = "300px";

  
  } else {

  }
  if (document.body.scrollTop >  550|| document.documentElement.scrollTop > 550) {

    document.getElementById("hi-pic").style.opacity = "80%";
    

  
  } else {

  }
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {

    document.getElementById("hi-pic").style.height = "275px";
    document.getElementById("hi-pic").style.width = "275px";

  
  } else {
   
   
  }
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
  
    document.getElementById("hi-pic").style.height = "250px";
    document.getElementById("hi-pic").style.width = "250px";

  
  } else {
   
  }
  if (document.body.scrollTop >  700|| document.documentElement.scrollTop > 700) {

    document.getElementById("hi-pic").style.opacity = "60%";
    

  
  } else {

  }
  if (document.body.scrollTop >700 || document.documentElement.scrollTop > 700) {

    document.getElementById("hi-pic").style.height = "225px";
    document.getElementById("hi-pic").style.width = "225px";

  
  } else {
   
   
  }
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {

    document.getElementById("hi-pic").style.height = "200px";
    document.getElementById("hi-pic").style.width = "200px";

  
  } else {
   
  }
  if (document.body.scrollTop >  750|| document.documentElement.scrollTop > 750) {

    document.getElementById("hi-pic").style.opacity = "40%";
    

  
  } else {

  }
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

    document.getElementById("hi-pic").style.height = "175px";
    document.getElementById("hi-pic").style.width = "175px";
   
  
  } else {
   
   
  }
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
  
    document.getElementById("hi-pic").style.height = "150px";
    document.getElementById("hi-pic").style.width = "150px";

  
  } else {
   
  }
  if (document.body.scrollTop >  850|| document.documentElement.scrollTop > 850) {

    document.getElementById("hi-pic").style.opacity = "20%";
    

  
  } else {

  }
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {

    document.getElementById("hi-pic").style.height = "125px";
    document.getElementById("hi-pic").style.width = "125px";

  
  } else {
   
   
  }
  if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {

    document.getElementById("hi-pic").style.height = "100px";
    document.getElementById("hi-pic").style.width = "100px";

  
  } else {
   
  }


  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

    document.getElementById("hi-pic").style.height = "75px";
    document.getElementById("hi-pic").style.width = "75px";

  
  } else {
   
   
  }
  if (document.body.scrollTop >  100|| document.documentElement.scrollTop > 1000) {

    document.getElementById("hi-pic").style.opacity = "10%";
    

  
  } else {

  }
  
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0; // Tracks the current slide index
let autoSlideInterval; // Will hold the interval ID for auto-sliding

// Function to update the active dot indicator
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Function to display a specific slide based on the index
function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0; // Reset to first slide if at the end
    } else if (index < 0) {
        currentIndex = slides.length - 1; // Go to last slide if at the beginning
    } else {
        currentIndex = index; // Otherwise, set to the provided index
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide transition
    updateDots(); // Update the dots to reflect the current slide
}

// Function to move to the next slide
function nextSlide() {
    showSlides(currentIndex + 1);
}

// Function to move to the previous slide
function prevSlide() {
    showSlides(currentIndex - 1);
}

// Start the automatic sliding of images
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 20000); // Slide every 4 seconds
}

// Stop the automatic sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the interval
}

// Add click event listeners to dots for direct slide navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        stopAutoSlide(); // Stop auto-slide when manually selecting a slide
        showSlides(parseInt(dot.dataset.index)); // Show the selected slide
        startAutoSlide(); // Restart auto-slide
    });
});

// Add event listeners for navigation buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Stop auto-slide when the mouse enters the slider container
sliderContainer.addEventListener('mouseover', stopAutoSlide);

// Restart auto-slide when the mouse leaves the slider container
sliderContainer.addEventListener('mouseout', startAutoSlide);

// Start auto-slide when the page loads
startAutoSlide();
updateDots(); // Initialize the dots







const divs = document.querySelectorAll(".back-chang");
const toolbar = document.querySelector(".toolbar");
const backDrop = document.querySelector("#back-drop");

function changeBG(div) {
  const img = div.target.src;
  backDrop.style.background = "url('" + img + "')";
  backDrop.style.backgroundRepeat = "no-repeat";
  backDrop.style.backgroundSize = "100% 100%"
  toolbar.classList.add("active")
}

divs.forEach((i) => {
  i.addEventListener("mousedown", changeBG)
});




const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : false,
})





sr.reveal('.linkedin2',{delay:350, origin:'right'})
sr.reveal('.git2',{delay:950, origin:'right'})
sr.reveal('.email2',{delay:1650, origin:'right'})

