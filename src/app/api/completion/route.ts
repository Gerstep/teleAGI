import { streamText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();
  
  const result = await streamText({
    model: groq('llama-3.1-8b-instant'),
    prompt,
  });

  return result.toAIStreamResponse();
}