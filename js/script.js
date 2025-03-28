if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

function enlargeImage(img) {
  // Create overlay
  let overlay = document.createElement("div");
  overlay.classList.add("enlarged-overlay");
  overlay.onclick = closeImage;

  // Create enlarged image
  let enlargedImg = img.cloneNode();
  enlargedImg.classList.add("enlarged-img");
  enlargedImg.onclick = closeImage;

  // Append elements to body
  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);
}

function closeImage() {
  document.querySelector(".enlarged-overlay").remove();
}


