const mongoose = require("mongoose");

const { Schema } = mongoose;

const Users_Model = new Schema(
  {
    create_date: {
      type: Date,
      default: Date.now,
    },

    // Admin,User,something else
    Accounttype: {
      type: String,
      require: true,
    },
    //Activate or Deactivate
    Status: {
      type: String,
      default: "Activate",
    },
    Firstname: {
      type: String,
      required: true,
    },

    Lastname: {
      type: String,
      required: true,
    },

    Birthday: {
      type: String,
      default: "",
    },

    Account: {
      type: String,
      unique: true,
      required: true,
    },

    Password: {
      type: String,
      require: true,
    },

    //300 X 300 image

    //Hình đại diện
    Avatar: {
      type: String,
      default:
        "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png",
    },
    // Thành viên để áp dụng discount
    Member: {
      type: String,
      default: "Newbie",
    },

    // Lịch sử thanh toán
    Payments: {
      type: Array,
      default: [],
    },

    // Lưu các nhà hàng yêu thích
    Collections: {
      type: Array,
      default: [],
    },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", Users_Model);
