import { FC } from "react";
import { Message } from "../Message";
import { TextBar } from "../TextBar";

interface ChatContentProps {}

export const ChatContent: FC<ChatContentProps> = () => {
  return (
    <>
      <div
        className="h-screen 
        overflow-y-auto"
      >
        <Message
          message="Hi"
          messageAuthor="Lolo Fernandez"
          messageTime={new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          messageType="incoming"
        />
        <Message
          message="La U es la U"
          messageAuthor="Javier Cabrera"
          messageTime={new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          messageType="outgoing"
        />
      </div>
      <TextBar />
    </>
  );
};
