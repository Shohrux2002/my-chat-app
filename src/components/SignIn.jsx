import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const style = {
  wrapper: `flex justify-center `,
  button: `h-[100%] bg-[green] mr-[20px] text-white p-2 hover:shadow-lg shadow-cyan-500/50 `,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const SignIn = () => {
  return (
    <div className={style.wrapper}>
      {/* <Link to="/auth">
        {" "}
        <button className={style.button}>Sign in with phone Number</button>
      </Link> */}
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
