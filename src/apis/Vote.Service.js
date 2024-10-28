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

export const sendBlindedVote = async (blindedVote) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(
      `${HOST}/api/vote/submit-vote`,
      { blindedVote },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending vote:', error);
    return { success: false };
  }
};

export const sendVerifiedVote = async (signature, candidate_id) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(
      `${HOST}/api/vote/store-verified-vote`,
      { signature, candidate_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending verified vote:', error);
    return { success: false };
  }
};

export const verifyVoteSubmitSuccess = async (voteVerifyToken) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(
      `${HOST}/api/vote/verify-vote-submit-success`,
      { voteVerifyToken },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error verifying vote submission:', error);
    return { success: false };
  }
};

export const getResults = async () => {
  try {
    const response = await axios.get(`${HOST}/api/control/results`);
    return response.data;
  } catch (error) {
    console.error('Error getting results:', error);
    return { success: false };
  }
};

export const getUniversalVerifiability = async () => {
  try {
    const response = await axios.get(
      `${HOST}/api/control/universal-verifiability`
    );
    return response.data;
  } catch (error) {
    console.error('Error getting universal verifiability:', error);
    return { success: false };
  }
};
