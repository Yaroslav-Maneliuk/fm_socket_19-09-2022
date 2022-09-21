import React, { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ChatActionCreators from "../../actions/chatActionCreators";

const ListMessages = () => {
  const { isFetching, error, messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { getMessagesRequest } = bindActionCreators(
    ChatActionCreators,
    dispatch
  );
  // const messagesReverse = messages.reverse();
  useEffect(() => {
    getMessagesRequest();
  }, []);
  useLayoutEffect(()=>{
    window.scrollTo({
      top:document.body.scrollHeight,
      behavior:'smooth'
    })
  }, [messages])
  return (
    <section>
      {isFetching && <h2>Loading...</h2>}
      {error && <p>Error!!! {JSON.stringify(error)}</p>}
      <ul>
        {messages.length > 0 &&
          messages.map((msg) => (
            <li key={msg._id}>
              {msg.content} from {msg.login}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ListMessages;
