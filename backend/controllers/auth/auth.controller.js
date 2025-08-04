import User from "../../models/users/users.model.js";
import { generateJWT } from "../../utils/generatejwt .js";

export const register = async (req, res) => {
  try {
    let { firstName, lastName, email, password, phone, role } = req.body;
    if (
      !firstName ||
      !lastName ||
      !username ||
      !phone ||
      !email ||
      !password ||
      !address
    ) {
      let message = "All Filds are required!";
      if (!firstName) message = "firstName is required!";
      else if (!lastName) message = "lastName is required!";
      else if (!username) message = "username is required!";
      else if (!phone) message = "Mobile number is required!";
      else if (!email) message = "email is required!";
      else if (!password) message = "password is required!";
      else if (!address) message = "address is required!";
      return res.status(400).json({ success: false, message });
    }
    const user = await User.findOne({
      $or: [{ userName: userName }, { email: email }, { phone: phone }],
    });
    if (user) {
      let message = "User Already Exists!";
      if (user.username === username) message = "Username is already taken!";
      else if (user.email === email) message = "Email is already registered!";
      else if (user.phone === phone)
        message = "Mobile number is already in use!";
      return res.status(400).json({ success: false, message });
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      role,
      address,
    });
    generateJWT(newUser._id, res);
    await newUser.save();
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    console.log(
      "Error By auth controller in register function :- ",
      error.message
    );
    res.status(500).json({ error: " Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Are Required" });
    }

    let ExtisUser = await User.findOne({ email: email });
    if (ExtisUser == null) {
      return res
        .status(400)
        .json({ success: false, message: "Email Is Not Match!" });
    }
    const isMatchPassword = await ExtisUser.comparePassword(password);
    console.log(isMatchPassword);
    if (isMatchPassword) {
      generateJWT(ExtisUser._id, res);
      res.status(201).json({
        success: true,
        user: {
          ...ExtisUser._doc,
          password: "",
        },
      });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Password Is Not Match!" });
    }
  } catch (error) {
    console.log(
      "Error By auth controller in register function :- ",
      error.message
    );
    res.status(500).json({ error: " Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt-Nest");
    res.status(201).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in Logout controller", error.message);
    res.status(500).json({ success: false, message: "Interna; Server Error" });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic, {
                folder: 'nest/profile', // ✅ store inside "image/" folder in Cloudinary
            });
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("error in update profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
