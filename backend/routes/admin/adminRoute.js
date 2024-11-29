import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchAllProduct,
  handleImageUpload,
} from "../../controllers/admin/productsController.js";
import { upload } from "../../utils/cloudinary.js";

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProduct);

export default router;
