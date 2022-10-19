import { updatePhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

const style = {
  auth: `fixed top-[35%] left-[38%] flex flex-col gap-y-5`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[100%] bg-green-500 p-5`,
};

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [ExpandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  };
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };
  const requestOTP = (e) => {
    e.preventDefault();
    if (updatePhoneNumber.length >= 13) {
      setExpandForm(true);
      generateRecaptcha();
      signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <form onSubmit={requestOTP} className={style.auth}>
      <input className={style.input} type="text" placeholder="Full name..." />
      <input className={style.input} type="text" placeholder="Your nomber..." />
      <button
        type="submit"
        onChange={(e) => setPhoneNumber(e.target.value)}
        className={style.button}
      >
        Get CMS code
      </button>

      <input
        value={OTP}
        onChange={(e) => {
          verifyOTP(e);
        }}
        className={style.input}
        type="text"
        placeholder="code"
      />
      <div id="sign-in-button"></div>
    </form>
  );
};

export default Auth;
