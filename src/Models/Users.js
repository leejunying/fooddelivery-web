const mongoose = require("mongoose");

const { Schema } = mongoose;

const Users_Model = new Schema({
    create_date: {
        type: Date,
        default: Date.now,
    },



    Account: {
        type: String,
        required: true,
    },


    Password: {
        type: String,
        require: true,
    },

    //Hình đại diện
    Avatar: {

        type: String,
        require: true,

    },
    // Thành viên để áp dụng discount
    Member: {
        type: String,
        require: true,
    },

    // Lịch sử thanh toán
    Payments: {
        type: Array,
        default: [],
        require: true,
    },

    // Lưu các nhà hàng yêu thích
    Collections: {

        type: Array,
        default: [],
        require: true,
    }





}, { collection: "Users" });

module.exports = mongoose.model("Users", Users_Model);