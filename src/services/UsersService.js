import axios from "../setup/axios";
const getListUsers = () => {
  return axios.get("/api/v1/users/read");
};
const getUserByPage = (page, limit) => {
  return axios.get(`/api/v1/users/read?page=${page}&limit=${limit}`);
};
const deleteUser = (id) => {
  return axios.delete(`/api/v1/users/delete`, {
    data: { id: id },
  });
};

const editUser = (data) => {
  return axios.put("/api/v1/users/update", data);
};

const createNewUser = (data) => {
  return axios.post("/api/v1/users/create", data);
};

const getGroups = () => {
  return axios.get("/api/v1/groups/read");
};

const getAccount = () => {
  console.log("getAccount");
  return axios.get("/api/v1/account");
};

const logoutService = () => {
  return axios.post("/api/v1/logout");
}
export {
  getListUsers,
  getUserByPage,
  deleteUser,
  getGroups,
  createNewUser,
  editUser,
  getAccount,
  logoutService
};
