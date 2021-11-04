import axios from "axios";
var host = "http://localhost:4000";
var path = "users";
export const Logingg = (profileObj) => {
  let data = {
    data: profileObj,
  };

  return axios.post(`${host}/${path}/logingg`, data);
};
