const mongoose = require("mongoose");

const { Schema } = mongoose;

const Menus_Model = new Schema({
    create_date: {
        type: Date,
        default: Date.now,
    },

    //Thuộc nhà hàng 
    Restaurant: {
        type: Schema.Types.ObjectId, ref: 'Restaurants' ,
        required: true,
    },

    Name: {
        type: String,
        required: true,
    },

    //Loại đồ ăn
    Types: {
        type: String,
        require: true,
    },

    //Giá gốc
    Price: {
        type: String,
        require: true,
    },

    //Giá giảm
    Discount: {
        type: String,
        require: true,
    },

    //Số lần được đặt
    Ordercount: {
        type: Number,
        default: 0,
    },

    //Hình ảnh demo
    Demoimages: {
        type: Array,
        require: true,

    },
}, { collection: "Menus" });

module.exports = mongoose.model("Menus", Menus_Model);