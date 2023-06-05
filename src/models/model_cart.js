import mongoose, { Schema } from "mongoose";

const cartSchema = mongoose.Schema({
  detail_product: {
    type: Schema.Types.ObjectId,
    ref: "order_details",
  },
  user_by_product: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  quantity: {
    type: Number,
  },
});

export default mongoose.model("Cart", cartSchema);
