import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "what is ICP?",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"],
  });

  res.status(200).json(response);
}
