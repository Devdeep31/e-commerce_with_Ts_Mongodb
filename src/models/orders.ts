import mongoose, { Document, Types, Schema } from "mongoose";



interface IOrder extends Document {
    orderId: string;
    user: Types.ObjectId;
    cart: Types.ObjectId;
    totalPrice: number;
    deliveryTime: Date;
}


const OrderSchema: Schema = new Schema({
    orderId: { type: String, require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
    cart : {type : Schema.Types.ObjectId, ref: "Cart", require: true},
    totalPrice: { type: Number, required: true, default: 0 },
    deliveryTime : {type: Date, require: true},
});

const Order = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
