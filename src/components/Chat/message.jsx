import React from "react";
import css from "./chat.css";

const Message = (props) => {

 const Message_my=()=>{
  return(<li className="d-flex justify-content-between mb-4">
  <div className="card w-100">
    <div className="card-header d-flex justify-content-between p-3">
      <p className="fw-bold mb-0">{props.author}</p>
      <p className="text-muted small mb-0">
        <i className="far fa-clock"></i>{props.when}
      </p>
    </div>
    <div className="card-body">
      <p className="mb-0">{props.message}
      </p>
    </div>
  </div>
  <img
    src={`${process.env.PUBLIC_URL}/${props.avatar}`}
    alt="avatar"
    className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
    width="60"
  />
</li>)
 };
 ////////////////////////// {`${process.env.PUBLIC_URL}/assets/images/uc-white.png`}
const Message_you=()=>{
  return(
 <li className="d-flex justify-content-between mb-4">
      <img
        src={`${process.env.PUBLIC_URL}/${props.avatar}`}
        alt="avatar"
        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
        width="60"
      />
      <div className="card">
        <div className="card-header d-flex justify-content-between p-3">
          <p className="fw-bold mb-0">{props.author}</p>
          <p className="text-muted small mb-0">
            <i className="far fa-clock"></i> {props.when}
          </p>
        </div>
        <div className="card-body">
          <p className="mb-0">{props.message}
          </p>
        </div>
      </div>
    </li>)
};
 if(props.na=="you") {return (
   <> <Message_you/></>
  )} else if(props.na=="my") {
    return(<><Message_my/></>)
  }

};

export default Message; 
