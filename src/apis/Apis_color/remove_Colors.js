import Color from "../../models/model_color";

export const remove_Colors = async (req, res) => {
  try {

    const color = await Color.findByIdAndRemove({
      _id: req.params.id,
    }).exec();
    return res.status(200).json(color);

  } catch (error) {

    return res.status(400).json({
      error: "Xóa màu sắc không thành công"
    })

  }
};
