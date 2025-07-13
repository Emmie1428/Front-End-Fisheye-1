//Calcul le nombre total de likes
function totalLikes() {
    const allLikes = document.querySelectorAll(".likes"); 
    let total = 0;
    allLikes.forEach(like => {
        total += parseInt(like.textContent);
    });
    const totalLikesElement = document.querySelector(".totalLikes");
    if (totalLikesElement) {
        totalLikesElement.childNodes[0].textContent = total;
    }
}

