const mongoose = require("mongoose");

const { Schema } = mongoose;

const Blogs_Model = new Schema(
  {
    create_date: {
      type: Date,
      default: Date.now,
    },

    Title: {
      type: String,
      required: true,
    },

    Blog_content: {
      type: String,
      required: true,
    },

    Author: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { collection: "Blogs" }
);

module.exports = mongoose.model("Blogs", Blogs_Model);
