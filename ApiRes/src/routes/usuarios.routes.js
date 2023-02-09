import { Router } from "express";
import { methods as usuariosController } from "../controllers/usuarios.controller";

const router = Router();

router.get("/:id_cliente", usuariosController.getAll);
router.post("/", usuariosController.add);
router.post('/email', usuariosController.verificaruser);
router.put("/:id_cliente", usuariosController.actualizardatos);


export default router;
