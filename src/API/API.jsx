import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get All data method
export const getAllData = () => {
  return Api.get(`/posts`);
};

// Get data for contrroled paggination
export const get_Pag_Data = (page, limit) => {
  return Api.get(`/posts?_start=${page}&_limit=${limit}`);
};

// get data method

export const getData = () => {
  return Api.get(`/posts?_limit=10`);
};
// Add data method

export const PutData = () => {
  return Api.post(`/posts`);
};
// update data method

export const updateData = (id) => {
  return Api.patch(`/posts/${id}`);
};
// delete data method

export const deleteData = (postid) => {
  return Api.delete(`/posts/${postid}`);
};

//get Indiviual_data

export const getIndiData = (id) => {
  return Api.get(`/posts/${id}`);
};

export const infiniteData = async({ pageParam = 1 }) => {
  const res = await axios.get(
    `https://api.github.com/users?per_page=10&page=${pageParam}`
  );
  return res.data;
};
