import { ChatContent } from "../ChatContent";

export const ChatSection = () => {
  return (
    <section className="flex flex-col h-screen p-6 w-2/3">
      <div className="flex items-center">
        <h2 className="font-bold text-2xl ">Chat Title</h2>
        <span className="bg-gray-300 h-6 ml-3 rounded-full text-center w-6">
          3
        </span>
      </div>
      <hr className="border-gray-300 border-opacity-50 border-t-2 my-4" />
      <ChatContent />
    </section>
  );
};
