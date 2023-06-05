import payment from "../../models/model_payment"
export const update_Payments = async (req, res) => {
    try {
        
        const update_payment = await payment.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).exec();
        return res.status(200).json(update_payment);

    } catch (error) {

        res.status(400).json({
            error: "Cập nhật thông tin phương thức thanh toán không thành công"
        })

    }
};