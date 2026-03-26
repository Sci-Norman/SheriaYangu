# 🤖 AI Constitutional Q&A Integration Guide

## Overview
The Sheria Yangu app now includes an AI-powered query handler that uses Google's Gemini API to answer constitutional questions in natural language.

## Feature
- **Menu Option 5**: 🤖 Ask AI Constitutional Question
- Users can ask any question about the Kenya Constitution (e.g., "Can my landlord evict me?")
- AI responds with a concise answer citing relevant articles
- Responses are sent via SMS with full article references

## Setup Instructions

### 1. Get a Gemini API Key
1. Visit [Google AI Studio](https://ai.google.dev)
2. Click "Get API Key"
3. Create a new API key for your project
4. Copy the key to your clipboard

### 2. Configure Environment
1. Open `.env` in the project root:
   ```bash
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```
2. Replace `your_gemini_api_key_here` with your actual API key
3. Save the file

### 3. Test Locally
```bash
npm install  # Already done if updating from existing setup
npm start
```

Test with curl:
```bash
curl -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "test123",
    "serviceCode": "*384*700",
    "phoneNumber": "+254700000001",
    "text": "5*Can my landlord evict me without court?"
  }'
```

### 4. Deploy to Production
1. Update `.env` on Render dashboard with GOOGLE_API_KEY
2. Restart the app
3. Verify with:
   ```bash
   curl https://sheriayangu.onrender.com/ussd -X POST ...
   ```

## Usage Examples

### Example 1: Eviction Rights
**User Input:** `5*Can my landlord evict me?`
**AI Response:**
```
🤖 AI RESPONSE

NO. Article 40 protects your right to property. 
Your landlord must follow legal procedures through court. 
See Land Act 2012 for eviction procedures.

📚 Relevant: Art.40, Art.27
```

### Example 2: Education Rights
**User Input:** `5*Do I have right to free education?`
**AI Response:**
```
🤖 AI RESPONSE

YES. Article 43 guarantees the right to education.
The state shall provide free primary education.
Article 53 extends special protections to children's education.

📚 Relevant: Art.43, Art.53
```

### Example 3: Voting Rights
**User Input:** `5*Can I vote if I'm 18?`
**AI Response:**
```
🤖 AI RESPONSE

YES. Article 38 guarantees voting rights to all citizens
aged 18 and above who are registered on the voters' roll.
Election laws are governed by IEBC Act.

📚 Relevant: Art.38, Art.37
```

## How It Works

1. **User Question** → Sent to USSD handler as menu option 5
2. **Keyword Search** → Articles.js searches for relevant constitutional articles
3. **Context Building** → Top 3 articles are used as context
4. **Gemini Processing** → Question + context sent to Gemini API
5. **Response Generation** → AI generates concise answer with article references
6. **Result Delivery** → Response sent to user via USSD END screen
7. **Logging** → Query logged in `search_logs` table for analytics

## API Model Used

- **Model**: `gemini-1.5-flash` (fast, cost-effective)
- **System Prompt**: Constitutional law assistant role
- **Context**: Top 3 matching articles from search
- **Max Response Length**: 150 characters (USSD constraint)

## Error Handling

If GOOGLE_API_KEY is not set or Gemini API fails:
```
⚙️ AI unavailable. Try searching directly for keywords.
```

Users can fall back to direct search (option 1) if AI service is down.

## Cost Considerations

- Gemini API is free tier: 60 requests/minute
- Production usage may incur charges
- Monitor usage in Google Cloud Console
- Set up billing alerts to avoid surprises

## Next Steps

1. ✅ Set GOOGLE_API_KEY in .env
2. ✅ Deploy to Render
3. ✅ Test with user questions
4. ✅ Monitor response quality and latency
5. Consider: Multilingual responses (Kiswahili)
6. Consider: Article SMS follow-up option

## Troubleshooting

**"AI unavailable" error:**
- Check if GOOGLE_API_KEY is set in .env
- Verify API key is valid in Google Cloud Console
- Check Render logs for API errors

**Slow responses:**
- Gemini API may be rate-limited
- Consider caching frequent queries
- Check network latency

**Irrelevant answers:**
- Add more specific search keywords to menus
- Train on more constitutional examples
- Consider fine-tuning the system prompt

## Contact & Support
Built for Africa's Talking Political Solutions Hackathon 2026
