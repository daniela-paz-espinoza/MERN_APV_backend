import express from "express";
const router = express.Router();
import {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    

} from '../controllers/veterinarioController.js'
import checkAuth from "../middleWare/authMiddlewar.js";

//Area publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);


//area privada
router.get('/perfil', checkAuth, perfil);
// router.put('/perfil/:id', checkAuth, actualizarPerfil)

export default router;