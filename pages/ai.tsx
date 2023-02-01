import { useState } from "react";
import { generateMeetingAgenda, generateMeetingMessages } from "../services/ai";

export default function AIPage() {
  const [disabled, setDisabled] = useState(false);
  const handleGenerateMeetingTopics = async () => {
    try {
      setDisabled(true);
      const meetingTopics = await generateMeetingAgenda();
      console.log(meetingTopics);
    } catch (error) {
      console.log(error);
    } finally {
      setDisabled(false);
    }
  };

  const handleGenerateInitialMeetingMessages = async () => {
    try {
      setDisabled(true);
      const initialMeetingMessages = await generateMeetingMessages({
        meetingDate: "2021-09-01",
        meetingTime: "10:00",
        meetingType: "Standup",
        numberOfPeople: 5,
      });
      console.log(initialMeetingMessages);
    } catch (error) {
      console.log(error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      <main className="grid min-h-screen place-items-center">
        <button
          className="p-3 mt-3 text-white bg-blue-500 rounded-md disabled:opacity-50"
          disabled={disabled}
          onClick={handleGenerateMeetingTopics}
        >
          Generate Meeting Topics
        </button>
        <button
          className="p-3 mt-3 text-white bg-green-500 rounded-md disabled:opacity-50"
          disabled={disabled}
          onClick={handleGenerateInitialMeetingMessages}
        >
          Generate Initial Meeting Messages
        </button>
      </main>
    </>
  );
}
