function guardar(){
    let n = document.getElementById('nombre').value;
    let p = document.getElementById('precio').value;
    let s = document.getElementById('stock').value;
    let i = document.getElementById('imagen').value;

    let producto={
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    };

    let url = 'https://ancona.pythonanywhere.com/productos' // ruta
    let options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: {'Content-Type': 'application/json'} //unico que va en plural por q es un objeto
    }

    fetch(url, options)
    .then(function(){
        alert("Producto agregado con exito");
        window.location.href = './productos.html' // redirigimos a productos.html
    })
    .catch(error => {
        alert('Error al algregar producto');
        console.error(error);
    })
}