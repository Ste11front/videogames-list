// Applicazione che mostri una lista di videogiochi 
// e che possa essere messa in ordine per nome e anno di pubblicazione

const v1 = new Videogame('\"Uncharted 4: A Thief\'s End\"', 2016); 
const v2 = new Videogame('\"Uncharted: The Lost Legacy\"', 2017); 
const v3 = new Videogame('\"The Last of Us Part II\"', 2020); 
const v4 = new Videogame('\"Detroit: Become Human\"', 2018); 
const v5 = new Videogame('\"God of War\"', 2018); 
const v6 = new Videogame('\"Marvel\'s Spider-Man\"', 2018); 
const v7 = new Videogame('\"Horizon Zero Dawn\"', 2017); 
const v8 = new Videogame('\"Ratchet & Clank\"', 2016);
const v9 = new Videogame('\"inFAMOUS Second Son\"', 2014);
const v10 = new Videogame('\"Shadow of the Colossus\"', 2018);  

const play1 = new Playstation4([v1, v2, v3, v4, v5, v6, v7, v8, v9, v10]);


function renderPage(){

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < play1.videogamesArray.length; i++) {

        const videogame = play1.videogamesArray[i]
        
        const divElement = document.createElement('div');

        divElement.classList.add('videogame-div')

        const spanTitle = document.createElement('span');

        const textNodeTitle = document.createTextNode(videogame.toStringTitle());

        spanTitle.appendChild(textNodeTitle);

        divElement.appendChild(spanTitle);

        const spanYop = document.createElement('span');

        const textNodeYop = document.createTextNode(videogame.toStringYop());

        spanYop.appendChild(textNodeYop); 

        divElement.appendChild(spanYop);

        mainContainer.appendChild(divElement);
    }

}

renderPage();


function sortCardByTitleAZ(){   
    console.log('sto ordinando per titolo (a-z)');
    play1.sortTitleAZVideogames();
    renderPage();
}

function sortCardByTitleZA(){   
    console.log('sto ordinando per titolo (z-a)');
    play1.sortTitleZAVideogames();
    renderPage();
}

function sortCardByYopAsc(){   
    console.log('sto ordinando per uscita (ascendente)');
    play1.sortYopAscVideogames();
    renderPage();
}

function sortCardByYopDes(){   
    console.log('sto ordinando per uscita (discendente)');
    play1.sortYopDesVideogames();
    renderPage();
}