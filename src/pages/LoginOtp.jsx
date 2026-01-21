import { useState } from "react";
import { verifyOtp } from "../services/authApi";
import { saveAuth } from "../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";

function LoginOtp() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone;

  const handleVerify = async () => {
    const res = await verifyOtp(phone, otp);
    saveAuth(res.token, res.user);
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Enter OTP</h2>
      <input
        type="number"
        placeholder="123456"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <br /><br />
      <button onClick={handleVerify}>Verify OTP</button>
    </div>
  );
}

export default LoginOtp;
