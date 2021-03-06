import express from 'express';
import {
	getVentasCloset,
	createVentaCloset,
	updateVentaCloset,
	sumaVentas1Mostrar,
	sumaVentas6Mostrar,
	sumaVentas12Mostrar,
} from '../controllers/ventasClosetControllers.js';
import auth from '../middleware/auth.js';
import pkg from 'express-validator';
const router = express.Router();
const { body } = pkg;

//localhost:5000/gerentes
router.get('/', getVentasCloset);
router.post(
	'/:flag',
	body('numeroContrato').isNumeric({ no_symbols: true }),
	createVentaCloset
);
router.patch(
	'/:id',
	body('numeroContrato').isNumeric({ no_symbols: true }),
	updateVentaCloset
);
router.get('/reporteunmes', auth, sumaVentas1Mostrar);
router.get('/reporteseismeses', auth, sumaVentas6Mostrar);
router.get('/reportesanio', auth, sumaVentas12Mostrar);
export default router;
