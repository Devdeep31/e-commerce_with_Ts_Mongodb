import mongoose, { Schema, Document, Types } from "mongoose";

interface ICartItem {
  productId: Types.ObjectId; 
  quantity: number;
  price: number;
}


interface ICart extends Document {
  user: Types.ObjectId; 
  items : ICartItem[];
  totalPrice: number;
}


const CartSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
  items: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Products", required: true }, 
      quantity: { type: Number, required: true, default: 1 },
      price: {type: Number, require: true},
    },
  ],
  totalPrice: { type: Number, required: true, default: 0 },
});

export default mongoose.model<ICart>("Cart", CartSchema);
