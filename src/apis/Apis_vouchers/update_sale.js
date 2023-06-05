import giam_gia from "../../models/model_voucher"
export const update_sale = async (req, res) => {
    try {
        const update_sale = await giam_gia.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).exec();
        return res.status(200).json(update_sale);
    } catch (error) {
        res.status(400).json({
            error: "Không thể cập nhật mới giảm giá"
        })
    }
};