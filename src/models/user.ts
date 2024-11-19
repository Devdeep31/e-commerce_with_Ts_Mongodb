import mongoose, { Schema, Document, Types } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  cart: Types.ObjectId; 
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cart: { type: Schema.Types.ObjectId, ref: "Cart" }, // Reference to the Cart
});

export default mongoose.model<IUser>("User", UserSchema);
