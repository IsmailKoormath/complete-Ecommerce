const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { param } = require("../routes/authRoute");
const validateMongodbId = require("../utils/validateMongodbId");

// create a new user

const createuser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exist");
  }
});

// Login

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      role: findUser?.role,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// Get all Users

const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single User

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id)
  try {
    const getUser = await User.findById(id);
    res.json(getUser);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a User

const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongodbId(_id)
  try {
    const updateaUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updateaUser);
  } catch (error) {}
});

// Delete a User

const deletAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id)
  try {
    const deletUser = await User.findByIdAndDelete(id);
    res.json(deletUser);
  } catch (error) {
    throw new Error(error);
  }
});


const blockUser = asyncHandler(async(req,res)=>{
  const {id}= req.params
  validateMongodbId(id)
  try {
    const block = await User.findByIdAndUpdate(id,{
      isBlocked:true,
    },
    {
      new:true,
    })
    res.json({
      message:"User Blocked",
    })
  } catch (error) {
    throw new Error(error)
  }

})
const unblockUser = asyncHandler(async(req,res)=>{
  const {id}= req.params
  validateMongodbId(id)
  try {
    const unblock = await User.findByIdAndUpdate(id,{
      isBlocked:false,
    },
    {
      new:true,
    })
    res.json({
      message:"User unBlocked",
    })
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createuser,
  loginUserCtrl,
  getallUser,
  getUser,
  updateUser,
  deletAUser,
  blockUser,
  unblockUser
};
