from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from content_engine import generate
from config import PLATFORMS, TONES

app = FastAPI(title="AI Content Generator")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContentRequest(BaseModel):
    topic: str
    platform: str
    tone: str
    length: str = "medium"


@app.get("/options")
def get_options():
    return {"platforms": PLATFORMS, "tones": TONES}


@app.post("/generate")
def generate_content(req: ContentRequest):
    if req.platform not in PLATFORMS:
        raise HTTPException(status_code=400, detail=f"Platform must be one of {PLATFORMS}")
    if req.tone not in TONES:
        raise HTTPException(status_code=400, detail=f"Tone must be one of {TONES}")

    content = generate(req.topic, req.platform, req.tone, req.length)
    return {"content": content, "platform": req.platform, "tone": req.tone}