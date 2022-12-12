import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function q(prompt: string) {
  const result = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is ICP?",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"],
  });

  return result;
}

export default function Home() {
  useEffect(() => {
    q("waht is ICP").then(console.log);
  }, []);
  return <div></div>;
}
