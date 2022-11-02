import {estrenos, peliculas} from '../helper/baseDatos.js'
import {pintarPeliculas, pintarPeliculasEstreno} from '../helper/pintarPeliculas.js'

pintarPeliculas(peliculas)
pintarPeliculasEstreno(estrenos)

let fila=document.getElementById("fila")
let peliculaSeleccionada={}

fila.addEventListener("click",function(e){
    peliculaSeleccionada.poster=(e.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.nombre=(e.target.parentElement.querySelector('h4').textContent)
    peliculaSeleccionada.genero=(e.target.parentElement.querySelector('h5').textContent)
    peliculaSeleccionada.idioma=(e.target.parentElement.querySelector('h6').textContent)
    peliculaSeleccionada.sinopsis=(e.target.parentElement.querySelector('p').textContent)

    console.log(peliculaSeleccionada)

    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))
    window.location.href="./src/views/ampliarInfoPeliculas.html"
})
