from openai import OpenAI
from config import OPENAI_API_KEY, CHAT_MODEL
from prompt_builder import build_prompt

client = OpenAI(api_key=OPENAI_API_KEY)


def generate(topic: str, platform: str, tone: str, length: str) -> str:
    prompt = build_prompt(topic, platform, tone, length)

    response = client.chat.completions.create(
        model=CHAT_MODEL,
        messages=[{"role": "user", "content": prompt}],
        temperature=0.8,
    )

    return response.choices[0].message.content