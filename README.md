# SHERIA YANGU

```text
███████╗██╗  ██╗███████╗██████╗ ██╗ █████╗     ██╗   ██╗ █████╗ ███╗   ██╗ ██████╗ ██╗   ██╗
██╔════╝██║  ██║██╔════╝██╔══██╗██║██╔══██╗    ╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝ ██║   ██║
███████╗███████║█████╗  ██████╔╝██║███████║     ╚████╔╝ ███████║██╔██╗ ██║██║  ███╗██║   ██║
╚════██║██╔══██║██╔══╝  ██╔══██╗██║██╔══██║      ╚██╔╝  ██╔══██║██║╚██╗██║██║   ██║██║   ██║
███████║██║  ██║███████╗██║  ██║██║██║  ██║       ██║   ██║  ██║██║ ╚████║╚██████╔╝╚██████╔╝
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝
```

**Know Your Rights. Know Your Power. 🇰🇪**

Sheria Yangu is a USSD-first constitutional literacy backend for Kenya. It is designed for feature phones and low-connectivity users so anyone can discover rights and legal protections quickly.

Constitutional literacy reduces exploitation, improves accountability, and increases civic participation. Many citizens need immediate legal guidance in simple language while using the phone they already have. This backend enables that with USSD navigation and SMS delivery of constitutional content.

## Solution

Sheria Yangu provides:
- Interactive USSD menus for search, browse, rights quick links, quiz, and settings
- Keyword and Swahili-assisted article search from Supabase
- Full-article SMS delivery via Africa's Talking
- Engagement tracking and public stats endpoint for judges/demo

## Features

- 🔍 Constitution search (English + Swahili keyword mapping)
- 📖 Browse by chapter with pagination
- ⚖️ Quick rights menu (Bill of Rights)
- 🧠 5-question civic quiz
- 📱 Full article SMS delivery
- 📊 User stats + public platform analytics
- 🧱 Dockerized deploy for Railway/Render

## Architecture Diagram

```text
User Phone (*384*700#)
        |
        v
Africa's Talking USSD Gateway
        |
        v
POST /ussd (Express)
        |
        +--> Supabase (articles, users, logs, quiz)
        |
        +--> Africa's Talking SMS API (article delivery)

Dashboard/Judges ---> GET /stats
Health checks -----> GET /health
```

## Africa's Talking APIs Used

| API | Usage |
|---|---|
| USSD | Session callback and interactive civic menu |
| SMS | Send full constitutional article text |
| Voice | Endpoint scaffolded (disabled by default in this USSD+SMS deployment) |
| Airtime | Module scaffolded (disabled by default) |

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js + Express |
| Database | Supabase (PostgreSQL) |
| USSD/SMS | Africa's Talking |
| Container | Docker |
| Hosting | Railway / Render |

## Setup Instructions

1. Clone and open project.
2. Install dependencies:
   - `npm install`
3. Create env file:
   - `cp .env.example .env`
4. Fill `.env` with live credentials.
5. In Supabase SQL editor, run [sql/schema.sql](sql/schema.sql).
6. Seed data:
   - `node scripts/seed.js`
7. Start app:
   - `node src/index.js`

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| AT_API_KEY | Yes | Africa's Talking API key |
| AT_USERNAME | Yes | Usually `sandbox` or live username |
| AT_SHORTCODE | Yes | USSD code shown in SMS footer |
| AT_SENDER_ID | Yes | SMS sender ID (`SHERIA`) |
| AT_SMS_RECIPIENT_OVERRIDE | No | Force SMS to fixed number for demos |
| SUPABASE_URL | Yes | Supabase project URL |
| SUPABASE_ANON_KEY | Yes | Supabase anon key |
| PORT | No | Default `3000` |
| APP_BASE_URL | No | Public base URL |

## Database Setup

- Execute [sql/schema.sql](sql/schema.sql) in Supabase SQL editor.
- Ensure API role used by app has insert/select/update/delete permissions.
- For fast demo setup, disable RLS on these tables or add permissive policies.
- Run seed script to load constitution + quiz data.

## API Endpoints

- `POST /ussd` — main USSD callback (text/plain `CON`/`END`)
- `POST /voice` — voice callback scaffold
- `POST /voice/menu` — voice IVR handler scaffold
- `GET /health` — service health JSON
- `GET /stats` — public aggregate metrics JSON

## USSD Flow Diagram

```text
Main
 ├─ 1 Search
 │   ├─ keyword
 │   ├─ results
 │   └─ article -> SMS
 ├─ 2 Browse Chapter
 │   ├─ chapter list
 │   └─ paged articles -> detail
 ├─ 3 Know Your Rights
 │   └─ quick article links -> SMS
 ├─ 4 Civic Quiz
 │   └─ 5 questions -> score
 ├─ 5 Hotline (disabled in this deployment)
 └─ 6 Settings
     ├─ language
     ├─ my stats
     └─ about
```

## Screenshots / Demo

- USSD flow screenshots: _to be added_
- Africa's Talking dashboard screenshots: _to be added_
- Judges demo video: _to be added_

## Team

- Sheria Yangu Hackathon Team

## Deployment (Railway / Render + Africa's Talking callbacks)

### Railway
1. Create new project from this repository.
2. Add all environment variables from `.env.example`.
3. Deploy.
4. Copy generated public domain, e.g. `https://sheria-yangu-production.up.railway.app`.
5. Set Africa's Talking USSD callback to:
   - `https://your-domain/ussd`

### Render
1. New Web Service -> connect repo.
2. Runtime: Node, Build: `npm install`, Start: `node src/index.js`.
3. Add env vars.
4. Deploy and copy service URL.
5. Set callback URL in Africa's Talking to `/ussd` endpoint.

### Africa's Talking Live Setup
1. Switch app to live username + API key.
2. Configure live shortcode and callback URL.
3. Set approved sender ID `SHERIA` for SMS.
4. Use test dial and verify logs in app + AT dashboard.

## License

MIT — see [LICENSE](LICENSE).
