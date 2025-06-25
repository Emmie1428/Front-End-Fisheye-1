//Création mediaFactory pour différencier un vidéo d'une image 
class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new imageMedia(data);
        } else if (data.video) {
            return new videoMedia(data);
        } else {
            throw new Error ("Ce type de média n'est pas supporté"); 
        }
    }
}

//Création de imageDOM
class imageMedia {
    constructor (data) {
        this._image = data.image;
        this._title = data.title;
        this._photographerId = data.photographerId;
    }
    getDOM () {

    const mediaCard = document.createElement("div");
    mediaCard.classList.add("media-card");

    const image = document.createElement("img");
    image.setAttribute("src", `assets/media/${this._photographerId}/${this._image}`);
    image.setAttribute("alt", this._title);
    image.setAttribute("title", this._title);
    image.setAttribute("tabindex", "0");
    image.classList.add("photo");

    const title = document.createElement("p");
    title.textContent = this._title;
    title.classList.add("cardTitle");

    mediaCard.appendChild(image);
    mediaCard.appendChild(title);
    
    return mediaCard;
    }
}

//Création de vidéoDOM
class videoMedia {
    constructor(data) {
        this._video = data.video;
        this._title = data.title;
        this._photographerId = data.photographerId;
    }
    getDOM () {

    const mediaCard = document.createElement("div");
    mediaCard.classList.add("media-card");

    const video = document.createElement("video");
    video.setAttribute("src", `assets/media/${this._photographerId}/${this._video}`);
    video.setAttribute("controls", true);
    video.setAttribute("aria-label", this._title);
    video.setAttribute("title", this._title);
    video.classList.add("video");

    const title = document.createElement("p");
    title.textContent = this._title;
    title.classList.add("cardTitle");

    mediaCard.appendChild(video);
    mediaCard.appendChild(title);

    return mediaCard;
    }
}


