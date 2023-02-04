import { FC } from "react";

interface MessageProps {
  message: string;
  messageAuthor: string;
  messageType: "incoming" | "outgoing";
  messageTime: string;
}

export const Message: FC<MessageProps> = ({
  message,
  messageType,
  messageAuthor,
  messageTime,
}) => {
  return (
    <div
      className={`col-start-${messageType === "outgoing" ? 6 : 1} col-end-${
        messageType === "outgoing" ? 13 : 8
      } p-3 rounded-lg`}
    >
      <div className="flex flex-col">
        <div
          className={`flex ${
            messageType === "outgoing" && "flex-row-reverse"
          } items-end `}
        >
          <img
            className="flex items-center justify-center h-8 w-8 rounded-full"
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            alt="Bot"
          />
          <div className={`${messageType === "outgoing" ? "mr-3" : "ml-3"}`}>
            <p className="mb-1 text-gray-500 text-xs">
              <>
                <span className="font-semibold text-gray-900">
                  {messageAuthor}
                </span>
                , {messageTime}
              </>
            </p>
            <div
              className={`bg-${
                messageType === "outgoing" ? "indigo-100" : "white"
              } px-4 py-2 rounded-xl shadow text-sm
                break-words max-w-xs`}
            >
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
