const mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
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
    user: {
      type: String,
      required: true,
    },
    comission: {
      type: Number,
      required: true,
    },
    // productListItems: {
    //   itemName:{
    //     type: String,
    //     required: true,
    //   },
    //   itemQtde:{
    //     type: Number,
    //     required: true,
    //   },
    //   itemPrice:{
    //     type: String,
    //     required: true,
    //   },
    //   itemDiscount:{
    //     type: Number,
    //     required: true,
    //   },
    //   itemTotalPrice:{
    //     type: Number,
    //     required: true,
    //   }
    // },
    productListItems: {
      type: Array,
      required: true,
    },
    // product: {
    //   type: String,
    //   required: true,
    // },
    // qtde: {
    //     type: Number,
    //     required: true,
    //   },
    // reference_price: {
    //   type: Number,
    //   required: true,
    // },
    totalValue: {
      type: Number,
      required: true,
    },
    condition_payment: {
      type: String,
      required: true,
    },
    vcto: {
      type: Date,
      required: true,
    },
    form_payment: {
      type: String,
      required: true,
    },
    transport: {
      type: Number,
      required: true,
    },
    depense: {
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
