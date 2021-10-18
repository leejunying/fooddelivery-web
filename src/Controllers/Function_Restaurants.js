const Restaurants_Model = require("../Models/Restaurants");

const utils = require("../Utils/Commonfuction");

const Get = async (loadpage) => {
  try {
    //default page

    let page = loadpage * 1 || 1;

    //items of 1 page
    let perpage = 20;

    const Restaurantdata = await Restaurants_Model.find()
      .skip(perpage * page - perpage)
      .limit(perpage);

    if (Restaurantdata) return Restaurantdata;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const Add = async (data) => {
  try {
    //Types, Location ,Cost,Address,Opentime

    const Restaurantdata = await utils.checkdata(
      { Title: data.Title },
      Restaurants_Model
    );

    if (Restaurantdata.status === false) {
      const newdata = await Restaurants_Model.create(data);
      if (newdata) return true;
      else return false;
    } else return false;
  } catch (err) {
    console.log(err);
  }
};

const Delete = async (data) => {
  try {
    const Restaurantdata = await utils.checkdata(data.Title, Restaurants_Model);

    if (Restaurantdata.status === true) {
      const dropdata = await Restaurants_Model.deleteOne(data.Title);

      if (dropdata.deletedCount > 0) {
        return true;
      } else return false;
    } else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const Update = async (data, newdata) => {
  try {
    const Restaurantdata = await utils.checkdata(data, Restaurants_Model);

    if (Restaurantdata.status === true) {
      const updatedata = await Restaurants_Model.updateOne(data.Title, newdata);

      console.log(data.Title, newdata);
      if (updatedata.modifiedCount > 0) {
        console.log(updatedata);
        return true;
      } else return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  Add,
  Get,
  Delete,
  Update,
};
