require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { HoldingsModel } = require("./model/HoldingsModel");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});
app.get("/allHoldings", async (req, res) => {
    let allHoldins = await HoldingsModel.find({});
    res.json(allHoldins);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
  mongoose.connect(uri);
});
