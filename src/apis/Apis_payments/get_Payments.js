import payment from "../../models/model_payment"
export const get_Payments = async (req, res) => {
    try {

        const data = await payment.find().exec();
        return res.status(200).json(data);

    } catch (error) {

        res.status(400).json({
            error: "Lấy danh sách phương thức thanh toán không thành công"
        })

    }
};