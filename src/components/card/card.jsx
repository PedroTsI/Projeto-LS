import './card.css'

export default function Card({food:{name, price, image}, setShowModal, setSelectFood}) {
  const handlleClick = () => {
    setShowModal(true);
    setSelectFood({name, price, image})
  }
  return (
      <div className="col-3 my-4">
        <div className="card mx-auto" id="divcard" >
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h2 className="card-title fs-5">{name}</h2>
            <p className="card-text" >R${price}</p>
            <div className="row text-center">
              <button className="col mx-2 btn btn-primary" onClick={handlleClick}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
  );
};