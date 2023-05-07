const express = require("express");
const {
  createuser,
  loginUserCtrl,
  getallUser,
  getUser,
  deletAUser,
  updateUser,
} = require("../controller/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/registion", createuser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id",authMiddleware, getUser);
router.put("/:id",updateUser)
router.delete("/:id", deletAUser);

module.exports = router;
