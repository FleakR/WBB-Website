const gallery = document.getElementById("gridGallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let images = [];
let currentIndex = 0;

fetch("Images/gridGallery/gridGallery.json")
  .then(response => response.json())
  .then(data => {
    images = data.gridGallery;

    images.forEach(function(image, index) {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const link = document.createElement("a");
      link.href = image.src;

      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;

      const description = document.createElement("p");
      description.textContent = image.description;

      link.appendChild(img);
      item.appendChild(link);
      item.appendChild(description);
      gallery.appendChild(item);

      link.addEventListener("click", function(event) {
        event.preventDefault();

        currentIndex = index;
        openModal();
      });
    });
  });

function openModal() {
  modal.style.display = "flex";
  showImage();
}

function showImage() {
  modalImg.classList.add("fade-out");

  setTimeout(function() {
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
    modalCaption.textContent = images[currentIndex].description;

    modalImg.classList.remove("fade-out");
    modalImg.classList.add("fade-in");
  }, 200);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPreviousImage);

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", function(event) {
  if (modal.style.display === "flex") {
    if (event.key === "ArrowRight") {
      showNextImage();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }

    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  }
});




/* fehgwreshg */

const videoCarousel = document.getElementById("videoCarousel");
const videoModal = document.getElementById("videoModal");
const youtubeFrame = document.getElementById("youtubeFrame");
const videoClose = document.getElementById("videoClose");
const youtubeExternalLink = document.getElementById("youtubeExternalLink");
const videoPrev = document.getElementById("videoPrev");
const videoNext = document.getElementById("videoNext");

let videos = [];
let centreVideoIndex = 0;
let autoSpin;

fetch("Images/videoCarousel/videoCarousel.json")
  .then(response => response.json())
  .then(data => {
    videos = data.videos;
    createVideoCards();
    startAutoSpin();
  });

function createVideoCards() {
  videoCarousel.innerHTML = "";

  videos.forEach(function(video, index) {
    const card = document.createElement("div");
    card.className = "video-card";

    const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
    const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

    card.innerHTML = `
      <img src="${thumbnail}" alt="${video.title}">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    `;

    card.addEventListener("click", function() {
      youtubeFrame.src = `https://www.youtube.com/embed/${video.youtubeId}`;
      youtubeExternalLink.href = youtubeUrl;
      videoModal.style.display = "flex";
      stopAutoSpin();
    });

    videoCarousel.appendChild(card);
  });

  updateVideoPositions();
}

function updateVideoPositions() {
  const cards = document.querySelectorAll(".video-card");

  cards.forEach(function(card, index) {
    card.className = "video-card";

    let offset = index - centreVideoIndex;

    if (offset > videos.length / 2) {
      offset -= videos.length;
    }

    if (offset < -videos.length / 2) {
      offset += videos.length;
    }

    if (offset >= -2 && offset <= 2) {
      card.style.display = "block";
      card.classList.add(`position-${offset + 2}`);
    } else {
      card.style.display = "none";
    }
  });
}

function showNextVideo() {
  centreVideoIndex = (centreVideoIndex + 1) % videos.length;
  updateVideoPositions();
}

function showPreviousVideo() {
  centreVideoIndex = (centreVideoIndex - 1 + videos.length) % videos.length;
  updateVideoPositions();
}

function startAutoSpin() {
  autoSpin = setInterval(showNextVideo, 2750);
}

function stopAutoSpin() {
  clearInterval(autoSpin);
}

videoNext.addEventListener("click", showNextVideo);
videoPrev.addEventListener("click", showPreviousVideo);

videoCarousel.addEventListener("mouseenter", stopAutoSpin);
videoCarousel.addEventListener("mouseleave", startAutoSpin);

videoClose.addEventListener("click", function() {
  videoModal.style.display = "none";
  youtubeFrame.src = "";
  startAutoSpin();
});

videoModal.addEventListener("click", function(event) {
  if (event.target === videoModal) {
    videoModal.style.display = "none";
    youtubeFrame.src = "";
    startAutoSpin();
  }
});