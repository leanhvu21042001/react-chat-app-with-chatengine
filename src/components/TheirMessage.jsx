import React from "react";

const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessagesByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessagesByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-image"
          style={{ marginLeft: isFirstMessagesByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#cabcdc",
            marginLeft: isFirstMessagesByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
