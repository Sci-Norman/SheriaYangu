# 🚀 Quick Start: AI Feature Activation

## ⏱️ You have 3 steps (5 minutes total)

### STEP 1️⃣: Get Your Gemini API Key
**Go to:** https://ai.google.dev/aistudio
1. Click "Get API Key" (top right)
2. Click "Create API key in new project"
3. **Copy the key** (blue button)
4. ✅ Done!

**Your key looks like:** `AIzaSyD...` (long string starting with AIza)

---

### STEP 2️⃣: Add Key to Render Environment

**Go to:** https://dashboard.render.com

1. Click on your **"sheria-yangu"** service
2. Go to **"Environment"** tab
3. Click **"Add Environment Variable"**
4. Fill in:
   - **Name:** `GOOGLE_API_KEY`
   - **Value:** [Paste your key from Step 1]
5. Click **"Save"**
6. 🔄 App auto-restarts (takes 30-60 seconds)

✅ **Done!** Your app is now AI-powered!

---

### STEP 3️⃣: Test It Works

**Copy-paste this command in your terminal:**

```bash
curl -X POST https://sheriayangu.onrender.com/ussd \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"test123","serviceCode":"*384*700","phoneNumber":"+254700000001","text":"5*Can my landlord evict me without court?"}'
```

**Expected result:**
```
END 🤖 AI RESPONSE

NO. Article 40 protects your property rights. Your landlord must follow legal procedures through court...

📚 Relevant: Art.40, Art.27
```

✅ **If you see this, your AI is working!**

---

## 🎯 What Changed

| Item | What's New |
|------|-----------|
| **Menu Option 5** | Now "🤖 Ask AI" (was "Hotline") |
| **Capability** | Users ask ANY question about the Constitution |
| **AI Engine** | Google Gemini API (fastest, most accurate) |
| **Response Time** | 1-3 seconds per query |
| **Cost** | Free tier: 60 queries/minute (plenty for hackathon) |

---

## 🎓 User Experience

**Before:**
```
Main Menu
1. 🔍 Search     ← Type keywords only ("health", "land", etc.)
2. 📖 Browse
3. ⚖️ Know Your Rights
4. 🧠 Quiz
5. 📞 Hotline (disabled)
6. ⚙️ Settings
```

**After:**
```
Main Menu
1. 🔍 Search           ← Keyword search
2. 📖 Browse           ← Browse chapters
3. ⚖️ Know Your Rights ← Quick links
4. 🧠 Quiz             ← Test knowledge
5. 🤖 Ask AI           ← ✨ NEW! Natural language Q&A
6. ⚙️ Settings         ← Language, stats
```

### Example Queries Users Can Ask:

```
"Can my landlord evict me?"
✅ Response: "NO. Article 40 protects your right to property..."

"Do I have right to free education?"
✅ Response: "YES. Article 43 guarantees..."

"Can police arrest me without warrant?"
✅ Response: "NO. Article 33 protects from..."

"What are my voting rights?"
✅ Response: "Article 38 guarantees right to vote at age 18..."

"Can the government censor the press?"
✅ Response: "NO. Article 33 and 34 protect freedom of expression..."
```

---

## 🔍 Behind the Scenes

```
User Question (Natural Language)
        ↓
Our System Searches DB for Related Articles
        ↓
Sends Question + Article Context to Google Gemini
        ↓
Gemini Generates Intelligent Response
        ↓
Returns Answer with Article Citations
        ↓
User Gets Response in 1-3 seconds
        ↓
Query Logged for Analytics
```

---

## ⚠️ Common Issues & Fixes

**Issue:** "AI unavailable. Try searching directly..."
- **Fix:** Check if GOOGLE_API_KEY is set in Render environment
- Go to Render dashboard → Environment → verify variable is there

**Issue:** Slow responses (>10 seconds)
- **Fix:** Gemini might be temporarily slow
- Try again; if persistent, check internet connection

**Issue:** Irrelevant answers
- **Fix:** Normal for edge cases; users can fall back to search/browse

---

## 📊 Monitoring

**Check your usage:**
1. Go to https://console.cloud.google.com
2. Find your project (from AI Studio)
3. Go to "Quotas & System Limits"
4. Monitor "Generative Language API" usage

---

## 🎁 Bonus: Testing Other Features

**Main Menu:**
```bash
curl -X POST https://sheriayangu.onrender.com/ussd \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"test","serviceCode":"*384*700","phoneNumber":"+254700000001","text":""}'
```

**Search for "health":**
```bash
# text: "1*health"
```

**Browse Chapter 4 (Bill of Rights):**
```bash
# text: "2*4"
```

**Take Quiz:**
```bash
# text: "4"
```

---

## ✅ Checklist Before Hackathon

- [ ] Gemini API key obtained
- [ ] Key added to Render environment variable
- [ ] Test curl command executed successfully
- [ ] Received "🤖 AI RESPONSE" with article references
- [ ] Tested 2-3 different user questions
- [ ] Confirmed responses cite Constitution articles
- [ ] Africa's Talking USSD shortcode configured (separate)
- [ ] Ready for demo! 🚀

---

## 📞 Need Help?

**Check logs:** https://dashboard.render.com → Logs tab
- Look for any API errors
- Check if requests are reaching the endpoint

**Verify health:** 
```bash
curl https://sheriayangu.onrender.com/health
```
Should return: `{"status":"ok",...}`

**Test locally:**
```bash
cd ~/GIT\ PROJECTS/SheriaYangu
npm start
curl -X POST http://localhost:3000/ussd ...
```

---

**Everything is ready. Just add your API key and you're live! 🎉**
