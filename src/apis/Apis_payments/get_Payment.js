import payment from "../../models/model_payment"
export const get_payment = async (req, res) => {
    try {

        const get_payment = await payment.findOne({ _id: req.params.id }).exec();
        return res.status(200).json(get_payment);

    } catch (error) {
        res.status(400).json({
            error: "Không tìm thấy payment"
        })
    }
};