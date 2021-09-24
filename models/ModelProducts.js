const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
    purchase_price: {
      type: Number,
      required: true,
    },
    reference_price: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", ProductsSchema);
