const bcrypt = require("bcryptjs");

const isEmptyObject = (obj) => {
  return JSON.stringify(obj) === "{}";
};

const checkdata = async (queryobj, model) => {
  try {
    // queryobj= {search value}
    const results = await model.findOne(queryobj);

    if (results) return { status: true, data: results };
    else return { status: false };
  } catch (err) {
    return err;
  }
};

const hashstring = (text) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(text, salt);

  return hash;
};

const hashcompare = (Password, hash) => {
  return bcrypt.compare(Password, hash);
};



module.exports = {
  isEmptyObject,
  checkdata,
  hashstring,
  hashcompare,

};
