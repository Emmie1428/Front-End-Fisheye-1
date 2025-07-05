document.addEventListener("DOMContentLoaded", () => {
    const tri = document.getElementById("tri");
    tri.value = "popularite";
    const triStatus = document.getElementById("triStatus");
    triStatus.textContent = "Tri effectué par popularité";
    

    tri.addEventListener("change", (event) => {
        const value = event.target.value.toLowerCase();

        if (value === "popularite") {
            triPopularite(medias);
        } else if (value === "date") {
            triDate(medias);
        } else if (value === "titre") {
            triTitle(medias);
        }

        const sortedMedia = document.querySelector(".media_gallery");
        sortedMedia.innerHTML = "";
        displayMedia(medias);
        totalLikes();

        triStatus.textContent = `Tri effectué par ${value}`;
    });
});

//Tri médias selon le nombre de likes
function triPopularite(medias) { 
    medias.sort ((a, b) =>b.likes - a.likes);
}

//Tri médias selon la date de publication (plus récent au plus vieux)
function triDate(medias) {
    medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

//Tri médias par ordre alphabétique
function triTitle(medias) {
    medias.sort((a, b) => a.title.localeCompare(b.title));
}
