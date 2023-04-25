import { useState, useEffect } from "react";
import { getListUsers, getUserByPage, deleteUser } from "../../services/UsersService";
import ReactPaginate from "react-paginate";
import {toast} from "react-toastify";
import {ModalDelete} from "./ModalDelete";
import {ModalCreate} from "./ModalCreate";
import {ModalEdit} from "./ModalEdit";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalPage, setTotalPage] = useState(0);
  const [modalDelete, setModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [userEdit, setUserEdit] = useState({});
  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };
  const handleDelete =async (id) => {
    setModalDelete(true);
    setIdDelete(id);
  }
  const handleCloseModalDelete = () => {
    setModalDelete(false);
  }
  const handleCreate = () => {
    setModalCreate(true);
  }
  const handleCloseModalEdit = () => {
    setModalEdit(false);
  }
  const handleEdit = (item) => {
    setModalEdit(true);
    setUserEdit(item);
  }
  const handleCloseModalCreate = async () => {
    console.log("close modal create");
    setModalCreate(false);
    let userList = await getUserByPage(page, limit);
    if (+userList.data.data2.EC == 200) {
      setUsers(userList.data.data2.DT.users);
      setTotalPage(+userList.data.data2.DT.totalPages);
    } else {
      alert(userList.data.data2.EM);
    }
  }
  
  const confirmDelete = async () => {
    let response = await deleteUser(idDelete);
    console.log(response);
    let userList = await getUserByPage(page, limit);
    if (+userList.data.data2.EC == 200) {
      setUsers(userList.data.data2.DT.users);
      setTotalPage(+userList.data.data2.DT.totalPages);
      toast.success("Delete success");
    } else {
      alert(userList.data.data2.EM);
    }
    setModalDelete(false);
  }

  
  useEffect(async () => {
    let userList = await getUserByPage(page, limit);
    if (+userList.data.data2.EC == 200) {
      setUsers(userList.data.data2.DT.users);
      setTotalPage(+userList.data.data2.DT.totalPages);
    } else {
      alert(userList.data.data2.EM);
    }
  }, []);
  useEffect(async () => {
    let userList = await getUserByPage(page, limit);
    if (+userList.data.data2.EC == 200) {
      setUsers(userList.data.data2.DT.users);
    } else {
      alert(userList.data.data2.EM);
    }
  }, [page]);

  return (
    <>
    <div className="manage-user container">
      <div className="user-header">
        <div className="title">
          <h3>User manage</h3>
        </div>
        <div className="actions">
          <button className="btn btn-success">Add user</button>
          <button className="btn btn-primary"
          onClick = {handleCreate}
          >Add New users</button>
        </div>
      </div>
      <div className="user-body mt-5">
        <table className="table table-bordered table-hover">
          <thead>
            <th scope="col">no</th>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">UserName</th>
            <th scope="col">Group</th>
            <th scope="col">Sex</th>
            <th scope="col">Phone</th>
            <th scope="col">actions</th>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((item, index) => {
                return (
                  <tr key = {`row-${index}`}>
                    <td>{index + 1 +(page-1)*limit}</td>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.Group.name}</td>
                    <td>{item.sex}</td>
                    <td>{item.phone}</td>
                    <td>
                        <button className="btn btn-primary m-3"
                        onClick = {() => handleEdit(item)}
                        >Edit</button>
                        <button className="btn btn-danger"
                        onClick = {() => handleDelete(item.id)}
                        >Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">No data</td>
              </tr>
            )}
          </tbody>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={totalPage}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </table>
      </div>
    </div>
    <ModalDelete
      show = {modalDelete}
      handleClose = {handleCloseModalDelete}
      confirmDelete = {confirmDelete}
    />
    <ModalCreate
      show ={modalCreate}
      handleClose = {handleCloseModalCreate}
    />
    <ModalEdit
      show = {modalEdit}
      handleClose = {handleCloseModalEdit}
      user ={userEdit}
    />
    </>
    
  );
};
export { Users };
