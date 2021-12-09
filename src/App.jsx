import React from "react";
import Navbar from "./components/Navbar";
import { ChatContext } from "./context/ChatProvider";
import Chat from "./components/Chat";

function App() {
  const { user } = React.useContext(ChatContext);

  return user !== null ? (
    <div>
      <Navbar />
      {user.estado ? (
        <Chat />
      ) : (
        <div className="lead text-center mt-5">
          Inicia sesión para poder continuar
        </div>
      )}
    </div>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
