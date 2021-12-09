import React from "react";
import FormMensajes from "./FormMensajes";
import { ChatContext } from "../context/ChatProvider";

const Chat = () => {
  const { user, messages } = React.useContext(ChatContext);
  const refZonaChat = React.useRef(null);

  React.useEffect(() => {
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
  }, [messages]); // cada vez que cambie messages, ejecutamos esto

  return (
    <div
      className="mt-3 px-2"
      style={{
        height: "80vh",
        overflowY: "auto",
      }}
      ref={refZonaChat} //ref para poder acceder al div, es como si le ponemos un id o una class
    >
      {messages.map((m, i) =>
        user.uid === m.uid ? (
          <div className="d-flex justify-content-end mb-2">
            <h4>
              <span className="badge badge-pill pl-3 py-3 badge-primary">
                {m.texto}
              </span>
            </h4>
          </div>
        ) : (
          <div className="d-flex justify-content-start mb-2">
            <h4>
              <span className="badge pr-3 py-3 badge-pill badge-secondary">
                {m.texto}
              </span>
            </h4>
          </div>
        )
      )}

      <FormMensajes />
    </div>
  );
};

export default Chat;
