const express = require("express");
const router = express.Router();
const utils = require("../Utils/Commonfuction")
const Controller = require("../Controllers/Fuction_Location")






router.get("/get", async(req, res) => {





})



router.patch("/add", async(req, res) => {


    const { data } = req.body


    console.log(data)

 
    if (utils.isEmptyObject(data) === false) {

        
        let result = await Controller.Addlocation(data)

        if (result === true) {
            res.send({ status: "200", message: "Success add Location" })

        } else
            res.send({ status: "500", message: "Your data not right" })

    }




})













module.exports = router;