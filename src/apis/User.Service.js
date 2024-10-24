import axios from "axios";
import HOST from "../config/Host";

//last change
export async function login(credentials) {
  try {
    console.log(credentials);
    const response = await signInWithNICAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject("Invalid NIC or Password !");
  }
}

export async function adduser(newuser) {
  try {
    const response = await axios.post(`${HOST}/api/user`, newuser);
    return response;
  } catch (err) {
    console.log(err);
    return await Promise.reject("User Registration was Failed !");
  }
}

export async function getuser() {
  try {
    const response = await axios.get(`${HOST}/api/user`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return await Promise.reject("User Fetching was Failed !");
  }
}

export async function deleteuser(user) {
  try {
    const response = await axios.delete(`${HOST}/api/user/${user.id}`);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject("User Deletion was Failed !");
  }
}

export async function getuserbyid(id) {
  try {
    const response = await axios.get(`${HOST}/user/${id}`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return await Promise.reject("User Fetching was Failed !");
  }
}

export async function updateuser(existinguser) {
  try {
    const response = await axios.put(`${HOST}/user`, existinguser);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject("User Updation was Failed !");
  }
}

// add user
// edit user
// delete user
// get user
