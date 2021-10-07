const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Đọc body từ request
const Router = require("../src/Routers/Router"); //Sử dụng routers được export
require("dotenv").config(); //Cho phép sử dụng dotenv
const cors = require("cors"); // Khai báo cors để chạy trên trình duyệt
const app = express();
var server = require("http").Server(app);

server.listen(process.env.PORT, () => {
    console.log(`Sever on ${process.env.PORT}`);
});

app.use(bodyParser.json());

// Khai báo cors cho phép server truy cập đến trang nào dựa trên đường dẫn
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
};
var whitelist = ["http://localhost:3000", "http://localhost:3001"];
var corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = {
            origin: true,
            optionsSuccessStatus: 200,
            credentials: true,
        }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
///////////////////////////////////////////////////////////////
const Fooddivery = require("./Configs/Database.js");

mongoose
    .connect(Fooddivery.URL_DB, {})
    .then(() => {
        console.log("Successfully connected to the database Foody Delivery");
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });

app.use("/", Router);