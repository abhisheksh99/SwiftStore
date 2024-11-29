import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number, required: false, default: 0 }, 
    totalStock: { type: Number, required: true, default: 0 }, 
    averageReview: { type: Number, required: false, default: 0 },

  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
