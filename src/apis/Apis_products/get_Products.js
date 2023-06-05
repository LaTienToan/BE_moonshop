import Product from "../../models/model_product";

export const get_Products = async (req, res) => {
    try {

        const data = await Product.find();
        return res.status(200).json(data);
        
    } catch (error) {
        res.status(400).json({
            error: "Kho sản phẩm đang trống"
        })
    }
};