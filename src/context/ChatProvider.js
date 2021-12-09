import React from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = React.createContext();

const ChatProvider = (props) => {
  const dataUsuario = {
    uid: null,
    email: null,
    estado: null,
  };
  const [user, setUser] = React.useState(dataUsuario);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    detectarUsuario();
  }, []);

  const detectarUsuario = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          estado: true,
        });
        loadMessages();
      } else {
        setUser({
          uid: null,
          email: null,
          estado: false,
        });
      }
    });
  };

  const loginUser = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };

  const logout = async () => {
    auth.signOut();

    setUser({
      uid: null,
      email: null,
      estado: false,
    });
  };

  const loadMessages = () => {
    db.collection("chat")
      .orderBy("fecha")
      .onSnapshot((query) => {
        // con el snapshot hacemos que los cambios se actualizen en tiempo real
        const messagesArray = query.docs.map((item) => item.data());
        setMessages(messagesArray);
      });
  };

  const sendMessage = async (uidChat, text) => {
    try {
      await db.collection("chat").add({
        fecha: Date.now(),
        texto: text,
        uid: uidChat,
      });
    } catch (error) {
      console.error("Error al mandar un mensaje:", error);
    }
  };

  return (
    <ChatContext.Provider
      value={{ user, loginUser, logout, messages, sendMessage }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
