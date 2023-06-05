import giam_gia from "../../models/model_voucher"
export const get_sale = async (req, res) => {
    try {
        const get_sale = await giam_gia.findOne({ _id: req.params.id }).exec();
        return res.status(200).json(get_sale);
    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy giảm giá"
        })
    }
};