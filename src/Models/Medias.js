const mongoose = require("mongoose");

const { Schema } = mongoose;

const Medias_Model = new Schema(
  {
    create_date: {
      type: Date,
      default: Date.now,
    },

    Images: [
      {
        type: String,
        required: true,
      },
    ],

    Videos: [
      {
        type: String,
        required: true,
      },
    ],

    Postid: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
    },
  },
  { collection: "Medias" }
);

module.exports = mongoose.model("Medias", Medias_Model);
