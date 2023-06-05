import Colors from "../../models/model_color";

export const create_Color = async (req, res) => {
  try {

    const color = await new Colors(req.body).save();
    return res.status(200).json(color);

  } catch (error) {

    return res.status(400).json({
      error: "Thêm mới màu sắc không thành công"
    })

  }
};
