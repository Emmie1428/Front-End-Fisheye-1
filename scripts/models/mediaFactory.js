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
        const image = document.createElement("img");
        image.setAttribute("src", `assets/media/${this._photographerId}/${this._image}`);
        image.setAttribute("alt", this._title);
        return image;
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
    const video = document.createElement("video");
    video.setAttribute("src", `assets/media/${this._photographerId}/${this._video}`);
    video.setAttribute("controls", true);
    video.setAttribute("title", this._title);
    return video;
}
}


