const BASE_URL = ""; // same origin, backend can plug later

export async function sendOtp(phone) {
  // MOCK SUPPORT
  console.log("Mock OTP sent to:", phone);

  return fetch(`${BASE_URL}/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  });
}

export async function verifyOtp(phone, otp) {
  // MOCK OTP = 123456
  if (otp === "123456") {
    return {
      token: "MOCK_JWT_TOKEN",
      user: {
        id: "uuid",
        phone,
        role: "customer"
      }
    };
  }

  const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, otp })
  });

  return res.json();
}

export async function getMe(token) {
  const res = await fetch(`${BASE_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
}
