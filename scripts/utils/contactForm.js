let modalOpener;

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");

    //Retirer le focus de l'arrière-plan
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "true");

    modalOpener = document.activeElement;
    
    const focusSeletors = "input, textarea, button";
    const  focusElements = modal.querySelectorAll (focusSeletors);
    const firstElement = focusElements[0];
    const lastElement = focusElements[focusElements.length -1];

    if (firstElement) firstElement.focus(); 

    modal.addEventListener("keydown", function (event) {
        if (event.key === "Tab" && document.activeElement === lastElement) {
            event.preventDefault(); 
            firstElement.focus();   
        } 
        if(event.key ==="Escape") {
        closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    //Retirer le focus du formulaire
    const main = document.getElementById("main");
    main.setAttribute("aria-hidden", "false");

    if (modalOpener) {
        modalOpener.focus();
    }
}
