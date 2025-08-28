import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phone: {
    type: String,
    match: [/^\+?[0-9]{7,15}$/, 'Please enter a valid phone number']
  },
  address:
  {
    street: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    zipCode: {
      type: String,
      match: [/^\d{4,10}$/, 'Please enter a valid zip code']
    },
    state: {
      type: String,
      trim: true
    }, country: {
      type: String,
      trim: true
    }
  },
  profilePic: {
    type: String
  },
  role: {
    type: String,
    enum: ['admin','user','delivery'],
    default: 'user'
  },
  //   cart: [{
  //     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  //     quantity: { type: Number, default: 1 }
  //   }],
  // wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  //   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
}, { timestamps: true })


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

userSchema.methods.comparePassword = async function (password) {
  console.log("password", password + 'This Password', this.password);

  return await bcrypt.compare(password, this.password);
};


export default mongoose.model("User", userSchema)