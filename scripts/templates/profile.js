function profileTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getProfileCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("role", "button");
        article.setAttribute("tabindex", "0");

        const img = document.createElement( 'img' );
        img.setAttribute ("src", picture);
        img.setAttribute ("alt", `Potrait de ${name}`);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const pLocalisation = document.createElement ('p');
        pLocalisation.textContent = `${city}, ${country}`;
        pLocalisation.classList.add("localisation");

        const pTagline = document.createElement ('p');
        pTagline.textContent = tagline;
        pTagline.classList.add("tagline");

        //const pPrice = document.createElement ('p');
        //pPrice.textContent = `${price}€/jour`;
        //pPrice.classList.add("price");
    
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pLocalisation);
        article.appendChild(pTagline);
        //article.appendChild(pPrice);

        return article;
    }

    
    return { name, portrait, city, country, tagline, price, id, getProfileCardDOM }
}