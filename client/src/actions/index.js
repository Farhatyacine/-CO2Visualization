import axios from "axios";
import { FETCH_CARBON } from "./types";

export const fetchCarbon = () => async dispatch => {
  const res = await axios.get("/api/carbon");

  dispatch({ type: FETCH_CARBON, payload: res.data.number });
};
