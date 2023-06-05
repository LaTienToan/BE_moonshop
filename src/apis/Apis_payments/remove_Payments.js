import payment from "../../models/model_payment"
export const remove_Payments = async (req, res) => {
    try {

        const remove_payment = await payment.findByIdAndRemove({
            _id: req.params.id,
        }).exec();
        return res.status(200).json(remove_payment);

    } catch (error) {

        res.status(400).json({
            error: "Xóa phương thức thanh toán không thành công"
        })

    }
};