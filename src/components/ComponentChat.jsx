import { useEffect, useRef, useState } from "react";
import React from "react";
import Message from "./Message";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import SendMessage from "./SendMessage";
const style = {
  main: `flex flex-col p-[10px] relative`,
};

const ComponentChat = () => {
  const scroll = useRef();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <main className={style.main}>
        {/* chat message component */}

        {messages &&
          messages.map((message) => {
            console.log(message);
            return (
              <Message key={message.id} message={message} scroll={scroll} />
            );
          })}
      </main>
      {/* send message component   */}
      <SendMessage />
      <span ref={scroll}></span>
    </>
  );
};

export default ComponentChat;
