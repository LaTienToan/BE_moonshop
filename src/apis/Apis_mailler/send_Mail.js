import Code_pass from '../../models/code_password';
import User from '../../models/model_user';

export const send_Mail = async (req, res) => {

  const rand_code = Math.floor(Math.random() * 1000000);
  const crypto = require('crypto');

  // Tạo chuỗi ngẫu nhiên bao gồm 6 ký tự
  const code = crypto.randomBytes(4).toString('hex').toUpperCase();

  const user = await User.findOne({ email: req.body.email }).exec()

  if (!user) {
    return res.status(400).json({
      message: "Email không tồn tại trong hệ thống"
    })
  }


  // MAILLER START

  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Ductham784@gmail.com',
      pass: 'awwuybsuthlnfqtb'
    }
  });

  var mailOptions = {
    from: 'Ductham784@gmail.com',
    to: `${req.body.email}`,
    subject: 'Yêu cầu cấp lại mật khẩu',
    html: `

        <h4 style="text-align:left">Bạn đang yêu cầu đặt lại mật khẩu của tài khoản của mình. Vui lòng không cung cấp mã xác nhận cho bất cứ ai! Mã xác nhận của bạn là:</h4>
        <h4>
            <h3 style="text-align:center;color:red; margin:auto">${rand_code}</h3>
        </h4>

      `
  };

  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {

      return res.status(400).json(error);

    } else {

      const code = await new Code_pass({ "code_pass": code }).save();

      return res.status(200).json(code);
    }
  });

}