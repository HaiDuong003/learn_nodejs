import mongoose, { ObjectId } from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: ObjectId,
    ref: 'Categories'
  }
});

export default mongoose.model('Product', productsSchema);