const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create-product",authMiddleware, isAdmin,createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProducts);
router.put("/:id",authMiddleware, isAdmin, updateProduct);
router.delete("/:id",authMiddleware,isAdmin, deleteProduct);

module.exports = router;
