stickyNav();
fadeInScroll();

// Lightbox Gallery ///////////////////////
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery-image');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    img.style.height = '80%'
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active');
})


// Fade In Social Icons /////////////////
function fadeInScroll(){
  // Set a variable for our button element.
  const socialButtons = document.getElementById('social-bar');

  // Set up a function that shows social buttons if we scroll beyond the height of the initial window.
  const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;
    
    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 700) {
      socialButtons.className = "show";
    } else {
      socialButtons.className = "hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);
}

// Sticky Nav Function ///////////////////////////
function stickyNav(){
  var h = document.getElementById("main-nav");
  var stuck = false;
  var stickPoint = getDistance();
  var firstSection = document.getElementById("postres");
  var navHeight = h.clientHeight;
  var newDiv = document.getElementById("sticky-margin");

  function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
  }

  window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ( (distance <= 0) && !stuck) {
      h.style.transform = 'all 0.3s ease';
      h.style.position = 'fixed';
      h.style.top = '0px';
      h.style.width = '100%';
      stuck = true;
      newDiv.style.height = navHeight + 'px';
      newDiv.style.display = 'block';
    } else if (stuck && (offset <= stickPoint)){
      h.style.position = 'static';
      stuck = false;
      newDiv.style.display = 'none';
    }
  }

}