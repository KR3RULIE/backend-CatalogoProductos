import { Router } from "express";
import {
  borrarProductoID,
  crearProducto,
  editarProductoID,
  leerProductoID,
  leerProductos,
  test,
} from "../controllers/productos.controllers.js";

const router = Router();
// get, post, put, delete
router.route("/test").get(test);
router.route("/").get(leerProductos).post(crearProducto);
router
  .route("/:id")
  .get(leerProductoID)
  .delete(borrarProductoID)
  .put(editarProductoID);

export default router;
