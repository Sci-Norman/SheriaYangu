# ⚠️ API Key Issue - How to Fix

## The Problem

The error `"⚙️ Unable to process query. Try searching directly."` occurs because:

1. **Your GOOGLE_API_KEY is invalid or expired**
   - Current key: `AIzaSyDoT9LWcb_vEZD4VXQT9jXlZNbKSyIJVuw`
   - This key doesn't work with Gemini API (tested just now)

2. **Possible causes:**
   - The key was a placeholder and was never properly configured
   - The key has expired
   - The key doesn't have proper API access permissions

## How to Fix (5 minutes)

### Step 1: Get a Fresh Gemini API Key

1. Go to: **https://ai.google.dev/aistudio**
2. Click **"Get API Key"** (top right button)
3. Click **"Create API key in new project"** (or select existing project)
4. **Copy** the full API key (starts with `AIza...`)

### Step 2: Update `.env` File

Edit `/home/norman/GIT PROJECTS/SheriaYangu/.env`:

```env
# AI - Gemini API
GOOGLE_API_KEY=YOUR_NEW_KEY_HERE
```

Replace `YOUR_NEW_KEY_HERE` with the key from Step 1.

### Step 3: Restart the Server

```bash
npm start
```

### Step 4: Test the AI Feature

Use this curl command to test:

```bash
curl -X POST http://localhost:3000/ussd \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId":"test123",
    "serviceCode":"*384*700",
    "phoneNumber":"+254700000001",
    "text":"5*Can my landlord evict me?"
  }'
```

**Expected response:**
```
🤖 AI RESPONSE

NO. Article 40 protects your right to property.
Your landlord must follow legal procedures through court.

📚 Relevant: Art.40, Art.27
```

## Verification Steps

After getting your new key, you can verify it works:

```bash
# Test script I created for you
GOOGLE_API_KEY="YOUR_NEW_KEY" node test-gemini-pro.js
```

You should see:
```
✅ SUCCESS! Gemini API is working!
Response: [AI response here]
```

## What Changed in the Code

I've made these improvements to help with diagnostics:

1. **Better error logging** - Now logs full error stack in console
2. **Model compatibility** - Changed from `gemini-1.5-flash` to `gemini-pro` (more widely available)
3. **Client initialization** - Better error handling when creating Gemini client
4. **Console messages** - Added debug logging to track API calls

## Troubleshooting

### Still getting "Unable to process query"?

1. **Check if key is loaded:**
   ```bash
   echo $GOOGLE_API_KEY
   ```
   Should show your key, not empty

2. **Check the server logs:**
   ```
   npm start
   ```
   Look for `[AI Query Error]` messages

3. **Verify the key format:**
   - Must start with `AIza...`
   - Must be the full key from Google AI Studio
   - No spaces or extra characters

4. **Check API enablement:**
   - Go to: https://console.cloud.google.com/apis
   - Search for "Generative Language API"
   - Make sure it's enabled for your project

### API quota exceeded?

- Free tier: 60 requests/minute
- If you get rate limit errors, wait a minute and try again
- Monitor usage at: https://console.cloud.google.com

## Quick Command Reference

```bash
# See your current key (first 10 chars)
grep GOOGLE_API_KEY .env

# Test if key is valid
GOOGLE_API_KEY="your_key_here" node test-gemini-pro.js

# Check AI feature in running app
npm start
# Then curl the test above
```

## Support

If still having issues:

1. **Test key directly:** Use `test-gemini-pro.js` to verify API key validity
2. **Check logs:** `npm start` shows detailed error messages
3. **Get new key:** https://ai.google.dev/aistudio
4. **Google Cloud Console:** https://console.cloud.google.com/apis

---

**TL;DR:** Your API key is invalid. Get a fresh one from https://ai.google.dev/aistudio and update .env
