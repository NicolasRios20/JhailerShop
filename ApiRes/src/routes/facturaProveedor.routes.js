import { Router } from "express";
import { methods as facturaProveedorController } from "../controllers/facturaProveedor.controller";

const router = Router();

//router.post("/", proveedorController.add);//creacion de proveedor
router.get("/", facturaProveedorController.getid_factura);

export default router;