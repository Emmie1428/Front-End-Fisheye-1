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
    console.log("Photographe à afficher:", photographer);
    const photographerProfile = document.querySelector(".photographer_profile");
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    console.log("DOM généré:", userCardDOM);
   
    const img = userCardDOM.querySelector(".imgProfile");
    const name = userCardDOM.querySelector(".profileName");
    const localisation = userCardDOM.querySelector(".localisation");
    const tagline = userCardDOM.querySelector(".tagline");
    const price = userCardDOM.querySelector(".price");

    //Crétation div photographInfo pour manipuler le css
    const textBlock = document.createElement ("div");
    textBlock.classList.add("photographInfo");
    textBlock.append(name, localisation, tagline)

    //Création div priceBlock pour manipuler le css
    const priceBlock = document.createElement("div");
    priceBlock.classList.add("priceBlock");
    priceBlock.append(price);

    photographerProfile.appendChild(textBlock);
    photographerProfile.appendChild(document.querySelector(".contact_button"));
    photographerProfile.appendChild(img);
    photographerProfile.appendChild(priceBlock);
}
    
async function init() {
    const photographerId = getPhotographerId();
    const photographer = await getPhotographerProfile(photographerId);
    await displayData(photographer);
} 

    init();