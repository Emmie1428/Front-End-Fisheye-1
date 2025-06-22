function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("role", "button");
        article.setAttribute("tabindex", "0");

        //Création url id pour récupérer le photographe dans pages/profile.js
        const link = document.createElement('a');
        link.href = `./profile.html?id=${id}`;

        //Création lien img et h2 pour index.html seulement
        const imgPhotographers = document.createElement( 'img' );
        imgPhotographers.setAttribute ("src", picture);
        imgPhotographers.setAttribute ("alt", `Potrait de ${name}`);
        imgPhotographers.classList.add ("imgPhotographers");

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        link.appendChild(imgPhotographers);
        link.appendChild(h2);

        //Création img pour profitle.html seulement
        const imgProfile = document.createElement('img');
        imgProfile.setAttribute ("src", picture);
        imgProfile.setAttribute ("alt", `Potrait de ${name}`);
        imgProfile.classList.add("imgProfile");

        //Crétation nom pour profile.html seulement
        const h1Profile = document.createElement( 'h1' );
        h1Profile.textContent = name;
        h1Profile.classList.add("profileName", "photographInfo");

        const pLocalisation = document.createElement ('p');
        pLocalisation.textContent = `${city}, ${country}`;
        pLocalisation.classList.add("localisation", "photographInfo");

        const pTagline = document.createElement ('p');
        pTagline.textContent = tagline;
        pTagline.classList.add("tagline", "photographInfo");

        const pPrice = document.createElement ('p');
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("price");
    
        article.appendChild(link);
        article.appendChild(imgProfile);
        article.appendChild(h1Profile);
        article.appendChild(pLocalisation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return article;
    }

    return { name, portrait, city, country, tagline, price, id, getUserCardDOM }
}

