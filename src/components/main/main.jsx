import React from "react";
import { useActionData } from "react-router-dom";
//import { useState } from "react/cjs/react.production.min";
import react, { useState } from "react";
import css from "./main.css";

const friendList = [
  { id: 1, name: "Татьяна" },
  { id: 2, name: "Алла" },
  { id: 3, name: "Лиля" },
];

const ChatRecipientPicker = () => {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
      <li style={{ color: isOnline ? "green" : "black" }}>
        {props.friend.name}
      </li>
    );
  }

  return (
    <>
      <Circle color={isRecipientOnline ? "green" : "red"} />
      <select
        value={recipientID}
        onChange={(e) => setRecipientID(Number(e.target.value))}
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
};

const Main = () => {
  const [count, setCount] = useState([1, 2, 3]);
  //let numbers = [1, 2, 3];

  const addNumber = () => {
    setCount([...count, count.length + 1]);
    //numbers.push(setCount(count + 1));
  };

  return (
    <>
      <h1> Main </h1>
      <ul>
        {count.map((num, index) => (
          <li key={index} id={"li" + index}>
            {num}
          </li>
        ))}
      </ul>
      <button onClick={addNumber}>кнопка</button>
      <ChatRecipientPicker />
    </>
  );
};
export default Main;
