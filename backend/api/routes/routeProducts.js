import express from "express";
import {
    getProducts,
    getProductById,
    search
    // saveProduct
} from "../controllers/product.js";

const router = express.Router();

router.get('/api/products', getProducts);
router.get('/products/:id', getProductById);
router.get('/api/products/search?name=${searchTerm}', search);
// router.post('/products', saveProduct);

export default router;