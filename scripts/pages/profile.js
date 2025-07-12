let medias = [];

//Get id du photographe pour cibler leur profile
function getPhotographerId () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    console.log("id du photographe:", id);

    return id;
}

//Get infos du profile pour displayData
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


//Affichage des infos du profile
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
    const totalLikes = userCardDOM.querySelector(".totalLikes");

    //Crétation div photographInfo pour manipuler le css
    const textBlock = document.createElement ("div");
    textBlock.classList.add("photographInfo");
    textBlock.append(name, localisation, tagline);

    //Création div priceBlock pour manipuler le css
    const priceBlock = document.createElement("div");
    priceBlock.classList.add("priceBlock");
    priceBlock.append(totalLikes);
    priceBlock.append(price);

    photographerProfile.appendChild(textBlock);
    photographerProfile.appendChild(document.querySelector(".contact_button"));
    photographerProfile.appendChild(img);
    photographerProfile.appendChild(priceBlock);
}
    

//Get infos des médias pour displayMedia
async function getPhotographerMedias(photographerId) {
    try {
        const response = await fetch("./data/photographers.json");
        const data = await response.json();
        const medias = data.media.filter (media => 
            media.photographerId == photographerId );
    return medias;
    } catch (error) {
        console.error('Erreur lors de la récupération des médias:', error);
    return [];
    }
}

//Affichage des médias du photographe
async function displayMedia(medias) {
    const gallerySection = document.querySelector(".media_gallery");

    medias.forEach(mediaData => {
        const media = new MediaFactory(mediaData);
        const mediaDOM = media.getDOM();
        gallerySection.appendChild(mediaDOM); 
    })
}

mediasTries.forEach((medias, index) => {
    
})

async function init() {
    const photographerId = getPhotographerId();
    const photographer = await getPhotographerProfile(photographerId);
    medias = await getPhotographerMedias(photographerId);
    

    await displayData(photographer); 
    triPopularite(medias);
    mediasTries = [...medias];
    displayMedia(medias);
    totalLikes();

    setNameContactForm(photographer.name);
} 

    init();
