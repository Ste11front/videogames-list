class Playstation4 {
    constructor(videogamesArray) {
        this.videogamesArray = videogamesArray;
    }

    sortTitleAZVideogames() {
        this.videogamesArray.sort((a, b) => a.title.localeCompare(b.title));
    }

    sortTitleZAVideogames() {
        this.videogamesArray.sort((a, b) => b.title.localeCompare(a.title));
    }

    sortYopAscVideogames() {
        this.videogamesArray.sort((a, b) => a.yob - b.yob);
    }

    sortYopDesVideogames() {
        this.videogamesArray.sort((a, b) => b.yob - a.yob);
    }

}