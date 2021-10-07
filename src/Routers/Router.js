const express = require("express");
const router = express.Router();
// const AuthApi = require("../API/authapi.js");

const Manage_Location = require("../Apis/Location.js");


router.use("/location", Manage_Location);


module.exports = router;