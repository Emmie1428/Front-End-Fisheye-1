let lightboxVisible = false;
let currentIndex = [];
let mediasTries = [];

//Affiche le lightbox
function displayLightbox(index) {
    const media = mediasTries[index];

    const lightboxMedia = document.getElementById("lightbox-media");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightbox = document.querySelector(".lightbox");

    lightboxMedia.innerHTML = "";
    lightboxTitle.textContent = media.title;

    //Affiche l'image
    if (media.image) {
        const imgLightbox = document.createElement("img");
        imgLightbox.src = `assets/media/${media.photographerId}/${media.image}`;
        imgLightbox.alt = media.title;

        lightboxMedia.appendChild(imgLightbox);

    //Affiche le vidéo
    } else if (media.video) {
        const videoLightbox = document.createElement("video");
        videoLightbox.src = `assets/media/${media.photographerId}/${media.video}`;
        videoLightbox.setAttribute("controls", "true");
        videoLightbox.setAttribute("aria-label", media.title);

        lightboxMedia.appendChild(videoLightbox);
    }

    // Empêcher le focus sur main et header
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");
    main.classList.add("hidden");

    const header = document.querySelector("header");
    header.setAttribute("aria-hidden", "true");
    header.classList.add("hidden");
    header.style.overflow = "hidden";

    lightbox.classList.remove("hidden");
    lightboxVisible = true;

    document.body.style.overflow = "hidden";
}

//Affiche le prochain média avec boucle
function showNextMedia() {
    currentIndex = (currentIndex + 1) % mediasTries.length;
    displayLightbox(currentIndex);
}

//Affiche le média d'avant avec boucle
function showPreviousMedia() {
    currentIndex = (currentIndex -1 + mediasTries.length) % mediasTries.length;
    displayLightbox(currentIndex);
}

//Ferme lightbox
function closeLightbox() {
    document.querySelector(".lightbox").classList.add("hidden");
    lightboxVisible = false;

    // Focus de retour sur main et header
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    main.classList.remove("hidden");
    
    const header = document.querySelector("header");
    header.setAttribute("aria-hidden", "false");
    header.classList.remove("hidden");

     document.body.style.overflow = "";
}

//Assigne la navigation via clavier
document.addEventListener("keydown", (e) => {
    if (!lightboxVisible) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNextMedia();
    if (e.key === "ArrowLeft") showPreviousMedia();
});

//Active le fonctionnement des keydowns
document.addEventListener("DOMContentLoaded", () => {
    const nextBtn = document.querySelector(".nextLightbox");
    const prevBtn = document.querySelector(".previousLightbox");
    const closeBtn = document.querySelector(".closeLightbox");

    if (nextBtn) nextBtn.addEventListener("click", showNextMedia);
    if (prevBtn) prevBtn.addEventListener("click", showPreviousMedia);
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
});