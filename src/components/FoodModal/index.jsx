import {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import "./foodModal.css";


export default function FoodModal(props) {
          const { selectFood, showModal, setShowModal } = props;

          const handleClose = () => {
            setShowModal(false)
            setAdress({})
            setCep('')
          };
          const handleFinally = () => {
            setShowModal(false)
            alert('Pedido Finalizado!')
            setAdress({})
            setCep('')
          }
          const handleShow = () => setShowModal(true);
          const [cep, setCep] = useState('')
          const [adress, setAdress] = useState({})

          function search(){
            let url = `https://viacep.com.br/ws/${cep}/json/`
            fetch(url)
            .then(res => res.json())
            .then(res => {
              if(res.erro) {
                alert("CEP não encontrado!")
                setCep('')
              } else {
                setAdress(res)
                console.log(adress)
              }
            })
            .catch(error => {
              alert("CEP não encontrado!")
              setCep('')
            })
          }

          function testCEP(){
            if (!/\d{5}-?\d{3}/.test(cep)) {
              alert("Digite o CEP no formato correto\nExemplo: 99999-999")
              setCep('')
              return
            }
            search() 
          }

          return (
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Compra</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col co l-sm-4 d-flex justify-content-center align-items-center">
                    <img id="food-image" src={selectFood.image} />
                  </div>
                  <div className="col col-sm-8 d-flex align-items-center">
                    <h2>{selectFood.name} - R${selectFood.price}</h2>
                  </div>
                </div>
                <hr />
                <div className="mt-3 text-center">
                  <h2> Dados da entrega</h2>
                  <form method="get">
                    <input className="form-control" name="cep" type="text" id="cep" placeholder="CEP"  size="10" maxlength="9" onChange={(e) => setCep(e.target.value)} onBlur={() => testCEP()}/>
                    <label for="rua">Rua:</label>
                    <input className="form-control" name="rua" type="text" id="rua" value={adress.logradouro} size="60"/>
                    <label for="bairro">Bairro:</label>
                    <input className="form-control" name="bairro" type="text" id="bairro" value={adress.bairro} size="40"/>
                    <label for="cidade">Cidade:</label>
                    <input className="form-control" value={adress.localidade} name="cidade" type="text" id="cidade" size="40"/>
                    <label for="uf">UF:</label>
                    <input className="form-control" value={adress.uf} name="uf" type="text" id="uf" size="2"/>
                  </form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
          </Button>
                <Button variant="primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleFinally}>
                  Finalizar Pedido
          </Button>
              </Modal.Footer>
            </Modal>
          )
}