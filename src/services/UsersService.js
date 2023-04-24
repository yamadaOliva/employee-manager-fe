import axios from "axios";
const getListUsers = () => {
  return axios.get("http://localhost:8080/api/v1/users/read");
};
const getUserByPage = (page, limit) => {
  return axios.get(
    `http://localhost:8080/api/v1/users/read?page=${page}&limit=${limit}`
  );
};
const deleteUser = (id) => {
  return axios.delete(`http://localhost:8080/api/v1/users/delete`,{data : {id : id}});
}

const getGroups = () => {
  return axios.get("http://localhost:8080/api/v1/groups/read");
};
export { getListUsers, getUserByPage, deleteUser,getGroups };
