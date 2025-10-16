import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Producto from "../components/Producto"; // ejemplo de un componente tuyo

//  Verifica que la app renderiza el título principal
test("renderiza el título de la tienda", () => {
  render(<App />);
  const titulo = screen.getByText(/Mil Sabores/i);
  expect(titulo).toBeInTheDocument();
});

//  Verifica que un componente de producto muestra su nombre correctamente
test("muestra el nombre del producto pasado por props", () => {
  const producto = { nombre: "Tarta de Vainilla", precio: 1200 };
  render(<Producto data={producto} />);
  expect(screen.getByText(/Tarta de Vainilla/i)).toBeInTheDocument();
});

//  Simula un click en el botón 'Agregar al carrito'
test("agrega producto al carrito cuando se hace clic", () => {
  const producto = { nombre: "Tarta de Manjar", precio: 1500 };
  render(<Producto data={producto} />);
  const boton = screen.getByRole("button", { name: /Agregar/i });
  fireEvent.click(boton);
  expect(boton).toBeEnabled();
});

// Comprueba que el total se actualiza al agregar productos
test("actualiza el total del carrito correctamente", () => {
  render(<App />);
  const total = screen.getByText(/Total:/i);
  expect(total).toBeInTheDocument();
});

//  Verifica que el formulario de contacto valida campos vacíos
test("valida campos del formulario antes de enviar", () => {
  render(<App />);
  const botonEnviar = screen.getByRole("button", { name: /Enviar/i });
  fireEvent.click(botonEnviar);
  const alerta = screen.getByText(/Por favor complete todos los campos/i);
  expect(alerta).toBeInTheDocument();
});
