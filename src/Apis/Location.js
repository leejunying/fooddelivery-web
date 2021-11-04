import axios from "axios";

var host = "http://localhost:4000";

export const Load = () => {
  return axios.get(`${host}/location/get`);
};

export const Add = (adddata) => {
  return axios.patch(`${host}/location/add`, adddata);
};

export const Delete = (deletedata) => {
  return axios.patch(`${host}/location/delete`, deletedata);
};

export const Update = (selectdata, updatedata) => {
  let obj = {
    data: selectdata,
    update: updatedata,
  };

  return axios.patch(`${host}/location/update`, obj);
};
