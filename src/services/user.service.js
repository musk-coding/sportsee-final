const axios = require("axios");

export const getUser = (userId) => {
  return axios.get(`http://localhost:3000/user/${userId}`);
};

export const getActivityByUser = (userId) => {
  return axios.get(`http://localhost:3000/user/${userId}/activity`);
};
