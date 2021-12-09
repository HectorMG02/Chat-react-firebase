import React from "react";
import { ChatContext } from "../context/ChatProvider";

const FormMensajes = () => {
  const { user, sendMessage } = React.useContext(ChatContext);
  const [message, setMessage] = React.useState("");

  const sendMessageSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    sendMessage(user.uid, message);
    setMessage("");
  };

  return (
    <form
      className="fixed-bottom input-group bg-dark p-3"
      onSubmit={sendMessageSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Escribe un mensaje aquí"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="input-group-append">
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};

export default FormMensajes;
