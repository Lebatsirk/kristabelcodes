let certIndex = 1;
changeSlide(certIndex);

// Next/previous controls
function changeSlide(n) {
  showSlide((certIndex += n));
}

// Thumbnail image controls
function showSlide(n) {
  changeSlide((certIndex = n));
}

function changeSlide(certNum) {
  let index = 0;
  let certs = document.getElementsByClassName("certs");
  let dots = document.getElementsByClassName("dot");

  // End of list has been reached so reset index to start
  if (certNum > certs.length) {
    certIndex = 1;
  }

  // At start of list, previous button moves to end of list to wrap around
  if (certNum < 1) {
    certIndex = certs.length;
  }

  // Hide all certificate images
  for (index = 0; index < certs.length; index++) {
    certs[index].style.display = "none";
  }
  //   for (index = 0; index < dots.length; index++) {
  //     dots[index].className = dots[index].className.replace(" active", "");
  //   }

  // Show selected certificate image
  certs[certIndex - 1].style.display = "block";

  //   dots[certIndex - 1].className += " active";
}
