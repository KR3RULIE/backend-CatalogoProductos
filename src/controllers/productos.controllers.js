import mongoose from "mongoose";
import Producto from "../models/producto.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

// agregar funcion para leer Productos
export const leerProductos = async (req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mennsaje: "Error al leer el producto" });
  }
};
// agregar funcion para crear Producto
export const crearProducto = async (req, res) => {
  try {
    //1- recibir el objeto que tengo que agregar a la BD
    //2- Validar los datos del objeto
    //3- guardar el objeto en la base de datos
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    //4- enviar respuesta
    res.status(201).json({ mensaje: "El producto fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};
// agregar funcion para leer Productos por ID
export const leerProductoID = async (req, res) => {
  try {
    const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el producto" });
  }
};
// agregar funcion para borrar un Producto
export const borrarProductoID = async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) {
      return res
        .status(404)
        .json({ mensaje: "El producto no se pudo econtrar" });
    }
    res.status(200).json({ mennsaje: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar el producto" });
  }
};
// agregar funcion para editar Producto
