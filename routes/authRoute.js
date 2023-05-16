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
  handlerefreshToken,
  LogoutUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  adminLoginCtrl,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/registion", createuser);
router.post("/forgot-password-token",forgotPasswordToken)
router.put("/reset-password/:token",resetPassword)
router.post("/login", loginUserCtrl);
router.post("/admin-login", adminLoginCtrl);

router.get("/all-users", getallUser);
router.get("/refresh",handlerefreshToken)
router.get("/:id",authMiddleware,isAdmin, getUser);
router.put("/edit-user",authMiddleware,updateUser)
router.put("/password",authMiddleware,updatePassword)
router.delete("/:id", deletAUser);
router.put("/block-user/:id",authMiddleware,isAdmin,blockUser)
router.put("/unblock-user/:id",authMiddleware,isAdmin,unblockUser)
router.post('/logout',LogoutUser)



module.exports = router;
