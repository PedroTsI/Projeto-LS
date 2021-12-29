import {useState, useRef} from "react";
import "./App.css";
import Card from "./components/card/card";
import FoodModal from "./components/FoodModal";
import cardapio from "./cardapio.js";


function App() {

  const [selectFood, setSelectFood] = useState({});
  const [showModal, setShowModal] = useState(false);
  
  

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              veryDeli
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Comidas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Bebidas
                  </a>
                </li>
              </ul>
              <form className="d-flex ms-auto">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Cuscuz"
                  aria-label="Search"
                  pattern="\^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/"
                />
                <button className="btn btn-outline-warning" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade mx-5 my-3 text-center"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="">
                  <img
                    src='../images/bebidas-limonada-rosa.jpg'
                    className="w-25"
                    alt=""
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a href="">
                  <img
                    src="../images/fast-food-hamburguer.jpg"
                    className="w-25"
                    alt=""
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a href="">
                  <img
                    src="../images/brasileira-acai.jpg"
                    className="w-25"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="row mx-5">
            <h1 className="text-center">Promoções</h1>
            <div className="row my-5 principal d-flex justify-content-center">
              {cardapio.map((food) => (
                <Card food={food} setShowModal={setShowModal} setSelectFood={setSelectFood} key={food.name}/>
              ))}
            </div>
            <div className="text-center my-5">
              <h2 className="my-3 fs-3">Para mais informações clique abaixo</h2>
              <button className="btn btn-primary my-3">
                <a href="" className="text-reset text-decoration-none">
                  Ver cardápio completo
                </a>
              </button>
            </div>
          </div>
          <FoodModal selectFood={selectFood} showModal={showModal} setShowModal={setShowModal}/>
          <div className="push"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
