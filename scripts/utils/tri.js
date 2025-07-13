document.addEventListener("DOMContentLoaded", () => {
    const triList = document.querySelector(".options");
    const menuDown = document.getElementById("menu-down");
    const menuUp = document.getElementById("menu-up");
    
    const options = triList.querySelectorAll("li");
    const currentOption = options[0];
    const triValue = triList.querySelector(".triValue");
    const otherOptions = [...options].slice(1);

    //sr-only description du tri
    const triStatus = document.getElementById("triStatus");
    triStatus.textContent = "Tri effectué par popularité";
   
    //Cache les autres options et affiche le menuDown
    otherOptions.forEach(option => option.classList.add("hidden"));
    menuDown.classList.remove("hidden");

    //Ouverture et fermeture du menu déroulant avec la souris
    currentOption.addEventListener("click", () => {
        const isOpen = !otherOptions[0].classList.contains("hidden");
        
        otherOptions.forEach(option => {
            if (isOpen) {
                option.classList.add("hidden");
            } else {
                option.classList.remove("hidden");
            }
        });

        menuDown.classList.toggle("hidden", !isOpen);
        menuUp.classList.toggle("hidden", isOpen);

        currentOption.setAttribute("aria-expanded", String(!isOpen));
    });     

    //Ouverture et fermeture du menu déroulant avec enter
    currentOption.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); 
        const isOpen = !otherOptions[0].classList.contains("hidden");

        otherOptions.forEach(option => {
            if (isOpen) {
                option.classList.add("hidden");
            } else {
                option.classList.remove("hidden");
            }
        });

        menuDown.classList.toggle("hidden", !isOpen);
        menuUp.classList.toggle("hidden", isOpen);

        currentOption.setAttribute("aria-expanded", String(!isOpen));
        }
    });

    //Génère le tri selon l'option choisi
    otherOptions.forEach(option => {
        option.addEventListener("click", () => {
        const selectedText = option.textContent;
        const selectedValue = option.dataset.value;
            if (selectedValue === "popularite") {
                triPopularite(medias);
            } else if (selectedValue === "date") {
                triDate(medias);
            } else if (selectedValue === "titre") {
                triTitle(medias);
            }

            mediasTries = [...medias];

        document.querySelector(".media_gallery").innerHTML = "";
        displayMedia(medias);
        totalLikes();

        const oldText = triValue.textContent;
        const oldValue = currentOption.dataset.value;

        triValue.textContent = option.textContent;
        currentOption.dataset.value = selectedValue;
        triStatus.textContent = `Tri effectué par ${selectedText}`;

        option.textContent = oldText;
        option.dataset.value = oldValue;

        //Cache les autres options et le menuUp, réaffiche le menuDown
        otherOptions.forEach(opt => opt.classList.add("hidden"));
        menuDown.classList.remove("hidden");
        menuUp.classList.add("hidden");
        });

        //Sélectionne une option avec la touche Enter
        option.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            option.click(); 
            }
        });
    });

    //Ferme le liste déroulante si on sort avec Tab, garde le focus sur la liste
    triList.addEventListener("focusout", () => {
         setTimeout(() => {
        const focusedElement = document.activeElement;
        const inList = triList.contains(focusedElement);
            if (!inList) {
                otherOptions.forEach(option => option.classList.add("hidden"));
                menuDown.classList.remove("hidden");
                menuUp.classList.add("hidden");
                currentOption.setAttribute("aria-expanded", "false");
            }
        }, 0);
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
