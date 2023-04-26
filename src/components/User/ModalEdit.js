import "./User.scss";
import { set } from "lodash";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { getGroups, createNewUser,editUser } from "../../services/UsersService";
import _ from "lodash";
import { toast } from "react-toastify";
//import scss file
import "./User.scss";
const ModalEdit = (props) => {
  const [groups, setGroups] = useState([]);
  const [isShow, setIsShow] = useState(false);
  let dataDefault = {
    username: "",
    email: "",
    password: "*******************",
    phone: "",
    sex: "",
    groupID: "",
    address: "",
  };
  const [dataRaw, setDataRaw] = useState(dataDefault);
  useEffect(async () => {
    let response = await getGroups();
    if (+response?.data?.EC == 200) {
      setGroups(response?.data?.DT);
    }
  }, []);
  useEffect(() => {
    console.log(props.user);
    setDataRaw(props.user);
  }, [props.user]);
  useEffect(() => {
    setDataRaw(props.user);
    console.log(dataRaw);
  }, [props.user]);
  const handleInput = (value, name) => {
    let dataPtr = _.cloneDeep(dataRaw);
    dataPtr[name] = value;
    setDataRaw(dataPtr);
  };
  const handleCreate = async () => {
    let response = await editUser(dataRaw);
    console.log(response.data)
    if (+response.data.data.EC == 200) {
      props.handleClose();
      toast.success("Add user success");
    } else {
      props.handleClose();
      toast.warning("Add user failed");
    }
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="modal-user"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-body row">
            <div className="col-12 col-sm-6 form-group mt-3 ">
              <label>
                Email address(<span className="red">*</span>):
              </label>
              <input
                disabled
                className="form-control bg-secondary"
                type="email"
                value={dataRaw.email}
              ></input>
            </div>
            <div className="col-12 col-sm-6 form-group mt-3">
              <label>
                Phone Number(<span className="red">*</span>):
              </label>
              <input
                disabled
                className="form-control bg-secondary"
                type="text"
                value={dataRaw.phone}
              ></input>
            </div>
            <div className="col-12 col-sm-6 form-group mt-3">
              <label>
                Username(<span className="red">*</span>):
              </label>
              <input
                className="form-control"
                type="text"
                value={dataRaw.username}
                onChange={(e) => handleInput(e.target.value, "username")}
              ></input>
            </div>
            <div className="col-12 col-sm-6 form-group mt-3 ">
              <label>
                Password(<span className="red">*</span>):
              </label>
              <input
                disabled
                className="form-control bg-secondary"
                type="password"
                value="*******************"
              ></input>
            </div>
            <div className="col-12 col-sm-12 form-group mt-3">
              <label>Address:</label>
              <input
                className="form-control"
                type="text"
                value={dataRaw.address}
                onChange={(e) => handleInput(e.target.value, "address")}
              ></input>
            </div>
            <div className="col-12 col-sm-6 form-group mt-3">
              <label>
                Sex(<span className="red">*</span>):
              </label>
              <select
                className="form-select"
                onChange={(e) => handleInput(e.target.value, "sex")}
                value={dataRaw.sex}
              >
                <option defaultValue="Male" value="Male">
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Tiến Việt">Tiến Việt</option>
              </select>
            </div>
            <div className="col-12 col-sm-6 form-group mt-3">
              <label>
                Group(<span className="red">*</span>):
              </label>
              <select
                className="form-select"
                value={dataRaw.groupID}
                onChange={(e) => handleInput(e.target.value, "groupID")}
              >
                {groups.map((item, index) => {
                  return (
                    <option key={`group-${index}`} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export { ModalEdit };
