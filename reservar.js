console.log("EL DOM se ha cargado");
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventdefault();

        var destino = document.getElementById('destino').value;
        var fechaVuelo = document.getElementById('fechaVuelo').value;

        alert('Has seleccionado el destino: ' + destino + '\nFecha del vuelo: ' + fechaVuelo);
    });
});
