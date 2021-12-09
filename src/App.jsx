import React from "react";
import Navbar from "./components/Navbar";
import { ChatContext } from "./context/ChatProvider";

function App() {
  const { user } = React.useContext(ChatContext);

  return user !== null ? (
    <div>
      <Navbar />
      Chat
    </div>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
