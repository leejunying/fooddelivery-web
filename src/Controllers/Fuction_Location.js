const Location_Model = require("../Models/Locations");

const checkdata = async (queryobj) => {
  try {
    // queryobj= {search value}
    const Locationdata = await Location_Model.findOne(queryobj);

    if (Locationdata) return { status: true, data: Locationdata };
    else return { status: false };
  } catch (err) {
    return err;
  }
};

const Get = async () => {
  try {
    const Locationdata = await Location_Model.find();

    if (Locationdata) return Locationdata;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const Add = async (data) => {
  try {
    const Locationdata = await checkdata({
      nation: data.nation,
      key: data.key,
    });

    if (Locationdata.status === false) {
      const newdata = await Location_Model.create({
        nation: data.nation,
        province: data.province,
        key: data.key,
        district: data.district,
      });

      console.log(newdata);
      if (newdata) return true;
      else return false;
    } else return false;
  } catch (err) {
    console.log(err);
  }
};

const Delete = async (data) => {
  try {
    const Locationdata = await checkdata(data);

    if (Locationdata.status === true) {
      const dropdata = await Location_Model.deleteOne(data);

      if (dropdata) return true;
      else return false;
    } else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const Update = async (data, newdata) => {
  try {
    console.log(data, newdata);

    const updatedata = await Location_Model.updateOne(
      { nation: data.nation, province: data.province },
      {
        nation: newdata.nation,
        province: newdata.province,
        key: newdata.key,
        district: newdata.district,
      }
    );

    if (updatedata.modifiedCount > 0) {
      return true;
    } else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  Get,
  Add,
  Delete,
  Update,
};
