import React, { useState,useContext } from "react"
import { useLocalStorage } from "./../../hook/hook"
import ChatBlock from "./chat-block"
import Comment from "./comment"
import {UserContext} from "../../context/user";
const Chat = () => {
  const [chatData, setChatData] = useLocalStorage("CHAT", []);
  const [inputValue, setInputValue] = useState("");
	const { user } = useContext(UserContext); 

  const changeChat = () => {
    if (inputValue !== '') {
        setChatData([...chatData, `${user.name ? user.name : "Аноним"}: ${inputValue}`]);
        setInputValue("");
    } else {
      alert('Ошибка отправки, заполните поле ввода')
    }
  };

  const deleteMsg = (index) => {
      const newData = [...chatData];
      newData.splice(index, 1);
      setChatData(newData);
  }
  const deleteHistory = () => {
      setChatData([])
  }
  return (
    <div>
      <ChatBlock chatData={chatData} deleteMsg={deleteMsg} />
      <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeChat={changeChat}
        deleteHistory={deleteHistory}
      />
    </div>
  );
};

export default Chat;
