import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function Login({ setUser }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirm, setConfirm] = useState(null);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      { size: "invisible" }
    );
  };

  const sendOTP = async () => {
    try {
      setupRecaptcha();
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        window.recaptchaVerifier
      );
      setConfirm(confirmation);
      alert("OTP Sent ✅");
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      const result = await confirm.confirm(otp);
      setUser(result.user);
    } catch (err) {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Login to AstroAI</h2>

      <input
        placeholder="Enter Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />

      {!confirm ? (
        <button onClick={sendOTP}>Send OTP</button>
      ) : (
        <>
          <input
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}
