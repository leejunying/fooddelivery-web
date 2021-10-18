const mongoose = require("mongoose");

const { Schema } = mongoose;

const Restaurants_Model = new Schema(
  {
    create_date: {
      type: Date,
      default: Date.now,
    },

    //Thuộc location ref là Collection của Locationid
    Location: {
      type: Object,
      required: true,
    },

    // Title: {
    // Name:"Heo Mọi Quán",
    // Street:"Bàn Cờ" }
    Title: {
      type: Object,
      required: true,
    },

    //  //{
    //      Type:"Nhà hàng",
    //      Object:"Gia đình"
    // Foodtype:"Food"

    //  }

    //Loại nhà hàng || quán
    Media: {
      type: String,
      require: true,
    },
    Types: {
      type: Object,
      require: true,
    },

    Address: {
      type: String,
      require: true,
    },

    Status: {
      type: String,
      default: "Active",
    },

    Openat: {
      type: String,
      require: true,
    },

    // exp:{Min:300k , Max:500k}
    Cost: {
      type: Object,
      require: true,
    },

    // Tổng số điểm đánh giá
    Rating: {
      type: Array,
      default: [],
    },

    //Lưu số đánh giá
    Feel: {
      type: Object,
      default: {
        best: 0,
        good: 0,
        normal: 0,
        bad: 0,
      },
    },
  },
  { collection: "Restaurants" }
);

module.exports = mongoose.model("Restaurants", Restaurants_Model);
