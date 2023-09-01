import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function Login() {
  return (
    <div>
      Login
      <div>
        <GoogleOAuthProvider clientId="899005079900-f0n83l0hmt7ip7go3c4qc6ds5q34k3nt.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse.credential);
              var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default Login;
