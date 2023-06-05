import mongoose, { Schema } from "mongoose";

const sale_schema = mongoose.Schema({
    id_giam_gia: {
        type: Number
    },
    ten_giam_gia: {
        type: String
    },
    mo_ta_giam_gia: {
        type: String
    },
    muc_giam_gia: {
        type: Number
    },
    ngay_bat_dau: {
        type: Date
    },
    ngay_ket_thuc: {
        type: Date
    },
    tinh_trang: {
        type: Boolean
    }
})


const sale = mongoose.model("sale", sale_schema)
export default sale