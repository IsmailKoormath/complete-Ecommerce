const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  wishlist,
  rating,
} = require("../controller/productCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const multer = require('multer');
const { productImgResize } = require("../middlewares/uploadImage");
const router = express.Router();

const storage = multer.diskStorage({})
const upload = multer({storage})

router.post("/create-product",upload.array('images') ,authMiddleware, isAdmin,createProduct);
router.get("/:id", getaProduct);
router.put('/wishlist',authMiddleware,wishlist)
router.put("/ratings",authMiddleware, rating);

router.get("/", getAllProducts);
router.put("/:id",authMiddleware, isAdmin, updateProduct);
router.delete("/:id",authMiddleware,isAdmin, deleteProduct);

module.exports = router;
