const COHERE_API_KEY = process.env.NEXT_PUBLIC_COHERE_API_KEY;
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";

export async function fixMyEnglish(input: string) {
  const data = {
    model: "xlarge",
    prompt: `This is a spell checker generator.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old."
--
Incorrect sample: "I don't can know"
Correct sample: "I don't know"
--
Incorrect sample: "${input}"
Correct sample:`,
    max_tokens: 40,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];
  return text.replace("--", "").replaceAll('"', "").trim();
}

export async function generateMeetingAgenda() {
  const data = {
    model: "xlarge",
    prompt: `This is a meeting topic generator. It will generate a topics of daily-based software development meetings.
--
Sample: "Daily standup meeting"
Sample: "Sprint planning meeting"
Sample: "Sprint retrospective meeting"
Sample: "Sprint review meeting"
Sample:`,
    num_generations: 4,
    max_tokens: 30,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];
  return text.replace("--", "").replaceAll('"', "").trim();
}

export const generateMeetingMessages = async ({
  meetingType,
  meetingTime,
  meetingDate,
  numberOfPeople = 5,
}: {
  meetingType: string;
  meetingTime: string;
  meetingDate: string;
  numberOfPeople?: number;
}) => {
  // this will be used to generate chat messages for a daily meeting with at least 5 attendees
  const data = {
    model: "xlarge",
    prompt: `This is a meeting simulator in software development industry. Name of attendees will be generated randomly and after each name will follow a colon. GENERATE:`,
    num_generations: 1,
    max_tokens: 2000,
    temperature: 0.7,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: "NONE",
  };

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const { text } = response.generations[0];
  return text.replace("--", "").replaceAll('"', "").trim();
};
