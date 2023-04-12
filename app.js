// Bước 1 include thư viện http
import express from 'express';
import mongoose from 'mongoose';
const app = express();

import homeRoute from './routes/home';
import productRoute from './routes/products';
import categoryRoute from './routes/categories';
import authRoute from './routes/auth';
app.use(express.json());
app.use(homeRoute);
app.use("/api", productRoute);
app.use('/api', categoryRoute);
app.use('/api', authRoute);


mongoose.connect('mongodb://127.0.0.1:27017/start_shop');
// Bước 3: Lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});