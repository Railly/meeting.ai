import { CHANNELS } from "../../__mocks__";
import { Channel } from "../Channel";

export const ChannelSection = () => {
  return (
    <section className="bg-white hidden sm:flex sm:flex-col sm:h-screen sm:py-6 sm:pl-6 sm:pr-2 sm:w-1/3">
      <h1 className="font-bold text-2xl">Meet.ia</h1>
      <hr className="border-gray-300 border-opacity-50 border-t-2 my-4" />
      <div className="flex flex-col">
        {CHANNELS.map(({ id, name, pendingMessage }) => (
          <Channel key={id} name={name} pendingMessage={pendingMessage} />
        ))}
      </div>
    </section>
  );
};
