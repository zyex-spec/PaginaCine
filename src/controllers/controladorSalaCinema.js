import {pintarSillas} from "../helper/pintarSillas.js"


let asientos = [
    [{id:"a1",estado:2},{id:"b1",estado:2},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

let cinema = document.getElementById("salacinema")
let reserva = document.getElementById("reservar")
let acum = 0
let valorBoleta = 20000
let vlrTotal = 0

pintarSillas(asientos, cinema)

cinema.addEventListener("click",function(e){
    if(e.target.tagName=="IMG"){
        let idAsientoSeleccionado=e.target.id

        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.id==idAsientoSeleccionado){
                    if(asiento.estado==0)
                    {
                        asiento.estado=1
                        e.target.src="../../assets/img/chair (1).png"
                    }else if(asiento.estado==1)
                    {
                        asiento.estado=0
                        e.target.src="../../assets/img/chair (2).png"
                    }
                }
            })
        })
    }
})

let n = 0

reserva.addEventListener("click",function(e){
    acum = 0
    n = 0
    asientos.forEach(function(hilera){
        hilera.forEach(function(asiento){
            if(asiento.estado==1){
                acum = acum + 1
                asiento.estado = 2
                let puesto = document.getElementById(asiento.id)
                puesto.src = "../../assets/img/chair.png"
                n = n + 1 
            }
        })
    })
    //console.log(asientosReservados)
    if(acum==0){
        let vlr = document.getElementById("Valor")
        vlr.textContent = "Para generar la factura debe seleccionar almenos un puesto"
    }
    else{
        vlrTotal = acum*valorBoleta
        let vlr = document.getElementById("Valor")
        vlr.textContent = "El valor es: "+vlrTotal
        console.log(asientos)
    }
    localStorage.setItem("asientosReservados",JSON.stringify(asientos))
})




