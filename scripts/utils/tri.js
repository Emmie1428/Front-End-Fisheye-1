document.addEventListener("DOMContentLoaded", () => {
    const listbox = document.querySelector(".listbox");
    const triOptions = document.querySelector(".options");
    const menuDown = document.getElementById("menu-down");
    const menuUp = document.getElementById("menu-up");
    
    //sr-only description du tri
    const triStatus = document.getElementById("triStatus");
    triStatus.textContent = "Tri effectué par popularité";
    triOptions.dataset.value = "popularite";
   

    //Ouvre le menu déroulant au click
    triOptions.addEventListener("click", () => {
        const isHidden = options.classList.contains("hidden");
        
        triOptions.setAttribute("aria-expanded", "false");
        if (isHidden) {
            menuDown.style.display = "none";
            menuUp.style.display = "flex";
        } else {
            menuDown.style.display = "flex";
            menuUp.style.display = "none";
        }
    });
        
    listbox.querySelectorAll("li").forEach(option => {
        option.addEventListener("click", () => {
            const value = option.dataset.value;
                if (value === "popularite") {
                    triPopularite(medias);
                } else if (value === "date") {
                    triDate(medias);
                } else if (value === "titre") {
                    triTitle(medias);
                }

        document.querySelector(".media_gallery").innerHTML = "";
        displayMedia(medias);
        totalLikes();

        document.querySelector(".triValue").textContent = option.textContent;
        triOptions.dataset.value = value;
        triStatus.textContent = `Tri effectué par ${option.textContent}`;
    
        //Refermer le menu déroulant
        options.classList.add("hidden");
        triOptions.setAttribute("aria-expanded", "false");
        menuDown.style.display = "flex";
        menuUp.style.display = "none";
        });
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
