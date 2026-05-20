import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Token generation helper
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// @desc    Register a new user
// @route   POST /user/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, company } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ name, email, password, company });

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        company: user.company,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Login user
// @route   POST /user/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        company: user.company,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Sync or register OAuth social users (Google/GitHub)
// @route   POST /user/social-sync
export const socialSync = async (req, res) => {
  try {
    const { name, email, company } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required from social provider.",
      });
    }

    // 1. Check if this Google/GitHub user already exists in your MongoDB
    let user = await User.findOne({ email });

    // 2. If they are logging in for the first time, create their profile record
    if (!user) {
      user = await User.create({
        name,
        email,
        company: company || "Leads Locker",
        isOAuthUser: true, // UPDATED: Tells Mongoose to skip password requirements for this user
      });
    }

    // 3. Generate your application's custom JWT token using the helper function
    res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        company: user.company,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
