import React from "react";

import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = React.useState("");

  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.length === 0) return;
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        placeholder="Send a message"
        className="message-input"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span classname="icon-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>

      <input
        type="file"
        multiple="false"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
