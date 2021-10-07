const mongoose = require("mongoose");

const { Schema } = mongoose;

const Location_Model = new Schema({
    create_date: {
        type: Date,
        default: Date.now,
    },

    //Quốc gia
    nation: {
        type: String,
        required: true,
    },

    //Tỉnh thành phố "Hồ Chí Minh"
    province: {
        type: String,
        required: true,
    },


    //Tên viết tắt theo quy ước vd HCM,HN,AG,BK,...
    key: {

        type: String,
        require: true,

    },

    //Tất cả các quận huyện  của thành  phố hoặc tỉnh đó "1,2,3,4,5,6...."
    district: {
        type: Array,
        require: true,
    },
}, { collection: "Location" });

module.exports = mongoose.model("Location", Location_Model);