
document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
<a class="navbar-brand" href="index.html">LOGO</a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
  aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    <li class="nav-item">
      <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="productos.html">Productos</a>
    </li>
  </ul>
  <form class="d-flex my-2 my-lg-0">
    <input class="form-control me-sm-2" type="text" placeholder="ಠ_ಠ">
    <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
  </form>
</div>
</div>
</nav>`