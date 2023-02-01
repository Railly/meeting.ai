import { FC } from "react";

interface ChannelProps {
  name: string;
  pendingMessage: number;
}

export const Channel: FC<ChannelProps> = ({ name, pendingMessage }) => {
  return (
    <div className="mt-4 overflow-y-auto p-1 space-y-1">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold"># {name}</span>
        <span className="bg-gray-300 h-4 rounded-full text-center w-4">
          {pendingMessage}
        </span>
      </div>
    </div>
  );
};
