    async function getPhotographers() {
    try {
        const response = await fetch("./data/photographers.json");
        const data = await response.json();
        console.log("Données récupérées:", data);
        return { photographers: data.photographers };
    } catch (error) {
        console.error("Erreur lors de la récupération des photographes:", error);
        return { photographers: [] };
    }
}

    async function displayData(photographers) {
        console.log("Photographes à afficher:", photographers);
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            console.log("Traitement du photographe:", photographer);
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            console.log("DOM généré:", userCardDOM);
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
  
