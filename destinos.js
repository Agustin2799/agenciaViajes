
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("container");

    fetch("MOCK_DATA (3)[1].json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('No se pudo cargar el archivo JSON.');
            }
        })
        .then(dataViajes => {
            dataViajes.slice(0, 50).forEach((destino, index) => {
                contenedor.innerHTML += `<div class="col-md-4"><div class="card" style="width: 18rem;">
                    <img src="${destino.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${destino.destination}</h5>
                        <a href="#" class="btn btn-primary">Agendar</a>
                    </div>
                </div></div>`;
            
            });
            console.log(dataViajes);
            // Puedes trabajar con el objeto JSON aquí
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
})