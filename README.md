# AI Content Generator

> Built by [BuilON](https://builon.com) for [JustXend](https://justxend.com)

Generate ready-to-post content for any platform in seconds — just pick your topic, tone, and platform. No more staring at a blank screen.

---

## Live Demo

| Service | URL |
|---|---|
| Backend API | https://ai-content-gen-b.onrender.com |
| Frontend | https://ai-content-gen-dqa5.onrender.com |

---

## What It Does

- Input a topic, select a platform, tone, and length
- GPT-4o generates polished, platform-ready content instantly
- Supports Twitter/X threads, LinkedIn posts, Instagram captions, YouTube scripts, and Blog articles
- Five tone options: Professional, Casual, Funny, Inspirational, Educational

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, FastAPI |
| AI | OpenAI GPT-4o |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Hosting | Render (backend), Vercel (frontend) |

---

## Project Structure

```
ai-content-gen/
├── backend/
│   ├── main.py              # FastAPI / API routes
│   ├── content_engine.py    # GPT-4o logic
│   ├── prompt_builder.py    # Prompt templates
│   └── config.py            # Environment config
├── frontend/                # Next.js (Tailwind + Lucide)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx   # Global fonts & providers
│   │   │   ├── page.tsx     # Landing Page (Hero, Features, etc.)
│   │   │   ├── studio/      # (Optional) Separate route for the Engine
│   │   │   └── components/
│   │   │       ├── landing/
│   │   │       │   ├── Navbar.tsx         # Top navigation
│   │   │       │   ├── Hero.tsx           # Main CTA section
│   │   │       │   ├── FeatureGrid.tsx    # Why use Atelier AI
│   │   │       │   ├── GeneratorPreview.tsx # Visual card preview
│   │   │       │   ├── StudioEngine.tsx   # THE CORE ENGINE (Main Form)
│   │   │       │   ├── StudioHeader.tsx   # High-contrast Studio UI header
│   │   │       │   ├── Steps.tsx          # "How it works" section
│   │   │       │   └── Footer.tsx         # Bottom navigation & links
│   │   │       └── ui/
│   │   │           └── button.tsx         # Reusable Shadcn components
│   │   ├── lib/
│   │   │   ├── api.ts       # Axios/Fetch logic for Backend calls
│   │   │   └── utils.ts     # Tailwind merge / CN logic
│   │   └── styles/
│   │       └── globals.css  # Custom animations & base styles
│   ├── next.config.js       # Next.js configuration
│   ├── tailwind.config.ts   # Custom Indigo/Slate theme
│   └── tsconfig.json        # TypeScript config
├── render.yaml              # Multi-service deployment config
├── requirements.txt         # Python dependencies
└── README.md                # Project documentation.yaml              # Render deployment config
├── requirements.txt
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/options` | Returns valid platforms and tones |
| POST | `/generate` | Generate content from topic, platform, tone, length |

### Example Request

```json
POST /generate
{
  "topic": "Why consistency beats motivation",
  "platform": "linkedin",
  "tone": "inspirational",
  "length": "medium"
}
```

### Example Response

```json
{
  "content": "Most people wait for motivation...",
  "platform": "linkedin",
  "tone": "inspirational"
}
```

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/PerceptronCipher/ai-content-gen.git
cd ai-content-gen

# Set up backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Run backend (OPENAI_API_KEY must be set in your shell)
cd backend
uvicorn main:app --reload

# Run frontend
cd frontend
npm install
npm run dev
```

---

## Supported Platforms & Tones

**Platforms:** Twitter/X · LinkedIn · Instagram · YouTube · Blog

**Tones:** Professional · Casual · Funny · Inspirational · Educational

---

## License

MIT © 2025 BuilON
