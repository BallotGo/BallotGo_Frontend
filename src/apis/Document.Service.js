import axios from "axios";
import { HOST } from "../config/Host";

export async function uploaddoc(document) {
  try {
    const response = await axios.post(`${HOST}/document`, document);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject("Submission Failed !");
  }
}
