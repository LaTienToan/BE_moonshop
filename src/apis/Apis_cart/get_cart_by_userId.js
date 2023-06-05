import Cart from "../../models/model_cart";

export const get_cart_by_userId = async (req, res) => {
  try {
    const get_data = await Cart.findById({ _id: req.params.id })
      .populate("detail_product")
      .exec();
    res.status(200).json({
      data: get_data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
