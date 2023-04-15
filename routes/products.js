// const express = require('express');
import express from 'express';
const router = express.Router();
import { listProducts, listProductDetail, createProduct, deleteProduct, updateProduct } from '../controllers/products';
import { userById } from '../controllers/user';
import { requiredSignin } from '../middlewares/checkAuth';



router.get('/products', listProducts);
router.get('/products/:id', listProductDetail);
router.post('/products/:userId', createProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);

router.param("userId", userById)

export default router;