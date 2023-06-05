import giam_gia from "../../models/model_voucher"
export const remove_sale = async (req, res) => {
    try {
        const remove_sale = await giam_gia.findByIdAndRemove({
            _id: req.params.id,
        }).exec();
        return res.status(200).json(remove_sale);
    } catch (error) {
        res.status(400).json({
            error: "Không thể xóa giảm giá"
        })
    }
};