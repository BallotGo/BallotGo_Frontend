import axios from "axios";
import HOST from "../config/Host";

//last change
export async function login(credentials) {
  try {
    const payload = {
      identity_card_number: credentials.nic,
      password: credentials.password,
    };
    const response = await axios.post(`${HOST}/api/user/login`, payload);

    // Check for a successful login response
    if (response.status === 200 && response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('publicKey', response.data.publicKeyPem);
      return response.data;
    } else {
      throw new Error("Invalid login credentials");
    }
  } catch (err) {
    return await Promise.reject("Invalid NIC or Password !");
  }
}

export async function userRegisterForVoting(newuser) {
  try {
    const response = await axios.post(`${HOST}/api/user/register`, newuser);
    return response;
  } catch (err) {
    return await Promise.reject("User Registration was Failed !");
  }
}

export async function verifyOTP(otp) {
  try {
    const response = await axios.post(`${HOST}/api/user/verify-otp`, otp);
    return response;
  } catch (err) {
    return await Promise.reject("OTP verification failed !");
  }
}
