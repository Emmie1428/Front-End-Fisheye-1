//Mettre le code JavaScript lié à la page photographer.html
function getPhotographerId () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    console.log("id du photographe:", id);

    return id;
}

async function getPhotographerProfile(photographerId) {
    try {
        const response = await fetch("./data/photographers.json");
        const data = await response.json();
        const photographer = data.photographers.find (photographe => 
            photographe.id == photographerId );
    return photographer;
    } catch (error) {
        console.error('Erreur lors de la récupération du photographe:', error);
    return null;
    }
}

async function displayData(photographer) {
    console.log("Photographes à afficher:", photographer);
    const photographerSection = document.querySelector(".photographer_profile");
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    console.log("DOM généré:", userCardDOM);
    photographerSection.appendChild(userCardDOM);
}
    
async function init() {
    const photographerId = getPhotographerId();
    const photographer = await getPhotographerProfile(photographerId);
    await displayData(photographer);
} 

    init();