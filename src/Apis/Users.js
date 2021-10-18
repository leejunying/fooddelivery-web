const express = require("express");
const router = express.Router();
const utils = require("../Utils/Commonfuction");
const Controller = require("../Controllers/Fuction_Users");
const verifytoken = require("../Middlewears/Authtoken");
// router.get("/get", async (req, res) => {
//   let results = Controller.Get();

//   if (results === true) {
//     res.send({ status: 200, data: results });
//   } else {
//     res.send({ status: 404, message: "Can't load users" });
//   }
// });

router.patch("/add", async (req, res) => {
  const { data } = req.body;

  if (utils.isEmptyObject(data) === false) {
    console.log(data);

    const result = await Controller.Add(data);

    console.log(result);
    if (result == true) {
      res.send({ status: 200, message: "New user created" });
    } else {
      res.send({
        status: 500,
        message: "Failed to add new user may be your account exist",
      });
    }
  }
});

// router.patch("/update", async (req, res) => {
//   const [data, update] = req.body;

//   if (
//     utils.isEmptyObject(data) === false &&
//     utils.isEmptyObject(update) === false
//   ) {
//     const results = Controller.Update(data, update);

//     if (results === true) {
//       res.send({ status: 200, message: "Updated data successfully" });
//     } else
//       res.send({
//         status: 500,
//         message: "Failed to update user because user not found",
//       });
//   }
// });

// router.patch("/delete", async (req, res) => {
//   const [data] = req.body;

//   if (utils.isEmptyObject(data) === false) {
//     const result = Controller.Delete(data);
//     if (result === true) {
//       res.send({ status: 200, message: "Deleted user successfully " });
//     } else res.send({ status: 500, message: "Failed to delete user" });
//   }
// });

router.post("/login", async (req, res) => {
  const { data } = req.body;

  if (utils.isEmptyObject(data) === false) {
    const result = await Controller.Signin(data);

    res.send(result);
  }
});

router.post("/logingg", async (req, res) => {
  const { data } = req.body;

  const result = await Controller.Signin_Google(data);
  res.send(result);
});

router.post("/profile", verifytoken, async (req, res) => {
  console.log(req.data);

  res.send(req.data);
});
{
}

module.exports = router;
