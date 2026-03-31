PLATFORM_INSTRUCTIONS = {
    "twitter": "Write a Twitter/X thread. Start with a hook tweet, then 4-6 numbered follow-up tweets. Each tweet must be under 280 characters. End with a call to action.",
    "linkedin": "Write a LinkedIn post. Start with a strong opening line, use short paragraphs, add 3-5 relevant hashtags at the end. Professional but human.",
    "instagram": "Write an Instagram caption. Start with an attention-grabbing first line, tell a short story or insight, end with a question or CTA, add 10-15 relevant hashtags.",
    "youtube": "Write a YouTube video script. Include: Hook (0-30s), Introduction, 3-5 main sections with talking points, and an Outro with subscribe CTA.",
    "blog": "Write a full blog article. Include: Title, Introduction, 4-6 sections with subheadings, Conclusion, and a CTA. Use SEO-friendly language.",
}

TONE_INSTRUCTIONS = {
    "professional": "Use a polished, authoritative, and confident tone.",
    "casual": "Use a relaxed, conversational, and friendly tone. Write like you're talking to a friend.",
    "funny": "Use humor, wit, and light sarcasm where appropriate. Keep it entertaining.",
    "inspirational": "Use motivational and uplifting language. Make the reader feel empowered.",
    "educational": "Use a clear, informative tone. Break down complex ideas simply.",
}


def build_prompt(topic: str, platform: str, tone: str, length: str) -> str:
    platform_guide = PLATFORM_INSTRUCTIONS.get(platform, "Write a social media post.")
    tone_guide = TONE_INSTRUCTIONS.get(tone, "Use a neutral tone.")

    return f"""You are an expert content creator.

Platform: {platform.upper()}
Tone: {tone.upper()}
Length: {length}
Topic: {topic}

Instructions:
- {platform_guide}
- {tone_guide}
- Length preference: {length}
- Do not add any meta-commentary or explanations. Output only the content itself.

Generate the content now:"""