import Cart from "../../models/model_cart";

export const update_product_cart = async (req, res) => {
  try {
    const update_data = await Cart.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.status(200).json({
      data: update_data,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
