import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, required: false, unique: true },
  name: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: {
    street: { type: String, required: false },
    suite: { type: String, required: false },
    city: { type: String, required: false },
    zipcode: { type: String, required: false },
    geo: {
      lat: { type: String, required: false },
      lng: { type: String, required: false },
    },
  },
  phone: { type: String, required: false },
  website: { type: String, required: false },
  company: {
    name: { type: String, required: false },
    catchPhrase: { type: String, required: false },
    bs: { type: String, required: false },
  },
  role: { type: String, default: "user" },
  password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
