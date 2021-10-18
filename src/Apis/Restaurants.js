const express = require("express");
const router = express.Router();

const Controller = require("../Controllers/Function_Restaurants");

router.get("/get", async (req, res) => {
  const { page } = req.query;

  console.log(page);
  const results = await Controller.Get(page);
  if (results) res.send({ status: "200", data: results });
  else {
    res.send({ status: "404", message: "Load Restaurants error" });
  }
});

router.patch("/add", async (req, res) => {
  const { data } = req.body;

  const result = await Controller.Add(data);

  if (result == true) res.send({ status: 200, message: "Added successfully" });
  else
    res.send({
      status: 500,
      message: "  Failed to add because your data not exist  ",
    });
});

router.patch("/update", async (req, res) => {
  const { data, update } = req.body;

  console.log(req.body);
  const result = await Controller.Update(data, update);
  if (result == true) {
    res.send({ status: 200, message: "Updated successfully" });
  } else
    res.send({
      status: 500,
      message: "Failed to update because your data not exits",
    });
});

router.patch("/delete", async (req, res) => {
  const { data } = req.body;
  console.log(data);
  const result = await Controller.Delete(data);
  if (result == true)
    res.send({ status: 200, message: "Deleted successfully" });
  else
    res.send({
      status: 500,
      message: "Failed to delete because your data not exist ",
    });
});

module.exports = router;
