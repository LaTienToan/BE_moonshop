import Color from "../../models/model_color";

export const update_Colors = async (req, res) => {
  try {
    const color = await Color.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    return res.status(200).json(color);
  } catch (error) {

    return res.status(400).json({
      error: "Cập nhật màu sắc không thành công"
    })

  }
};
