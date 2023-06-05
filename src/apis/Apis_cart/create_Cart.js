import Cart from "../../models/model_cart";

export const add_cart = async (req, res) => {
  try {
    const new_product = await new Cart(req.body).save();
    res.status(200).json({
      data: new_product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
