/* eslint-disable no-unused-vars */
let focusElements = [];
let firstElement = null;
let lastElement = null;

function displayModal() {
    const modal = document.querySelector(".modal");
    const opacity = document.getElementById("modal_opacity");

    modal.classList.remove("hidden");
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    opacity.classList.remove("hidden");

    //Empêche le scroll en arrière-plan
    document.body.style.overflow = "hidden";

    // Empêcher le focus sur main et header
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");

    const header = document.querySelector("header");
    header.setAttribute("aria-hidden", "true");

    // Sélection deses éléments focusables 
    focusElements = modal.querySelectorAll(".focusable");
    firstElement = focusElements[0];
    lastElement = focusElements[focusElements.length - 1];

    if (firstElement) firstElement.focus();
}

function closeModal() {
    const modal = document.querySelector(".modal");
    const opacity = document.getElementById("modal_opacity");

    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    opacity.classList.add("hidden");

    //Retour du scroll de l'arrière-plan
    document.body.style.overflow = "";

    // Focus de retour sur main et header
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
    

    const header = document.querySelector("header");
    header.setAttribute("aria-hidden", "false");
    
}

// Gestion de tab et escape
document.addEventListener("keydown", function (event) {
    const modal = document.querySelector(".modal");
    const visible = modal && modal.style.display === "flex";

    if (!visible) return;

    // Trap du focus dans la modale
    if (event.key === "Tab") {
        if (event.shiftKey) {

            if (document.activeElement === firstElement) {
                event.preventDefault();
                
            }
        } else {
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }

    // Fermer la modale
    if (event.key === "Escape") {
        closeModal();
    }
});

//Console.log de l'envoie de formulaire
const form = document.getElementById("contact_form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const prenom = form.elements["prenom"].value;
        const nom = form.elements["nom"].value;
        const email = form.elements["email"].value;
        const message = form.elements["message"].value;

        console.log("Prénom: ", prenom);
        console.log("Nom: ", nom);
        console.log("Email: ", email);
        console.log("Message: ", message);
    });
}

//Affichage du nom en dessous de Contactez-moi
function setNameContactForm (photographerName){
    const name = document.querySelector(".nameContactForm");
    name.textContent = photographerName;
}