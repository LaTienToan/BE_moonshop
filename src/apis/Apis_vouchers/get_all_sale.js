import giam_gia from "../../models/model_voucher"
export const get_all_sale = async (req, res) => {
    try {
        const data = await giam_gia.find();
        return res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy giảm giá"
        })
    }
};