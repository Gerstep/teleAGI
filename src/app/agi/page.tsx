'use client'

import { Link } from "@telegram-apps/telegram-ui";
import { openai } from '@ai-sdk/openai';
import { generateText, streamText } from 'ai';
import { useCompletion } from 'ai/react';


export default function AGI() {
  const { completion, complete } = useCompletion({
    api: '/api/completion',
  });
  
  return (
    <div>
      <div>
        <div
          onClick={async () => {
            await complete('Why is the sky blue?');
          }}
        >
          Generate
        </div>
        {completion}
      </div>
      <Link href='/'>
        Back
      </Link>
    </div>
  );
}