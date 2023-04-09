import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

const topic = "JavaScript";
const question = "How to send an openai api request";

const GPT4Message = [
  { role: "system", content: "You are a helpful assistant." },
  { role: "user", content: "Who won the world series in 2020?" },
  { role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020." },
  { role: "user", content: "Where was it played?" }
];


let GPT4 = async (message) => {
  const response = await openai.createChatCompletion({
    // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
    model: "gpt-4",
    messages: message,
  });

  return response.data.choices[0].message.content;
};

console.log("### I'm GPT-4. ####", await GPT4(GPT4Message));