import mongoose, {Schema,Document,Types} from "mongoose";

interface IProducts {
    productId : string;
    productName: string;
    price: number;
}

const ProductSchema: Schema = new Schema(
    {
        productId : {type: String, require: true},
        productName: {type: String, require: true, unique: true},
        price: {type: Number, require: true},
    }
)

export default mongoose.model<IProducts> ("Products",ProductSchema);