const mongoose = require("mongoose");

const SuppliersSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    nick: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postal: {
      type: String,
      required: true,
    },
    cnp: {
      type: String,
      required: true,
    },
    inscription: {
      type: String,
      required: false,
    },
    site: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("suppliers", SuppliersSchema);
