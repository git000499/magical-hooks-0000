import React from "react";
//import imgg from "./avatar-1.webp";
import "./chat.css";
import Dialog from "./dialog";
import Dialogs from "./dialogs";
import Message from "./message";
import Friends from "./friends";
//import i from "./../../../public/avatar-5.webp";

const a = "10";

export const obj = {
  friends: [
    {
      name: "John Doe",
      avatar: "./avatar-8",
      message: "Hello, Are you there?",
      when: "Just now",
      toRespond: 1,
      seen: false,
      active: true,
    },
    {
      name: "Danny Smith",
      message: "Lorem ipsum dolor sit",
      avatar: "./avatar-1",
      when: "5 min ago",
      toRespond: 0,
      seen: false,
      active: false,
    },
    {
      name: "Alex Steward",
      message: "Lorem ipsum dolor sit",
      avatar: "./avatar-2",
      when: "Yesterday",
      toRespond: 0,
      seen: false,
      active: false,
    },
    {
      name: "Ashley Olsen",
      message: "Lorem ipsum dolor sit",
      avatar: "./avatar-3",
      when: "Yesterday",
      toRespond: 0,
      seen: false,
      active: false,
    },
    {
      name: "Kate Moss",
      message: "Lorem ipsum dolor sit",
      avatar: "./avatar-4",
      when: "Yesterday",
      toRespond: 0,
      seen: false,
      active: false,
    },
    {
      name: "Lara Croft",
      message: "Lorem ipsum dolor sit",
      avatar: "./avatar-5",
      when: "Yesterday",
      toRespond: 0,
      seen: false,
      active: false,
    },
    {
      name: "Brad Pitt",
      message: "Lorem ipsum dolor sit",
      avatar: "./avatar-6",
      when: "5 min ago",
      toRespond: 0,
      seen: true,
      active: false,
    },
  ],
  messages: [
    {
      author: "Brad Pitt",
      avatar: "avatar-6.webp",
      when: "12 mins ago",
      message:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore    magna aliqua.",
    },
    {
      author: "Lara Croft",
      avatar: "avatar-5.webp",
      when: "13 mins ago",
      message:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      author: "Brad Pitt",
      avatar: "avatar-6.webp",
      when: "14 mins ago",
      message:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore    magna aliqua.",
    },
  ],
};

export const Chat = () => {
  return (
    <>
      {/* <link
        crossorigin
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
      /> */}
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                Member
              </h5>

              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li
                      className="p-2 border-bottom"
                      style={{ backgroundColor: "#eee" }}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src="./avatar-8.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">John Doe</p>
                            <p className="small text-muted">
                              Hello, Are you there?
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Just now</p>
                          <span className="badge bg-danger float-end">1</span>
                        </div>
                      </a>
                    </li>
                    <Friends />
                    <li className="p-2 border-bottom">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src="./avatar-1.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Danny Smith</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">5 mins ago</p>
                        </div>
                      </a>
                    </li>
                    <li className="p-2 border-bottom">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src="./avatar-2.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Alex Steward</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </a>
                    </li>
                    <li className="p-2 border-bottom">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src="./avatar-3.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Ashley Olsen</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </a>
                    </li>
                    <li className="p-2 border-bottom">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src="./avatar-4.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Kate Moss</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </a>
                    </li>
                    <li className="p-2 border-bottom">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src="./avatar-5.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Lara Croft</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Yesterday</p>
                        </div>
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={obj.friends[6].avatar + ".webp"}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">Brad Pitt</p>
                            <p className="small text-muted">
                              Lorem ipsum dolor sit.
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">5 mins ago</p>
                          <span className="text-muted float-end">
                            <i className="fas fa-check" aria-hidden="true"></i>
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 col-xl-8">
              <ul className="list-unstyled">
                <Message na="my" {...obj.messages[0]} />
                <Message na="you" {...obj.messages[1]} />
                <Message na="my" {...obj.messages[2]} />

                <li className="bg-white mb-3">
                  <div className="form-outline">
                    <textarea
                      className="form-control"
                      id="textAreaExample2"
                      rows="4"
                    ></textarea>
                    <label className="form-label" for="textAreaExample2">
                      Message
                    </label>
                  </div>
                </li>
                <button
                  type="button"
                  className="btn btn-info  float-end btn-rounded"
                >
                  Send
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
