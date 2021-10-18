const express = require("express");
const router = express.Router();

// const AuthApi = require("../API/authapi.js");

const Manage_Location = require("../Apis/Location.js");
const Manage_User = require("../Apis/Users");
const Manage_Restaurants = require("../Apis/Restaurants");

router.use("/location", Manage_Location);
router.use("/restaurants", Manage_Restaurants);
router.use("/users", Manage_User);

module.exports = router;
