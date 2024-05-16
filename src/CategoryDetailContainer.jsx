// CategoryDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockItem } from './utils';
import { NavLink } from 'react-router-dom';
import './EstiloNavBar.css';

const CategoryDetailContainer = () => {
    const { idCategoria } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        const filteredItems = mockItem.filter(item => item.categoria === idCategoria);
        setCategoryItems(filteredItems);
        console.log(filteredItems);
    }, [idCategoria]);

    return (
        <>
            <div className='row p-2 mx-auto container'>
                {categoryItems.length > 0 ? (
                    categoryItems.map(item => (
                        <div className="container col-xl-3 col-md-4 col-sm-6 cardProducto pt-4 mb-4" key={item.id}>
                            <img className="productosFoto img-fluid" src={item.imageUrl} alt={item.nombre} />
                            <h2 className="nombreProducto mt-4">{item.nombre}</h2>
                            <p className="precioProductos">Precio: ${item.precio}</p>
                            <p className="">Precio: ${item.precioTransferencia} - 10% de descuento pagando con Transferencia Bancaria/Efectivo</p>
                            <NavLink to={`/productos/${item.id}`} className="mb-5 btn btn-primary">Ver detalle del producto</NavLink>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )}
            </div>
        </>
    );
};

export default CategoryDetailContainer;
