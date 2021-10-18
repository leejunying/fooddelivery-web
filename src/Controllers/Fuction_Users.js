const Users_Model = require("../Models/Users");
const utils = require("../Utils/Commonfuction");
const createtoken = require("../Utils/Token");
const nodemailer = require("nodemailer");

//Register
const Add = async (data) => {
  try {
    const userdata = await utils.checkdata(data, Users_Model);

    if (userdata.status === false) {
      const newuser = await Users_Model.create({
        Account: data.Account.trim(),
        Password: utils.hashstring(data.Password.trim()),
        Accounttype: data.Accounttype,
        Firstname: data.Firstname,
        Lastname: data.Lastname,
      });

      let transporter = nodemailer.createTransport({
        host: "MyEcommerce-LeeJunYing.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "lytuanvinh1@gmail.com", // generated ethereal user
          pass: "LoneLyBoysv1", // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <lytuanvinh1@gmail.com>', // sender address
        to: `${data.Account}`, // list of receivers
        subject: "Welcome customer created new account ✔", // Subject line
        html: ` <b>Account:${data.Account.trim()} </b>
              <b> You can login to Foody Delivery  now  </b>
              <a href="localhost:3000">  </a>
              
              `, // html body
      });

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      if (newuser) {
        console.log(newuser);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Login
const Signin = async (data) => {
  try {
    const userdata = await utils.checkdata(
      { Account: data.Account },
      Users_Model
    );

    if (userdata.status === true) {
      let checkpassword = await utils.hashcompare(
        data.Password,
        userdata.data.Password
      );

      if (checkpassword == true) {
        const token = await createtoken.generateToken(userdata.data);

        console.log(token);

        if (token)
          return { status: 200, message: "You are login", token: token };
        else return { status: 500, message: "Can't create token" };
      } else return { status: 404, message: "Account not found" };
    }
  } catch (err) {
    console.log(err);
    return err.toString();
  }
};

//GG Login
const Signin_Google = async (data) => {
  try {
    console.log(data);
    const userdata = await utils.checkdata(
      { Account: data.email },
      Users_Model
    );

    if (userdata.status === false) {
      let newaccount = {
        Account: data.email,
        Password: data.googleId.toString(),
        Avatar: data.imageUrl,
        Firstname: data.familyName,
        Lastname: data.givenName,
      };

      await Add(newaccount);

      let result = await Signin({
        Account: newaccount.Account,
        Password: newaccount.Password,
      });

      return result;
    } else {
      return await Signin({
        Account: data.email,
        Password: data.googleId.toString(),
      });
    }
  } catch (err) {
    console.log(err);
    return err.toString();
  }
};

//Load users
const Get = () => {};

//Update information
const Update = () => {};

//Change  users status to block
const Delete = () => {};

module.exports = {
  Signin,
  Signin_Google,
  Add,
  Get,
  Update,
  Delete,
};
