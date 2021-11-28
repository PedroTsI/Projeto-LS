import cardapio from "./cardapio.js";

cardapio.map((food, index) => {
    if (index <= 3) {
        const recomendacoes = document.querySelector('.principal')
        recomendacoes.innerHTML += `<div class="col-3 my-4">
        <div class="card mx-auto" style="width: 12rem">
          <img class="card-img-top" src="${food.image}" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title fs-5">${food.name}</h2>
            <p class="card-text" style="color: grey;">R$${food.price}</p>
            <div class="row text-center">
              <a href="#" class="col mx-2 btn btn-primary">Comprar</a>
              <button type="button" class="col col-sm-3 btn btn-secondary me-2"><i class="bi bi-cart-plus"></i></button>
            </div>
          </div>
        </div>
      </div>`
    }
})