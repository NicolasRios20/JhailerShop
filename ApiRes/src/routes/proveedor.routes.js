import { Router } from "express";
import { methods as proveedorController } from "../controllers/proveedor.controller";

const router = Router();

router.post("/", proveedorController.add);//creacion de proveedor
router.get("/", proveedorController.getproveedores);
router.delete("/:cedula",proveedorController.eliminarProveedor)

export default router;