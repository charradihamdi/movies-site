let images = {
    1: './image-4.jpg',
    2: './body-display2.jpg',
    3: './iamge-3.jpg',
    4: './body-disple1.jpg'
}

var min = 1
var max = 6
var dr = document.querySelector('figure>img')

function nextImage() {
    min++
    max++

    console.log(min)
    console.log(max)
}

const item = document.querySelectorAll('i')

const firstimage = () => {
    var bg = document.querySelector('section')
    bg.style.backgroundImage = `url(${images[1]})`
    document.querySelector('main').backgroundcolor = 'red'

}
const secondimage = () => {
    document.querySelector('main').backgroundcolor = "red"
    var bg = document.querySelector('section')
    bg.style.backgroundImage = `url(${images[2]})`

}
const thimage = () => {
    var bg = document.querySelector('section')
    bg.style.backgroundImage = `url(${images[3]})`

}
const lastimage = () => {
    var bg = document.querySelector('section')
    bg.style.backgroundImage = `url(${images[4]})`
}


/*
function choiceOfSearch() {
    const choice = document.querySelector('li').value
    alert(choice)
}*/


var x = 0.01

function changeImage() {
    document.querySelector('img').style.opacity += x;
    x++

}
setTimeout(changeImage(), 3000000);

function select() {
    let mov = document.querySelector('#types').value

}


var section = document.querySelector('#display')

async function displaymovies() {

    var URL = "http://localhost:2000/movies"
    const response = await fetch(URL, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const json = await response.json()
    console.log(json.movie)
    var s = 0
    let i = 0
    json.movie.forEach((movie, index) => {

        let date = new Date()






        if (movie.createdAt < date.toISOString() && index < 3) {


            const elm = document.querySelector('#acceuil')
            if (s < 3) {
                elm.innerHTML += (`
          
        <figure class="figure ">
        <img id="image" src="${movie.image} "class="figure-img img-fluid  rounded fade-in-down 
        p-2" alt="...">
        
    
      </figure>
              
           
        `)
                s++
            }
        }
        const film = document.querySelector('#films')
        if (movie.categorie === "film" && movie.type === "action") {

            film.innerHTML += (`
            <div id="component" class="col-3 m-1" style="border: 0px solid rgb(250, 232, 171);width: 150px;">

            <figure class="figure m-2" style="background-color: black;">
                <img src="${movie.image} " class="figure-img img-fluid rounded " alt="... ">
                <figcaption class="figure-img  ">good watch</figcaption>
            </figure>
            <h4  id="middle" class="text-start pt-3 ml-5">${movie.name}</h4>
        </div>
        `)
        }
        const drama = document.querySelector('#drama')
        if (movie.categorie === "film" && movie.type === "drama") {

            drama.innerHTML += (`
            <div id="component" class="col-3 m-1" style="border: 0px solid rgb(250, 232, 171);width: 150px;">

            <figure class="figure m-1" style="background-color: black;">
                <img src="${movie.image} " class="figure-img img-fluid rounded " alt="... ">
                <figcaption class="figure-img  ">good watch</figcaption>
            </figure>
            <h4  id="middle" class="text-start pt-3 ml-3">${movie.name}</h4>
        </div>
        `)
        }
        const magic = document.querySelector('#magic')
        if (movie.categorie === "film" && movie.type === "magic") {

            magic.innerHTML += (`
            <div id="component" class="col-3 m-1" style="border: 0px solid rgb(250, 232, 171);width: 150px;">

            <figure class="figure m-2" style="background-color: black;">
                <img src="${movie.image} " class="figure-img img-fluid rounded " alt="... ">
                <figcaption class="figure-img  ">${movie.name}</figcaption>
            </figure>
          
        </div>
        `)
        }

        const serie = document.querySelector('#serie')

        if (movie.categorie === "serie") {

            serie.innerHTML += (`
            <div id="component" class="col-2 m-1" style="border: 0px solid rgb(250, 232, 171);width: 150px;">

            <figure class="figure m-2" style="background-color: black;">
                <img src="${movie.image} " class="figure-img img-fluid rounded " alt="... ">
                <figcaption class="figure-img  ">saison : ${movie.saison} episode:${movie.episode}</figcaption>
            </figure>
            <h4   class="text-start pt-3 ml-5">${movie.name}</h4>
        </div>
        `)
        }
        const listemovies = document.querySelector('#listemovies')
        if (index >= min && index < max) {
            listemovies.innerHTML += (`
            <figure class="figure m-1" style="background-color: black;">
            <img id="hi" src="${movie.image} " class="figure-img img-fluid rounded p-2" alt="... ">
            <figcaption class="figure-img  ">saison : ${movie.saison} episode:${movie.episode}</figcaption>
        </figure>
    `)
        }
        if (index == max) {
            listemovies.innerHTML += (`
        <i onclick="nextImage()" style="font-size: 50px;" class="fas fa-chevron-right  mt-2 pt-5 pl-5 "></i>
        `)
        }
    });
}
displaymovies()
    //***************************start movies



















/*   const cardbody = document.createElement('div')
        cardbody.classList.add('card-body')

        const name = document.createElement('h5')
        cardbody.classList.add('card-title')
            //link url 
        const image = document.createElement('img')
        cardbody.appendChild(name)*/









/*
    const columnElement = document.createElement('dev')
    columnElement.classList.add('col-sm-4')
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    columnElement.appendChild(cardElement)
    const cardimage = document.createElement('img')
    cardimage.classList.add('card-image')
    cardElement.appendChild(cardimage)
    const figure = document.createElement('figure')
    figure.classList.add('image')

    cardimage.appendChild(figure)
    console.log(movie.image)
    const image = document.createElement('img')
    image.src = movie.image
    figure.appendChild(image)
    watch.appendChild(columnElement)*/