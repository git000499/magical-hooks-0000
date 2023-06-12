import React from "react";
import { obj } from "./chat.jsx";

const Friends = () => {
  const Friends_item = () => {
    const Friends_list = obj.friends.map((item) => (
      <li className="p-2 border-bottom">
        <a href="#!" className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <img
              src={item.avatar + ".webp"} //"./avatar-1.webp"
              alt="avatar"
              className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
              width="60"
            />
            <div className="pt-1">
              <p className="fw-bold mb-0">{item.name}</p>
              <p className="small text-muted">{item.message}</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">{item.when}</p>
          </div>
        </a>
      </li>
    ));
    return Friends_list;
  };

  return <Friends_item />;
};

export default Friends;
