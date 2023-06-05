import Color from "../../models/model_color";

export const get_Colors = async (req, res) => {
  try {

    const data = await Color.find();
    return res.status(200).json(data);

  } catch (error) {

    return res.status(400).json({
      error: "Không thể lấy danh sách màu sắc"
    })
    
  }
};
