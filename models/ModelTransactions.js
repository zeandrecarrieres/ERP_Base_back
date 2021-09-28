const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    qtde: {
        type: Number,
        required: true,
      },
    reference_price: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    obs: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("transactions", TransactionsSchema);
