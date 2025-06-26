let firstElement = null;
let lastElement = null;

function displayModal() {
    const modal = document.getElementById("contact_modal");
	const opacity = document.getElementById("modal_opacity");

    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    opacity.style.display = "block";

    //Retirer le focus de l'arrière-plan
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");
    
    const focusSeletors = "input, textarea, button";
    const  focusElements = modal.querySelectorAll (focusSeletors);
    
    //Pour coincer le focus dans la modal
    firstElement = focusElements[0];
    lastElement = focusElements[focusElements.length -1];

    if (firstElement) firstElement.focus(); 
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const opacity = document.getElementById("modal_opacity");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    opacity.style.display = "none";

    //Retirer le focus du formulaire
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");
}

//Permet de manipuler la modal avec tab et escape
document.addEventListener("keydown", function (event) {
        const modal = document.getElementById("contact_modal")
        const visible = modal && modal.style.display === "block";

        if (!visible) return; 
        
        if (event.key === "Tab") {
            if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault(); 
            lastElement.focus();  
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault(); 
            firstElement.focus();   
        } 
    }
        
        if(event.key ==="Escape") {
        closeModal();
        }
    });
