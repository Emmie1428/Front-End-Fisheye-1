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
        this._likes= data.likes;
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

    //Création div info sous les médias
    const likeContainer = document.createElement ("div");
    likeContainer.classList.add("like-container")

    const title = document.createElement("p");
    title.textContent = this._title;
    title.classList.add("cardTitle");

    //Création div pour regrouper le nb de like et le coeur
    const likeBlock = document.createElement("div");
    likeBlock.classList.add("likeBlock");

    const likes = document.createElement("p");
    likes.textContent = this._likes;
    likes.classList.add("likes");

    const heart = document.createElement ("span");
    heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
    heart.classList.add("heart");
    heart.setAttribute("aria-label", "likes");

    image.addEventListener("click", () => {
        currentIndex = mediasTries.findIndex(m => m.title === this._title);
        displayLightbox(currentIndex);
    });

    //Incrémentation 1 like au 1er click du coeur et -1 au 2em click
    let liked = false;
        heart.addEventListener("click", () => {
            if (liked) {
                this._likes -= 1;
            } else {
                this._likes += 1;
            }
        liked = !liked;
        likes.textContent = this._likes;
        totalLikes();
    });

    likeBlock.appendChild(likes);
    likeBlock.appendChild(heart);

    likeContainer.appendChild(title);
    likeContainer.appendChild(likeBlock);

    mediaCard.appendChild(image);
    mediaCard.appendChild(likeContainer);
    
    
    return mediaCard;
    }
}

//Création de vidéoDOM
class videoMedia {
    constructor(data) {
        this._video = data.video;
        this._title = data.title;
        this._photographerId = data.photographerId;
        this._likes = data.likes;
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

    //Création div info sous les médias
    const likeContainer = document.createElement ("div");
    likeContainer.classList.add("like-container")

    const title = document.createElement("p");
    title.textContent = this._title;
    title.classList.add("cardTitle");

    //Création div pour regrouper le nb de like et le coeur
    const likeBlock = document.createElement("div");
    likeBlock.classList.add("likeBlock");

    const likes = document.createElement("p");
    likes.textContent = this._likes;
    likes.classList.add("likes");

    const heart = document.createElement("span")
    heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
    heart.classList.add("heart");
    heart.setAttribute("aria-label", "likes");

    video.addEventListener("click", () => {
        currentIndex = mediasTries.findIndex(m => m.title === this._title);
        displayLightbox(currentIndex);
    });

    //Incrémentation 1 like au 1er click du coeur et -1 au 2em click
    let liked = false;
        heart.addEventListener("click", () => {
            if (liked) {
                this._likes -= 1;
            } else {
                this._likes += 1;
            }
        liked = !liked;
        likes.textContent = this._likes;
        totalLikes();
    });

    likeBlock.appendChild(likes);
    likeBlock.appendChild(heart);

    likeContainer.appendChild(title);
    likeContainer.appendChild(likeBlock);

    mediaCard.appendChild(video);
    mediaCard.appendChild(likeContainer);

    return mediaCard;
    }
}
