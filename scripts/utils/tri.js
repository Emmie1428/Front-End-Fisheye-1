 let totalLikes = totalLikes();
 
 const tri = document.querySelector(".listBox");
    tri.addEventListener("click", function() {
        const mediaOrdonnees = Array.from(medias);
        medias.sort (function(a,b) {
            return a.totalLikes - b.totalLikes;
        })
    })