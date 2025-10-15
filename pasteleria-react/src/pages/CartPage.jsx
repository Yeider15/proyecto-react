import React, { useState, useEffect, useCallback } from 'react';
import CartItem from '../components/CartItem'; 
import '../styles/cartPage.css'; // Asegúrate que esta ruta es correcta

function CartPage() {
    // 1. Estado para el carrito: Inicializa leyendo desde localStorage
    const [carrito, setCarrito] = useState(() => {
        const storedCart = localStorage.getItem('carrito');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // 2. Efecto para guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        // console.log("Carrito actualizado en localStorage:", carrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    // 3. Función para calcular el total
    const calcularTotal = useCallback(() => {
        // Aseguramos que precio y cantidad sean números antes de sumar
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    }, [carrito]);

    // 4. Función para eliminar un producto
    const eliminarProducto = (idProducto) => {
        const carritoActualizado = carrito.filter(item => item.id_producto !== idProducto);
        setCarrito(carritoActualizado);
    };

    const handleProcederPago = () => {
        alert("Procesando pago... (Funcionalidad pendiente)");
    };
    
    const total = calcularTotal();

    return (
        // CORRECCIÓN: Se usa solo el ID #contenedor-carrito para centrar y limitar el ancho.
        <div id="contenedor-carrito"> 
            <h1 id="titulo-carrito">Tu Carrito</h1>
            
            {/* Renderizado condicional */}
            {carrito.length === 0 ? (
                <p className="carrito-vacio-mensaje">Tu carrito está vacío. ¡Añade unos deliciosos postres!</p>
            ) : (
                <>
                    <div id="productos-carrito">
                        {carrito.map(item => (
                            <CartItem
                                key={item.id_producto}
                                item={item}
                                onRemove={eliminarProducto}
                            />
                        ))}
                    </div>

                    <div id="resumen-carrito">
                        <h3>Resumen</h3>
                        <p>
                            <strong>Total: </strong>
                            <span id="total-carrito">${total.toLocaleString()} CLP</span>
                        </p>
                        <button 
                            id="boton-pago" 
                            onClick={handleProcederPago}
                        >
                            Proceder al pago
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;