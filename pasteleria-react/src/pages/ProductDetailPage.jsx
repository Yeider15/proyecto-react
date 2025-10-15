import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import "../styles/product-detail-page.css";

import TortaCuadradaChocolate from "../assets/img/T-Cuadrada-Chocolate.jpg";
import TortaCuadradaFrutas from "../assets/img/T-Cuadrada-Frutas.jpg";
import TortaCircularVainilla from "../assets/img/T-Circular-Vainilla.jpg";
import TortaCircularManjar from "../assets/img/T-Circular-Manjar.jpg";
import MousseChocolate from "../assets/img/Mousse-Chocolate.jpg";
import TiramisúClasico from "../assets/img/Tiramisu-Clasico.jpg";
import TortaSinAzucarNaranja from "../assets/img/T-SinAzucar-Naranja.jpg";
import CheesecakeSinAzucar from "../assets/img/Cheesecake-SinAzucar.jpg";
import EmpanadaManzana from "../assets/img/Empanada-Manzana.jpg";
import TartaSantiago from "../assets/img/Tarta-Santiago.jpg";
import BrownieSinGluten from "../assets/img/Brownie-SinGluten.jpg";
import PanSinGluten from "../assets/img/Pan-SinGluten.jpg";
import TortaVeganaChocolate from "../assets/img/T-Vegana-Chocolate.jpg";
import GalletasVeganasAvena from "../assets/img/Galletas-Vegana-Avena.jpg";
import TortaEspecialCumpleanos from "../assets/img/T-Especial-Cumpleaños.jpg";
import TortaEspecialBoda from "../assets/img/T-Especial-Boda.jpg";

import TortaCuadradaChocolate2 from "../assets/img/T-Cuadrada-Chocolate2.jpg";
import TortaCuadradaChocolate3 from "../assets/img/T-Cuadrada-Chocolate3.jpg";
import TortaCuadradaChocolate4 from "../assets/img/T-Cuadrada-Chocolate4.jpg";

import Related1 from "../assets/img/T-Circular-Vainilla.jpg";
import Related2 from "../assets/img/Mousse-Chocolate.jpg";
import Related3 from "../assets/img/Tiramisu-Clasico.jpg";

function ProductDetailPage() {
  const { idProducto } = useParams();
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  const productos = [
    {
      id: "TC001",
      nombre: "Torta Cuadrada de Chocolate",
      precio: 45000,
      descripcion:
        "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
      imgSrc: TortaCuadradaChocolate,
      imgSrc2: TortaCuadradaChocolate2,
      imgSrc3: TortaCuadradaChocolate3,
      imgSrc4: TortaCuadradaChocolate4,
    },
    {
      id: "TC002",
      nombre: "Torta Cuadrada de Frutas",
      precio: 50000,
      descripcion:
        "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
      imgSrc: TortaCuadradaFrutas,
    },
    {
      id: "TT001",
      nombre: "Torta Circular de Vainilla",
      precio: 40000,
      descripcion:
        "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
      imgSrc: TortaCircularVainilla,
    },
    {
      id: "TT002",
      nombre: "Torta Circular de Manjar",
      precio: 42000,
      descripcion:
        "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos. ",
      imgSrc: TortaCircularManjar,
    },
    {
      id: "PI001",
      nombre: "Mousse de Chocolate",
      precio: 5000,
      descripcion:
        "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate. ",
      imgSrc: MousseChocolate,
    },
    {
      id: "PI002",
      nombre: "Tiramisú Clásico",
      precio: 5500,
      descripcion:
        " Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
      imgSrc: TiramisúClasico,
    },
    {
      id: "PSA001",
      nombre: "Torta Sin Azucar de Naranja",
      precio: 48000,
      descripcion:
        "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables. ",
      imgSrc: TortaSinAzucarNaranja,
    },
    {
      id: "PSA002",
      nombre: "Cheesecake Sin Azucar",
      precio: 47000,
      descripcion:
        "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa. ",
      imgSrc: CheesecakeSinAzucar,
    },
    {
      id: "PT001",
      nombre: "Empanada de Manzana",
      precio: 3000,
      descripcion:
        " Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
      imgSrc: EmpanadaManzana,
    },
    {
      id: "PT002",
      nombre: "Tarta de Santiago",
      precio: 6000,
      descripcion:
        " Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos. ",
      imgSrc: TartaSantiago,
    },
    {
      id: "PG001",
      nombre: "Brownie Sin Gluten",
      precio: 4000,
      descripcion:
        "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor. ",
      imgSrc: BrownieSinGluten,
    },
    {
      id: "PG002",
      nombre: "Pan Sin Gluten",
      precio: 3500,
      descripcion:
        "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida. ",
      imgSrc: PanSinGluten,
    },
    {
      id: "PV001",
      nombre: "Torta Vegana de Chocolate",
      precio: 50000,
      descripcion:
        " Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos. ",
      imgSrc: TortaVeganaChocolate,
    },
    {
      id: "PV002",
      nombre: "Galletas Veganas de Avena",
      precio: 4500,
      descripcion:
        "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano. ",
      imgSrc: GalletasVeganasAvena,
    },
    {
      id: "TE001",
      nombre: "Torta Especial de Cumpleaños",
      precio: 55000,
      descripcion:
        "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
      imgSrc: TortaEspecialCumpleanos,
    },
    {
      id: "TE002",
      nombre: "Torta Especial de Boda",
      precio: 60000,
      descripcion:
        " Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda. ",
      imgSrc: TortaEspecialBoda,
    },
  ];

  const producto = productos.find((p) => p.id === idProducto) || productos[0];

  const actualizarCarrito = useCallback(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    console.log(`Total del carrito: $${total.toFixed(2)} CLP`);
  }, []);

  useEffect(() => {
    actualizarCarrito();
  }, [actualizarCarrito]);

  const añadirAlCarrito = (idProducto, nombre, precio) => {
    const inputCantidad = document.getElementById("cantidad");
    const cantidadSeleccionada = inputCantidad
      ? parseInt(inputCantidad.value)
      : 1;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find(
      (item) => item.id_producto === idProducto
    );
    if (productoExistente) {
      productoExistente.cantidad += cantidadSeleccionada;
    } else {
      carrito.push({
        id_producto: idProducto,
        nombre,
        precio,
        cantidad: cantidadSeleccionada,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    setMensajeConfirmacion(
      `Se ha añadido ${cantidadSeleccionada} ${nombre} al carrito.`
    );
    setTimeout(() => setMensajeConfirmacion(""), 3000);

    console.log(
      `Producto añadido: ${nombre} - Total carrito: $${carrito
        .reduce((total, item) => total + item.precio * item.cantidad, 0)
        .toFixed(2)} CLP`
    );

    actualizarCarrito();
  };

  return (
    <div>
      <div id="contenedor-detalle-producto">
        {producto ? (
          <ProductDetail
            producto={producto}
            añadirAlCarrito={añadirAlCarrito}
            mensajeConfirmacion={mensajeConfirmacion}
          />
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>

      <div className="seccion-productos-relacionados">
        <h3 className="titulo-productos-relacionados">
          Productos Relacionados
        </h3>
        <div className="lista-productos-relacionados">
          <img
            src={Related1}
            alt="Producto relacionado 1"
            className="producto-relacionado"
          />
          <img
            src={Related2}
            alt="Producto relacionado 2"
            className="producto-relacionado"
          />
          <img
            src={Related3}
            alt="Producto relacionado 3"
            className="producto-relacionado"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
