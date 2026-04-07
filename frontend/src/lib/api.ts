//src/lib/api.ts
const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://44.222.98.52:8002'

export interface GenerateRequest {
  topic: string
  platform: 'twitter' | 'linkedin' | 'instagram' | 'youtube' | 'blog'
  tone: 'professional' | 'casual' | 'funny' | 'inspirational' | 'educational'
  length: 'short' | 'medium' | 'long'
}

export const api = {
  // Get available platforms and tones
  async getOptions() {
    const res = await fetch(`${BACKEND_URL}/options`)
    if (!res.ok) throw new Error('Failed to fetch options')
    return res.json()
  },

  // Generate the actual content
  async generateContent(data: GenerateRequest) {
    const res = await fetch(`${BACKEND_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const result = await res.json()
    if (!res.ok) throw new Error(result.detail || 'Generation failed')
    return result // This returns the generated string
  },
}
