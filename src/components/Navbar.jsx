import React from "react";
import { ChatContext } from "../context/ChatProvider";

const Navbar = () => {
  const { user, loginUser, logout } = React.useContext(ChatContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Chat</span>
      <div>
        {user.estado ? (
          <button
            className="btn btn-outline-danger my-2"
            onClick={() => logout()}
          >
            Cerrar Sesión
          </button>
        ) : (
          <button
            className="btn btn-outline-primary my-2 mx-2"
            onClick={() => loginUser()}
          >
            Acceder
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
