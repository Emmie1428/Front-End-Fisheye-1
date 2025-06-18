function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("role", "button");
        article.setAttribute("tabindex", "0");

        const link = document.createElement('a');
        link.href = `./photographer.html?id=${id}`;

        const img = document.createElement( 'img' );
        img.setAttribute ("src", picture);
        img.setAttribute ("alt", `Potrait de ${name}`);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        link.appendChild(img);
        link.appendChild(h2);

        const pLocalisation = document.createElement ('p');
        pLocalisation.textContent = `${city}, ${country}`;
        pLocalisation.classList.add("localisation");

        const pTagline = document.createElement ('p');
        pTagline.textContent = tagline;
        pTagline.classList.add("tagline");

        const pPrice = document.createElement ('p');
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("price");
        
        article.appendChild(link);
        article.appendChild(pLocalisation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);

        return article;
    }
    return { name, portrait, city, country, tagline, price, id, getUserCardDOM }
}

