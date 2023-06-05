import Colors from "../../models/model_color";

export const get_Color = async (req, res) => {
  try {

    const color = await Colors.findOne({ _id: req.params.id }).exec();
    return res.status(200).json(color);

  } catch (error) {
    
    return res.status(400).json({
      error: "Không tìm thấy màu sắc có id tương tự"
    })

  }
};
