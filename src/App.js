import React from "react";

import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import { ENV } from "./constants";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={ENV.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
