
//Código de destinos

document.addEventListener("DOMContentLoaded", () => {

var boton = document.getElementById('boton')
    var destino = document.getElementById('destino');
    var fechaVuelo = document.getElementById('fechaVuelo');
    var exito = document.getElementById("alertaExito");
    var advertencia = document.getElementById("alertaAdvertencia")


    fetch("MOCK_DATA (3)[1].json")
    .then(response => {
            console.log('entro al fetch')
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se pudo cargar el archivo JSON.');
            }
        })
        .then(dataViajes => {
            dataViajes.slice(0,50).forEach(element => {
                destino.innerHTML += `<option>${element.destination}</option>`
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
    boton.addEventListener("click", () => {
        if (fechaVuelo.value) {
            exito.style.display = "block";
            setTimeout(() => {
                exito.style.display = "none"; 
            },3000)
        } else {
            advertencia.style.display = "block";
            setTimeout(() => {
                advertencia.style.display = "none";
            }, 3000)
        }
    })

})