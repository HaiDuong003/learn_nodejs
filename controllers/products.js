import Product from "../models/products";

export const listProducts = async (request, response) => {
  try {
    const products = await Product.find({}).exec();
    response.json(products);
  } catch (error) {
    response.status(400).json({ message: "Lỗi không hiển thị được" })
  }
  // response.json(products);
}

export const listProductDetail = async (request, response) => {
  try {
    const product = await Product.findOne({ _id: request.params.id }).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ mesage: "Lỗi không hiển thị được" })
  }
  // response.json(products.find(item => item.id == request.params.id));
}

export const createProduct = async (request, response) => {
  try {
    const product = await Product(request.body).save();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "Không thể thêm sản phẩm" })
  }
  // products.push(request.body);
  // response.json(products);
}

export const deleteProduct = async (request, response) => {
  try {
    const product = await Product.findOneAndDelete({ _id: request.params.id }).exec();
  } catch (error) {
    response.status(400).json({ message: "Không xóa được" });
  }
  // response.json(products.filter(item => item.id == request.params.id));
}

export const updateProduct = async (request, response) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: "Không cập nhật được" })
  }
  // response.json(products.map(item => item.id == request.params.id ? request.body : item));
}