import axios from 'axios';
import HOST from '../config/Host';

export const requestOtpToVote = async () => {
  // here I have to send the get request with authorization header with the bearer token that I have saved in the local storage
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${HOST}/api/vote/request-otp`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error requesting OTP:', error);
    return { success: false };
  }
};

export const verifyOtpAndGetCandidates = async (otp) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(
      `${HOST}/api/vote/verify-otp`,
      { otp },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return { success: false };
  }
};


