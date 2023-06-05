import Payments from "../../models/model_payment";

export const create_Payments = async (req, res) => {
    try {

        const new_payments = await new Payments(req.body).save()
        return res.status(200).json(new_payments)

    } catch (error) {

        res.status(400).json({
            error: "Thêm mới phương thức thanh toán không thành công"
        })

    }
}