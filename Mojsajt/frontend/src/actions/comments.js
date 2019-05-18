import { GET_COMMENTS, ADD_COMMENT } from "./types";

import axios from "axios";

export const getComments = () => dispatch => {
  axios
    .get("/api/comments/")
    .then(res => {
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
export const addComment = comment => dispatch => {
  axios
    .post("/api/comments/", comment)
    .then(res => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
      console.log(res);
    })
    .catch(err => console.log(err));
};
