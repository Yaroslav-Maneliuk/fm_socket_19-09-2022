import React, { useEffect } from "react";
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
  useEffect(() => {
    getMessagesRequest();
  }, []);
  return (
    <section>
      {isFetching && <h2>Loading...</h2>}
      {error && <h2>Error!!! {JSON.stringify(error)}</h2>}
      <ul>
        {messages.length > 0 &&
          messages.map((msg) => (
            <li key={msg.id}>
              {msg.content} from {msg.user}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ListMessages;
