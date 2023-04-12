import Categories from '../models/categories';
import Product from "../models/products";

export const listCate = async (request, response) => {
  try {
    const categories = await Categories.find({}).exec();
    const products = await Product.find({ categories }).exec();
    response.json({ categories, products });
  } catch (error) {
    response.status(400).json({ message: "Không thể hiển thị dữ liệu" });
  }
}

export const cateDetail = async (request, response) => {
  try {
    const category = await Categories.findOne({ _id: request.params.id }).exec();
    response.json(category);
  } catch (error) {
    response.status(400).json({ message: "Không thể hiển thị dữ liệu" });
  }
}

export const createCate = async (request, response) => {
  try {
    const category = await Categories(request.body).save();
    response.json(category);
  } catch (error) {
    response.status(400).json({ message: "Không thể thêm dữ liệu" });
  }
}

export const deleteCate = async (request, response) => {
  try {
    const categoty = await Categories.findOneAndDelete({ _id: request.params.id }).exec();
    response.json({ message: "Xóa thành công" })
  } catch (error) {
    response.status(400).json({ message: "Không thể xóa dữ liệu này" });
  }
}

export const updateCate = async (request, response) => {
  try {
    const category = await Categories.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }).exec();
  } catch (error) {
    response.status(400).json({ message: "Không thể update" })
  }
}
