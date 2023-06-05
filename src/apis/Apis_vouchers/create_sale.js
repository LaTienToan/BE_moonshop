import giam_gia from "../../models/model_voucher";

export const create_sale = async (req, res) => {
    try {
        const new_category = await new giam_gia(req.body).save()
        res.json(new_category)
    } catch (error) {
        res.status(400).json({
            error: "Không thể thêm mới giảm giá"
        })
    }
}