/* eslint-disable no-unused-vars */


function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id, likes, date, title } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( "article" );
        article.setAttribute("role", "button");
        article.setAttribute("tabindex", "0");

        //Création url id pour récupérer le photographe dans pages/profile.js
        const link = document.createElement("a");
        link.href = `./profile.html?id=${id}`;

        //Création lien img et h2 pour index.html seulement
        const imgPhotographers = document.createElement( "img" );
        imgPhotographers.setAttribute ("src", picture);
        imgPhotographers.setAttribute ("alt", `Potrait de ${name}`);
        imgPhotographers.classList.add ("imgPhotographers");

        const h2 = document.createElement( "h2" );
        h2.textContent = name;

        link.appendChild(imgPhotographers);
        link.appendChild(h2);

        //Création img pour profile.html seulement
        const imgProfile = document.createElement("img");
        imgProfile.setAttribute ("src", picture);
        imgProfile.setAttribute ("alt", `Potrait de ${name}`);
        imgProfile.classList.add("imgProfile");

        //Crétation nom pour profile.html seulement
        const h1Profile = document.createElement( "h1" );
        h1Profile.textContent = name;
        h1Profile.classList.add("profileName", "photographInfo");

        const pLocalisation = document.createElement ("p");
        pLocalisation.textContent = `${city}, ${country}`;
        pLocalisation.classList.add("localisation", "photographInfo");

        const pTagline = document.createElement ("p");
        pTagline.textContent = tagline;
        pTagline.classList.add("tagline", "photographInfo");

        //Affichage nombre total de like
        const totalLikes = document.createElement("p");
        totalLikes.classList.add("totalLikes");

        //Ajout de l'emoji coeur attaché au nombre de like total
        const likesText = document.createTextNode(likes || "0");
        
        const heart = document.createElement("span");
        heart.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"20\" height=\"20\" style=\"margin-left: 8px;\"><path d=\"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z\"/></svg>";
        heart.classList.add("heart");

        totalLikes.appendChild(likesText);
        totalLikes.appendChild(heart);

        const pPrice = document.createElement ("p");
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("price");
    
        article.appendChild(link);
        article.appendChild(imgProfile);
        article.appendChild(h1Profile);
        article.appendChild(pLocalisation);
        article.appendChild(pTagline);
        article.appendChild(totalLikes);
        article.appendChild(pPrice);
        

        return article;
    }

    return { name, portrait, city, country, tagline, price, id, date, title, getUserCardDOM }
}

