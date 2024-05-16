// ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { mockItem } from './utils';
import './EstiloNavBar.css';

const ItemDetailContainer = () => {
  const [items, setItems] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setItems(mockItem);
    };

    fetchItems();
  }, []);

  return (

    <>

      <div className='row p-2 mx-auto container'>
        {items ? (
          selectedItemId ? (

            <ItemDetail itemId={selectedItemId} />

          ) : (
            items.map((item) => (
              <div className="container col-xl-3 col-md-4 col-sm-6 cardProducto pt-4 mb-4" key={item.id}>
                <img className="productosFoto img-fluid" src={item.imageUrl} alt={item.nombre} />
                <h2 className="nombreProducto mt-4">{item.nombre}</h2>
                <p className="precioProductos">Precio: ${item.precio}</p>
                <p className="">Precio: ${item.precioTransferencia} - 10% de descuento pagando con Transferencia Bancaria/Efectivo</p>
                <NavLink to={`/productos/${item.id}`} className="mb-5 btn btn-primary">Ver detalle del producto</NavLink>
              </div>
            ))
          )
        ) : (
          <div className="text-center">
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default ItemDetailContainer;
