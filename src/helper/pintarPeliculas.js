export function pintarPeliculas(peliculas){

    let fila=document.getElementById("fila")

    
    peliculas.forEach(function(pelicula){
    
        console.log(pelicula.nombre)
        console.log(pelicula.genero)
        console.log(pelicula.duracion)
        console.log(pelicula.poster)
        console.log(pelicula.sinopsis)
        console.log(pelicula.clasificacion)
        console.log(pelicula.idioma)
        console.log(pelicula.director)
        console.log(pelicula.actores)
    
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
    
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster

        let nombre = document.createElement('h4')
        nombre.classList.add('card-title','text-left')
        nombre.textContent = pelicula.nombre
    
        let genero = document.createElement("h5")
        genero.classList.add("text-start")
        genero.textContent = "Genero: "+pelicula.genero

        let idioma=document.createElement("h6")
        idioma.classList.add("fw-bold")
        idioma.textContent=pelicula.idioma
    
        let sinopsis=document.createElement("p")
        sinopsis.classList.add("d-none")
        sinopsis.textContent=pelicula.sinopsis

        let director=document.createElement("p")
        director.classList.add("text-muted")
        director.textContent=pelicula.director

        let actores=document.createElement("p")
        actores.classList.add("actores")
        actores.textContent=pelicula.actores

        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(sinopsis)
        tarjeta.appendChild(director)
        tarjeta.appendChild(actores)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    
    })

}

export function pintarPeliculasEstreno(peliculas){

    let fila=document.getElementById("filaEstrenos")

    
    peliculas.forEach(function(pelicula){
    
        //console.log(pelicula)
        console.log(pelicula.nombre)
        console.log(pelicula.genero)
        console.log(pelicula.duracion)
        console.log(pelicula.poster)
        console.log(pelicula.sinopsis)
        console.log(pelicula.clasificacion)
        console.log(pelicula.idioma)
        console.log(pelicula.director)
        console.log(pelicula.actores)
    
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
    
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster
    
        let nombre = document.createElement('h4')
        nombre.classList.add('card-title','text-left')
        nombre.textContent = pelicula.nombre

        let genero = document.createElement("h5")
        genero.classList.add("text-start")
        genero.textContent = "Genero: "+pelicula.genero

        let idioma=document.createElement("h6")
        idioma.classList.add("fw-bold")
        idioma.textContent=pelicula.idioma
    
        let sinopsis=document.createElement("p")
        sinopsis.classList.add("d-none")
        sinopsis.textContent=pelicula.sinopsis

        let director=document.createElement("p")
        director.classList.add("text-muted")
        director.textContent=pelicula.director

        let actores=document.createElement("p")
        actores.classList.add("actores")
        actores.textContent=pelicula.actores

        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(sinopsis)
        tarjeta.appendChild(director)
        tarjeta.appendChild(actores)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    
    })

}