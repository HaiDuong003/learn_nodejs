import express from 'express';
const router = express.Router();
import { listCate, cateDetail, createCate, deleteCate, updateCate } from '../controllers/categories';

router.get('/categories', listCate);
router.get('/categories/:id', cateDetail);
router.post('/categories', createCate);
router.delete('/categories/:id', deleteCate);
router.put('/categories/:id', updateCate);

export default router;