import React from "react";
import ProductCard from "../components/ProductCard"; // Importamos el componente ProductCard
import "../styles/product-page.css"; // Estilos para la página de productos

// Importamos las imágenes de los productos
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

function ProductPage() {
  // Estado para el carrito
  const [carrito, setCarrito] = React.useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Función para añadir un producto al carrito
  const añadirAlCarrito = (idProducto, nombre, precio) => {
    const carritoActualizado = [...carrito];
    const productoExistente = carritoActualizado.find(
      (item) => item.id_producto === idProducto
    );

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carritoActualizado.push({
        id_producto: idProducto,
        nombre,
        precio,
        cantidad: 1,
      });
    }

    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    alert(`Se ha añadido 1 ${nombre} al carrito.`);
    console.log(
      `Producto añadido: ${nombre} - Total carrito: $${carritoActualizado
        .reduce((total, item) => total + item.precio * item.cantidad, 0)
        .toFixed(2)} CLP`
    );
  };

  return (
    <div id="pagina-productos">
      <h1 id="titulo-productos">PRODUCTOS</h1>
      <div id="cuadricula-productos">
        <ProductCard
          idProducto="TC001"
          nombre="Torta Cuadrada de Chocolate"
          precio={45000}
          imgSrc={TortaCuadradaChocolate}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="TC002"
          nombre="Torta Cuadrada de Frutas"
          precio={50000}
          imgSrc={TortaCuadradaFrutas}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="TT001"
          nombre="Torta Circular de Vainilla"
          precio={40000}
          imgSrc={TortaCircularVainilla}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="TT002"
          nombre="Torta Circular de Manjar"
          precio={42000}
          imgSrc={TortaCircularManjar}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PI001"
          nombre="Mousse de Chocolate"
          precio={5000}
          imgSrc={MousseChocolate}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PI002"
          nombre="Tiramisú Clásico"
          precio={5500}
          imgSrc={TiramisúClasico}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PSA001"
          nombre="Torta Sin Azucar de Naranja"
          precio={48000}
          imgSrc={TortaSinAzucarNaranja}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PSA002"
          nombre="Cheesecake Sin Azucar"
          precio={47000}
          imgSrc={CheesecakeSinAzucar}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PT001"
          nombre="Empanada de Manzana"
          precio={3000}
          imgSrc={EmpanadaManzana}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PT002"
          nombre="Tarta de Santiago"
          precio={6000}
          imgSrc={TartaSantiago}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PG001"
          nombre="Brownie Sin Gluten"
          precio={4000}
          imgSrc={BrownieSinGluten}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PG002"
          nombre="Pan Sin Gluten"
          precio={3500}
          imgSrc={PanSinGluten}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PV001"
          nombre="Torta Vegana de Chocolate"
          precio={50000}
          imgSrc={TortaVeganaChocolate}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="PV002"
          nombre="Galletas Veganas de Avena"
          precio={4500}
          imgSrc={GalletasVeganasAvena}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="TE001"
          nombre="Torta Especial de Cumpleaños"
          precio={55000}
          imgSrc={TortaEspecialCumpleanos}
          agregarAlCarrito={añadirAlCarrito}
        />
        <ProductCard
          idProducto="TE002"
          nombre="Torta Especial de Boda"
          precio={60000}
          imgSrc={TortaEspecialBoda}
          agregarAlCarrito={añadirAlCarrito}
        />
      </div>
    </div>
  );
}

export default ProductPage;
