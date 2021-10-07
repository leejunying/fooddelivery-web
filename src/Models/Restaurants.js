const mongoose = require("mongoose");

const { Schema } = mongoose;

const Restaurants_Model = new Schema({
    create_date: {
        type: Date,
        default: Date.now,
    },

    //Thuộc location
    Locationid: {
        type: Object,
        required: true,
    },


    Name: {
        type: String,
        required: true,
    },

    //Loại nhà hàng || quán
    Types: {
        type: String,
        require: true,
    },


    Address: {
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

        type: Number,
        default: 0

    },


    //Lưu số đánh giá
    Reviews: {

        type: Object,
        default: {

            best: 0,
            good: 0,
            normal: 0,
            bad: 0,


        }



    }

}, { collection: "Restaurants" });

module.exports = mongoose.model("Restaurants", Restaurants_Model);