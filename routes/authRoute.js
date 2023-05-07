const express = require("express");
const {
  createuser,
  loginUserCtrl,
  getallUser,
  getUser,
  deletAUser,
  updateUser,
  blockUser,
  unblockUser,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/registion", createuser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id",authMiddleware,isAdmin, getUser);
router.put("/edit-user",authMiddleware,updateUser)
router.delete("/:id", deletAUser);
router.put("/block-user/:id",authMiddleware,isAdmin,blockUser)
router.put("/unblock-user/:id",authMiddleware,isAdmin,unblockUser)


module.exports = router;
