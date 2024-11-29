import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 

// Register
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      const checkUser = await User.findOne({ email });
      if (checkUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with the same email! Please try again.",
        });
      }
  
      // Hash the password
      const hashPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({
        name,
        email,
        password: hashPassword, 
      });
  
      // Save user to database
      await newUser.save();
  
      // Return success response without sending the password field
      res.status(200).json({
        success: true,
        message: "Registration successful",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error) {
      // Handle server error
      console.error(error);
      res.status(500).json({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    }
  };
  

// Login
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const checkUser = await User.findOne({ email });
      if (!checkUser)
        return res.status(400).json({
          success: false,
          message: "User doesn't exist! Please register first",
        });
  
      const checkPasswordMatch = bcrypt.compare(
        password,
        checkUser.password
      );
      if (!checkPasswordMatch)
        return res.status(400).json({
          success: false,
          message: "Incorrect password! Please try again",
        });
        const token = jwt.sign(
          {
            id: checkUser._id,
            role: checkUser.role,
            email: checkUser.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
    
        res.cookie("token", token, { httpOnly: true, secure: false }).json({
          success: true,
          message: "Logged in successfully",
          user: {
            email: checkUser.email,
            role: checkUser.role,
            id: checkUser._id,
            userName: checkUser.userName,
          },
        });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Some error occurred",
      });
    }
  };

// Logout
export const logoutUser = async (req, res) => {
    try {
      res.clearCookie("token").json({
        success: true,
        message: "Logged out successfully!",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Some error occurred",
      });
    }
  };