import React from 'react';
import { useParams } from 'react-router-dom';
import { mockItem } from './utils';
import './EstiloNavBar.css';
import ItemCount from './ItemCount';

const ItemDetail = () => {

  const { id } = useParams();

  const item = mockItem.find(item => item.id === parseInt(id));

  if (!item) {
    return (

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "red" }}>
        <img src="../public/navegador.png" alt="Descripción de la foto" height={300} style={{ marginBottom: '20px' }} />
        <div className="d-flex justify-content-center align-items-center text-center">
          <h2>Producto con el id: {id} no encontrado</h2>
        </div>
      </div>



    )

  }

  return (
    <>
      <div className="product-detail-container bg-secondary">
        <div className="product-image">
          <img src={item.imageUrl} alt={item.nombre} />
        </div>
        <div className="product-details ">
          <div className='detalles-info'>
            <h6>Categoria: {item.categoria}</h6>
            <h2 className="product-name">{item.nombre}</h2>
            <p className="product-price">Precio: ${item.precio}</p>
            <p className="product-price-discount">Precio: ${item.precioTransferencia} - 10% de descuento pagando con Transferencia Bancaria/Efectivo</p>
            <p><b>Envío gratis</b> superando los $90.000,00</p>
            <ItemCount stock={item.stock} />
            <button className="buy-button">Comprar</button>
            <div className="MediosDePago mt-3">
              <h5>Medios de pago</h5>
              <img src="../public/MediosDePago/mastercard@2x.png" alt="mastercard" />
              <img src="../public/MediosDePago/mercadopago@2x.png" alt="mercadoPago" />
              <img src="../public/MediosDePago/pagofacil@2x.png" alt="pagoFacil" />
              <img src="../public/MediosDePago/rapipago@2x.png" alt="rapiPago" />
              <img src="../public/MediosDePago/tarjeta-naranja@2x.png" alt="tarjeta naranja" />
              <img src="../public/MediosDePago/visa@2x.png" alt="visa" />

            </div>
            <img src="public\Logos\transporte.png" alt="" /><span className='ms-2'>Medios de envio</span>
            <div>
              <input className='inpBuscador' type="text" placeholder='Tu codigo postal' />
              <button className='ms-4 botonCalcular'>Calcular</button>
              <a href=""><p>No se mi codigo postal</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className='descripcion'>
        <p>{item.descripcion}</p>
      </div>

      <div>
        {item.imagenesAdicionales}
      </div>
    </>
  );
};

export default ItemDetail;
