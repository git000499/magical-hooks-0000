import React from "react";
import imgg from "./avatar-1.webp";
import "./chat.css";
import Dialog from "./dialog"
import Dialogs from "./dialogs"


const Chat = () => {

 let obj = {
  friends: [
    {
    name: "John Doe",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-8",
    message: "Hello, Are you there?",
    when: "Just now",
    toRespond: 1,
    seen: false,
    active: true
    },
    {
    name: "Danny Smith",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1",
    when: "5 min ago",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Alex Steward",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Ashley Olsen",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Kate Moss",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Lara Croft",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Brad Pitt",
    message: "Lorem ipsum dolor sit",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
    when: "5 min ago",
    toRespond: 0,
    seen: true,
    active: false
    }
    ],
    messages: [
    {
    author: "Brad Pitt",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
    when: "12 mins ago",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore    magna aliqua."
    },
    {
    author: "Lara Croft",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
    when: "13 mins ago",
    message: " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
    author: "Brad Pitt",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
    when: "14 mins ago",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore    magna aliqua."
    }
    ]
    };

  return (
    <>
      <link
        crossorigin
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            
              <Dialogs />
            <div className="col-md-6 col-lg-7 col-xl-8">
              <Dialog />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
