import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import {getGroups} from "../../services/UsersService"
import _ from "lodash"
//import scss file
import "./User.scss"
import { set } from "lodash";
const ModalCreate = (props) => {
    const [groups,setGroups] = useState([]);
    let dataDefault = {
        userName : "",
        email:"",
        password:"",
        phone:"",
        sex:"",
        group:"",
        address:""
    }
    const [dataRaw,setDataRaw] = useState(dataDefault);
    useEffect(async()=>{
        let response = await getGroups();
        if(+response?.data?.EC==200){
            setGroups(response?.data?.DT);
        }
        
    },[])
    useEffect(()=>{
        console.log(dataRaw)
    },[dataRaw])
    const handleInput=(value,name)=>{
        let dataPtr = _.cloneDeep(dataRaw);
        console.log("success")
        dataPtr[name] = value;
        setDataRaw(dataPtr)
    }
    const handleCreate = () =>{
        console.log(dataRaw)
    }
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} className="modal-user">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="content-body row">
                <div className="col-12 col-sm-6 form-group mt-3">
                        <label>Email address(<span className="red">*</span>):</label>
                        <input className="form-control" type="email" value={dataRaw.email}
                        onChange={(e)=>handleInput(e.target.value,"email")}
                        ></input>
                        
                </div>
                <div className="col-12 col-sm-6 form-group mt-3">
                        <label>Phone Number(<span className="red">*</span>):</label>
                        <input className="form-control" type="text" value={dataRaw.phone}
                        onChange={(e)=>handleInput(e.target.value,"phone")}
                        ></input>
                        
                </div>
                <div className="col-12 col-sm-6 form-group mt-3">
                        <label>Username(<span className="red">*</span>):</label>
                        <input className="form-control" type="text" value={dataRaw.userName}
                        onChange={(e)=>handleInput(e.target.value,"userName")}
                        ></input>
                        
                </div>
                <div className="col-12 col-sm-6 form-group mt-3">
                        <label>Password(<span className="red">*</span>):</label>
                        <input className="form-control" type="password" value={dataRaw.password}
                        onChange={(e)=>handleInput(e.target.value,"password")}
                        ></input>
                        
                </div>
                <div className="col-12 col-sm-12 form-group mt-3">
                        <label>Address:</label>
                        <input className="form-control" type="text" value={dataRaw.address}
                        onChange={(e)=>handleInput(e.target.value,"address")}
                        ></input>
                        
                </div>
                <div className="col-12 col-sm-6 form-group mt-3">
                        <label>Sex(<span className="red">*</span>):</label>
                        <select className="form-select"
                        onChange={(e)=>handleInput(e.target.value,"sex")}
                        >
                            <option defaultValue="Male" value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Tiến Việt">Tiến Việt</option>
                        </select>
                </div>
                <div className="col-12 col-sm-6 form-group mt-3">
                        <label>Group(<span className="red">*</span>):</label>
                        <select className="form-select"
                        onChange={(e)=>handleInput(e.target.value,"group")}
                        >
                            {groups.map((item,index)=>{
                                return <option key={`group-${index}`} value={item.id}>{item.name}</option>
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
export { ModalCreate };
