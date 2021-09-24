const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./models/ModelProducts");
require("./models/ModelClients");
require("./models/ModelTransactions");

const ProductsSchema = mongoose.model("products");
const ClientsSchema = mongoose.model("clients");
const TransactionsSchema = mongoose.model("transactions");

app.use(express.json());
app.use(cors());


// const corsOptions = {
//     origin: ["https://erpfronten.herokuapp.com/","http://erpfronten.herokuapp.com/"]
//       };
  
//   app.use(cors(corsOptions));

// MONGODB_REMOTO
mongoose.connect(process.env.DATABASE_HOST_NEW, {
  // mongoose.connect('mongodb://localhost/ERP', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.log("Connection error!"+error);
  });

// ============================== CLIENTS ROUTES ==============================

app.get("/clients", (req, res) => {
  ClientsSchema.find().sort({'_id': -1})
    .then((clients) => {
      return res.json(clients);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Client not found!",
      });
    });
});

app.post("/clients", (req, res) => {
  const clients = ClientsSchema.create(req.body, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Not saved, try again!",
      });
    return res.status(200).json({
      error: false,
      message: "Saved!",
    });
  });
});

app.put("/clients/:id", (req, res) => {
  const clients = ClientsSchema.updateOne(
    { _id: req.params.id },
    req.body,
    (error) => {
      if (error)
        return res.status(400).json({
          error: true,
          message: "Error: Document not updated! Try again!",
        });
      return res.json({
        error: false,
        message: "Sucess! Document updated!",
      });
    }
  );
});

app.delete("/clients/:id", (req, res) => {
  const clients = ClientsSchema.deleteOne({ _id: req.params.id }, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Client is not deleted!",
      });
    return res.json({
      error: false,
      message: "Client Deleted",
    });
  });
});

// ============================== PRODUCTS ROUTES ==============================

app.get("/products", (req, res) => {
  ProductsSchema.find().sort({'_id': -1})
    .then((products) => {
      return res.json(products);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Product not found!",
      });
    });
});

app.post("/products", (req, res) => {
  const products = ProductsSchema.create(req.body, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Not saved, try again!",
      });
    return res.status(200).json({
      error: false,
      message: "Saved!",
    });
  });
});

app.put("/products/:id", (req, res) => {
  const products = ProductsSchema.updateOne(
    { _id: req.params.id },
    req.body,
    (error) => {
      if (error)
        return res.status(400).json({
          error: true,
          message: "Error: Document not updated! Try again!",
        });
      return res.json({
        error: false,
        message: "Sucess! Document updated!",
      });
    }
  );
});

app.delete("/products/:id", (req, res) => {
  const products = ProductsSchema.deleteOne({ _id: req.params.id }, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Product is not deleted!",
      });
    return res.json({
      error: false,
      message: "Product Deleted",
    });
  });
});

// ============================== TRANSACTIONS ROUTES ==============================

app.get("/transactions", (req, res) => {
  TransactionsSchema.find().sort({'_id': -1})
    .then((transactions) => {
      return res.json(transactions);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Transaction not found!",
      });
    });
});

app.post("/transactions", (req, res) => {
  const transactions = TransactionsSchema.create(req.body, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Transaction not saved, try again!",
      });
    return res.status(200).json({
      error: false,
      message: "Saved!",
    });
  });
});

app.put("/transactions/:id", (req, res) => {
  const transactions = TransactionsSchema.updateOne(
    { _id: req.params.id },
    req.body,
    (error) => {
      if (error)
        return res.status(400).json({
          error: true,
          message: "Error: Transaction not updated! Try again!",
        });
      return res.json({
        error: false,
        message: "Sucess! Transaction updated!",
      });
    }
  );
});

app.delete("/transactions/:id", (req, res) => {
  const products = TransactionsSchema.deleteOne({ _id: req.params.id }, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Transaction is not deleted!",
      });
    return res.json({
      error: false,
      message: "Transactions Deleted",
    });
  });
});

// ============================== UP SERVER ==============================

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
