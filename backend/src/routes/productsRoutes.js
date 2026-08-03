import { Router } from 'express';
import { getProducts, createProduct, getProductByID, updateProduct, deleteProduct } from '../controllers/productsControllers.js';

const router = Router();

router.get('/', getProducts);

router.get('/:id', getProductByID);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete("/:id", deleteProduct);

export default router;