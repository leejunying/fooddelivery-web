import GoogleLogin from "react-google-login";
import React from "react";
import { Logingg } from "../../Apis/Users";

const Btngmail = () => {
  const responseGoogle = (response) => {
    if (response != undefined) {
      console.log(response.profileObj);

      let result = Logingg(response.profileObj);
    }
  };

  return (
    <GoogleLogin
      clientId="1000644509758-82pr5n7mb108tui4n3etq12lr7lkqkl6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Btngmail;
