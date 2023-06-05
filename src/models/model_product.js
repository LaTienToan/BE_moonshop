import mongoose, { Schema } from "mongoose";

const product_schema = mongoose.Schema({
    id_category: { 
        type: Schema.Types.ObjectId, 
        ref: 'Categories' 
    },
    id_voucher: {
        type: String
    },
    product_name: {
        type: String
    },
    material_product: {
        type: String
    },
    desc_product: {
        type: String
    },
    quantity_number: {
        type: Number
    },
    product_color: {
        type: Array
    },
    product_images:{
        type: Array
    }
});


const Product = mongoose.model("Products", product_schema)
export default Product