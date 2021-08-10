import express from 'express';
import {getVentasCloset,createVentaCloset,updateVentaCloset} from '../controllers/ventasClosetControllers.js'
import pkg from 'express-validator';
const router = express.Router();
const {body} = pkg;

//localhost:5000/gerentes
router.get('/',getVentasCloset);
router.post('/',body("numeroContrato").isNumeric({no_symbols:true}),body("cedulaCliente").isNumeric({no_symbols:true}),createVentaCloset);
router.patch('/:id',body("numeroContrato").isNumeric({no_symbols:true}),body("cedulaCliente").isNumeric({no_symbols:true}),updateVentaCloset);
// router.get('/reporteunmes', sumaVentas1Mostrar);
// router.get('/reporteseismeses', sumaVentas6Mostrar);
// router.get('/reportesanio', sumaVentas12Mostrar)
export default router;