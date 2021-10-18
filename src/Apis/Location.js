const express = require("express");
const router = express.Router();
const utils = require("../Utils/Commonfuction");
const Controller = require("../Controllers/Fuction_Location");



// Demo add
// {   
//   "data":{
//       "nation": "VIETNAM",
//       "province": "HỒ CHÍ VINH",
//       "key":"HCM",
//       "district": [
//           "Phường 1",
//           "Phường 2",
//           "Phường 3",
//           "Phường 4",
//           "Phường 5",
//           "Phường 6",
//           "Phường 7",
//           "Phường 8",
//           "Phường 9",
//           "Phường 10",
//           "Phường 11",
//           "Phường 12",
//           "Bình Tân",
//           "Bình Thạnh",
//           "Tân Phú",
//           "Tân Bình",
//           "Thủ Đức",
//           "Huyện Củ Chi",
//           "Huyện Cần Giờ",
//           "Huyện Nhà Bè",
//           "Huyện Hóc Môn",
//           "Huyện Bình Chánh",
//           "Gò Vấp",
//           "Phú Nhuận"
//       ]
//   }
// }

 

// {
    
    
//   "data":{
//       "nation": "VIETNAM",
//       "province": "HỒ CHÍ VINH"

//   },
  
//   "update": {
//       "nation": "VIETNAM",
//       "province": "HỒ CHÍ MINH",
//       "key":"HCM",
//       "district": [
//           "Phường 1",
//           "Phường 2",
      
//       ]
//   }
// }







router.get("/get", async (req, res) => {
  const result = await Controller.Get();

  if (result == false)
    res.send({ status: "404", message: "Location Load Failed" });
  else res.send({ status: "200", data: result });
});

router.patch("/add", async (req, res) => {
  const { data } = req.body;

  console.log(data);

  if (utils.isEmptyObject(data) === false) {
    let result = await Controller.Add(data);

    if (result === true) {
      res.send({ status: "200", message: "Success add Location" });
    } else res.send({ status: "500", message: "Your data not right" });
  }
});
router.patch("/delete", async (req, res) => {
  // input =  {province:"TP Hồ Chí Minh"}
  const { data } = req.body;

  if (utils.isEmptyObject(data) === false) {
    let result = await Controller.Delete(data);

    if (result == false)
      res.send({
        status: "404",
        messange: "Can't found Location or your data is not correct",
      });
    else res.send({ status: "200", message: "Delete successful" });
  }
});

router.patch("/update", async (req, res) => {
  const { data, update } = req.body;





  const result = await Controller.Update(data, update);

  if (result == false)
    res.send({ status: "404", message: "Fail update Location" });
  else res.send({ status: "200", message: "Update successful" });
});

module.exports = router;
