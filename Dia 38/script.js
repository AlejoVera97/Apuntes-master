let usuarios_json = [];

function traerJSon() {
    fetch('./bbdd.json')
        .then(response => response.json())
        .then(data => {
            usuarios_json = data;
            console.log(data);
            cargarUsuarios();
        });
}


function cargarUsuarios() {
    const primerosUsuarios = usuarios_json.slice(0, 5);
    const contenedor = document.getElementById('tarjetaJson');
    console.log(primerosUsuarios);
    primerosUsuarios.forEach(user => {
        const card = document.createElement('div');
        traerJSon.className = 'tarjetaJson';

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Ciudad:</strong> ${user.address.city}</p>
            <p><strong>Empresa:</strong> ${user.company.name}</p>
        `;

        contenedor.appendChild(card);
    });
}

// Llamar a la función al cargar la página
traerJSon();