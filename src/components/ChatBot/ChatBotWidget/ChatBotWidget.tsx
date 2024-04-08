import React, { useState } from "react";
import "./ChatBotWidget.scss";
import ModalWindow from "../ModalWindow/ModalWindow";
import { ChatBubbleSharp } from "@mui/icons-material";

const ChatBotWidget: React.FC = () => {
  const [hovered, sethovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(modalVisible);

  return (
    <div
      className="chatWidget"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ModalWindow visible={modalVisible} />
      {/* Chat Button component */}
      <div
        className="chatWidgetContent"
        onClick={() => {
          setModalVisible(!modalVisible);
        }}
        onMouseEnter={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
        style={{
          border: hovered ? "1px solid #f4f4f4" : "",
          borderRadius: "10px",
        }}
      >
        <ChatBubbleSharp />
        <p>Chat Now !</p>
      </div>
      {/* Inner Container */}
      {/* Call modal Window */}

      {/* Button Text */}
    </div>
  );
};

export default ChatBotWidget;
