# 🧭 FreshersCompass — AI Career & Code Intelligence Engine

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel%20Production-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://frontend-delta-one-24.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-shukla9523%2FFreshers__Compass-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shukla9523/Freshers_Compass)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite%20%2B%20Tailwind-61DAFB?style=flat-square&logo=react&logoColor=black)](frontend/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?style=flat-square&logo=node.js&logoColor=white)](backend/)
[![Python](https://img.shields.io/badge/AI%20Microservice-Python%203.12%20%2B%20FastAPI-3776AB?style=flat-square&logo=python&logoColor=white)](ai-service/)
[![Gemini](https://img.shields.io/badge/LLM-Google%20Gemini%202.5%20Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas%20%2B%20Resilient%20Cache-47A248?style=flat-square&logo=mongodb&logoColor=white)](backend/src/models/)

<p align="center">
  <b>A unified, deterministic career twin and codebase intelligence platform for students, fresh graduates, and early-career developers.</b><br/>
  Unifying ATS Resume Analysis, Codebase Intelligence (RAG), AI Interview Simulations, LinkedIn Optimization, and Application Tracking into a single cohesive cockpit.
</p>

[**🚀 Explore Live Demo**](https://frontend-delta-one-24.vercel.app) • [**📂 Source Code**](https://github.com/shukla9523/Freshers_Compass) • [**📑 Architecture**](#system-architecture) • [**⚡ Quickstart**](#getting-started)

</div>

---

## 📌 Table of Contents

- [Live Deployment Links](#-live-deployment-links)
- [Executive Overview](#-executive-overview)
- [Key Features & Capabilities](#-key-features--capabilities)
- [System Architecture & Engineering Highlights](#-system-architecture--engineering-highlights)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Engineering Highlights & Resilient Design](#-engineering-highlights--resilient-design)
- [The Team](#-the-team)
- [License](#-license)

---

## 🌐 Live Deployment Links

| Resource | URL | Status | Description |
|---|---|---|---|
| **Production Web App** | [https://frontend-delta-one-24.vercel.app](https://frontend-delta-one-24.vercel.app) | ![Active](https://img.shields.io/badge/Status-Live%20Online-brightgreen?style=flat-square) | Hosted on Vercel Global Edge CDN |
| **GitHub Repository** | [https://github.com/shukla9523/Freshers_Compass](https://github.com/shukla9523/Freshers_Compass) | ![Public](https://img.shields.io/badge/Visibility-Public-blue?style=flat-square) | Monorepo containing Frontend, Backend, & AI Service |
| **Vercel Dashboard** | [vercel.com/nileshelectroglobal-8490/frontend](https://vercel.com/nileshelectroglobal-8490/frontend) | ![Vercel](https://img.shields.io/badge/Deployment-Verified-success?style=flat-square) | Continuous Deployment Pipeline |

---

## 💡 Executive Overview

College graduates and entry-level software engineers face severe friction preparing for technical recruitment:
1. **Disconnected tools** — Candidates jump between ATS scanners, LeetCode, GitHub, LinkedIn, and spreadsheets to track applications.
2. **Generic AI advice** — Typical chatbots do not understand a candidate's actual repositories or real GitHub code quality.
3. **No progress tracking** — No single holistic metric measures interview readiness, code depth, and ATS optimization together.

**FreshersCompass** solves this by unifying a student's **Resume, GitHub Repositories, LinkedIn Presence, and Interview Telemetry** into an **AI Career Twin**. It computes grounded competency scores, simulates tailored technical interviews, generates recruiter pitches for real GitHub projects, and tracks job applications end-to-end.

---

## 🚀 Key Features & Capabilities

### 📄 1. Resume & ATS Optimization Engine
- **Multi-Format Extraction:** Seamlessly parses PDF and DOCX resumes with strict magic-byte validation.
- **ATS Scoring Algorithm:** Benchmarks keyword density, action verbs, quantifiable achievements, and formatting against target role expectations.
- **Instant Improvement Suggestions:** Actionable feedback pointing out missing keywords and weak descriptions.
- **Chronological Versioning:** Tracks multiple resume revisions with score trendlines over time.

### 🎙️ 2. AI Mock Interview Simulator
- **Adaptive Questions:** Google Gemini 2.5 Flash dynamically crafts technical, domain, and behavioral questions directly grounded in the candidate's verified skills and project repositories.
- **Real-Time Evaluation:** Assesses technical depth, articulation clarity, system design reasoning, and pacing.
- **Pacing & Timing Analytics:** Monitors candidate answer delivery against ideal time budgets to improve conciseness.
- **Rubric-Based Verdicts:** Provides specific strengths, areas to polish, and model answers for every question.

### 💼 3. Recruiter-Grade LinkedIn Optimizer
- **Recruiter Visibility Audit:** Scores profile visibility and discoverability based on LinkedIn's hiring algorithm criteria.
- **3-Tier Headline Variations:** Generates High-Impact, Technical Stack-focused, and Value-Driven Creative headlines.
- **Recruiter-Tailored About Section:** Produces an engaging summary with clear hooks, core tech stack, and calls-to-action.
- **Viral Project Launch Posts:** Generates high-engagement "I built this" launch posts with skimmable bullet points and trending hashtags.
- **Targeted Cold Outreach:** Customized InMail and DM templates for Tech Recruiters, College Alumni, and Startup Founders.

### 🔍 4. GitHub Analyzer & Codebase Intelligence (RAG)
- **Repo Ingestion & Inspection:** Automatically indexes repositories, commit histories, branch structures, and code health.
- **Codebase RAG:** Ask natural-language questions about your own repositories and get answers grounded directly in code chunks.
- **Automated Recruiter Pitches:** Distills complex codebases into punchy, metric-driven elevator pitches for technical interviews.
- **ReadMe & Documentation Generator:** Automatically generates polished developer and project READMEs.

### 📊 5. AI Career Twin & Readiness Radar
- **5-Dimensional Radar:** Unified radar chart benchmarking `Resume`, `Code Architecture`, `Interview Articulation`, `Roadmap Progress`, and `Pipeline Velocity`.
- **Market Benchmarks:** Visualizes role-specific reference polygons (Fullstack, Frontend, Backend, AI/ML, DevOps, Systems, QA, Data).
- **Temporal Snapshots:** Daily readiness trendlines capturing continuous engineering improvement.

### 📋 6. Application Tracker
- **Kanban & List Workflow:** Track stages: `Applied` ➔ `Screening` ➔ `Interviewing` ➔ `Offer` ➔ `Rejected`.
- **Match Metrics:** Integrates match scores, interview deadlines, notes, and direct job URLs.
- **Seed & Reset:** Includes instant 1-click sample data for rapid testing and demonstrations.

### 🌐 7. Public Developer Portfolio
- **Zero-Auth Showcase:** Shareable public developer profiles (`/p/:username` and `/portfolio/:username`) showcasing candidate bio, readiness scores, top GitHub projects, and verified skills.

---

## 🏗️ System Architecture & Engineering Highlights

```
                                  +---------------------------------+
                                  |    Browser / Client Device      |
                                  |   (React 18 + Vite + Tailwind)  |
                                  +----------------+----------------+
                                                   |
                                 REST / JSON (JWT HttpOnly Cookies)
                                                   |
                                                   v
                          +-------------------------------------------------+
                          |           Node.js / Express Core API            |
                          |                 (Port 5000)                     |
                          |                                                 |
                          |  • Authentication & Session Isolation           |
                          |  • Multer File Upload & Magic Byte Check        |
                          |  • Rate Limiting & Helmet Security              |
                          |  • Resilient Dual-Store Engine (MongoDB/Cache)  |
                          +-------------------+-----------------------------+
                                              |
                         Internal API Key     |      Mongoose ODM /
                         (x-internal-key)     |      Resilient Storage
                                              |
                                              +---------------+
                                              |               |
                                              v               v
                      +-----------------------------+   +-------------------+
                      |   Python / FastAPI Service  |   |   MongoDB Atlas   |
                      |         (Port 8000)         |   |   (+ Local Disk   |
                      |                             |   |   Offline Cache)  |
                      | • Resume Parsing Engine     |   +-------------------+
                      | • Adaptive Question Gen     |
                      | • Interview Pacing Scorer   |
                      | • Codebase RAG & Ingestion  |
                      | • Circuit Breakers & Fallback|
                      +--------------+--------------+
                                     |
                       +-------------+-------------+
                       |                           |
                       v                           v
         +---------------------------+   +-------------------+
         | Google Gemini 2.5 Flash   |   |   Groq Cloud      |
         | (Primary High-Speed LLM)  |   | (Backup Provider) |
         +---------------------------+   +-------------------+
```

---

## 🛠️ Tech Stack

| Domain | Technology | Purpose |
|---|---|---|
| **Frontend** | React 18, Vite 5, Tailwind CSS | High-performance SPA with client-side routing & instant hot reload |
| **State & Visualization** | Recharts, Lucide Icons, Axios | Dynamic readiness radar graphs, score progress bars, and icons |
| **Core Backend** | Node.js v20+, Express.js | Core business logic, session isolation, CRUD, rate limiting |
| **AI Microservice** | Python 3.12+, FastAPI, Uvicorn | High-throughput asynchronous LLM pipelines & document parsing |
| **Primary LLM** | Google Gemini 2.5 Flash | High-speed, structured JSON generation for ATS, interviews, & LinkedIn |
| **Secondary LLM** | Groq (Llama / Mixtral) | High-speed automated fallback on quota exhaustion |
| **Persistence Layer** | MongoDB Atlas & Resilient Storage | Mongoose models with custom zero-latency offline disk store |
| **Security & Headers** | Helmet, Cookie-Parser, CORS | Content Security Policy, XSS filtering, HttpOnly JWT cookies |
| **Hosting & CI/CD** | Vercel (Edge CDN), Render | Seamless monorepo deployments with automated build hooks |

---

## 📁 Repository Structure

```
Freshers_Compass/
├── frontend/                     # React Single Page Application (SPA)
│   ├── src/
│   │   ├── components/           # Reusable UI widgets (Radar, Navbar, Skeletons)
│   │   ├── pages/                # Cockpit views (ResumeATS, AIInterview, CareerTwin, etc.)
│   │   └── services/             # Axios API client instances
│   ├── vercel.json               # Vercel SPA rewrite & build configuration
│   ├── vite.config.js            # Vite bundler setup
│   └── package.json
│
├── backend/                      # Node.js / Express Core Service
│   ├── src/
│   │   ├── controllers/          # Business logic handlers (resume, interview, profile)
│   │   ├── models/               # Data models & Resilient Storage Layer
│   │   │   ├── resilientStorage.js # Zero-latency offline MongoDB fallback engine
│   │   │   ├── Resume.model.js
│   │   │   ├── Profile.model.js
│   │   │   └── Application.model.js
│   │   ├── routes/               # Express REST route definitions
│   │   ├── middleware/           # Auth, file validation, rate limiting
│   │   └── server.js             # Express application entrypoint
│   ├── tests/                    # Unit & regression test suites (assert/strict)
│   └── package.json
│
├── ai-service/                   # Python / FastAPI LLM & RAG Microservice
│   ├── app/
│   │   ├── routers/              # Microservice endpoints (resume, interview, linkedin)
│   │   ├── services/             # Gemini 2.5 Flash, Groq, Pacing, Question Generators
│   │   └── main.py               # FastAPI application setup & CORS configuration
│   ├── tests/                    # Pytest test suites (Circuit breakers, adaptive questions)
│   └── requirements.txt          # Python dependencies
│
├── docker-compose.yml            # Multi-container orchestration
├── LICENSE                       # MIT License
└── README.md                     # Project documentation
```

---

## ⚙️ Getting Started (Local Setup)

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18.0 or newer) and `npm`
- **Python** (v3.10 or newer) and `pip`
- **Git**

### 2. Clone Repository
```bash
git clone https://github.com/shukla9523/Freshers_Compass.git
cd Freshers_Compass
```

### 3. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
# Running on http://localhost:5173
```

### 4. Setup Backend
In a new terminal:
```bash
cd backend
npm install
cp .env.example .env
npm run start
# Running on http://localhost:5000
```

### 5. Setup AI Microservice
In a third terminal:
```bash
cd ai-service
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --port 8000 --reload
# Running on http://localhost:8000
```

Open your browser at **`http://localhost:5173`** to access the application.

---

## 🔐 Environment Variables

### Frontend (`frontend/.env`)
```ini
VITE_API_BASE_URL=http://localhost:5000/api
VITE_AI_SERVICE_URL=http://localhost:8000
VITE_APP_NAME=FreshersCompass
```

### Backend (`backend/.env`)
```ini
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/freshercompass?retryWrites=true&w=majority
JWT_SECRET=your_secure_jwt_secret_key
COOKIE_SECRET=your_cookie_encryption_secret
AI_SERVICE_URL=http://localhost:8000
AI_SERVICE_INTERNAL_KEY=your_shared_internal_secret
CLIENT_URL=http://localhost:5173
```

### AI Service (`ai-service/.env`)
```ini
PORT=8000
ENV=development
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-120b
AI_SERVICE_INTERNAL_KEY=your_shared_internal_secret
BACKEND_URL=http://localhost:5000
```

---

## 📡 API Reference

### Core Backend Endpoints (`/api`)

| Module | Method | Endpoint | Description |
|---|---|---|---|
| **Resume** | `POST` | `/api/resume/upload` | Multipart upload (PDF/DOCX) with ATS evaluation |
| **Resume** | `GET` | `/api/resume/latest` | Fetch user's latest parsed resume & ATS score |
| **Resume** | `GET` | `/api/resume/versions` | List all historical resume versions |
| **Interview** | `POST` | `/api/interview/generate-questions` | Generate tailored questions using Gemini 2.5 Flash |
| **Interview** | `POST` | `/api/interview/evaluate` | Comprehensive answer rubric and pacing evaluation |
| **LinkedIn** | `POST` | `/api/linkedin/optimize` | Audit profile visibility, rewrite about section & headlines |
| **LinkedIn** | `POST` | `/api/linkedin/launch-post` | Generate viral project launch posts |
| **LinkedIn** | `POST` | `/api/linkedin/cold-outreach` | Generate 3 customized outreach templates |
| **GitHub** | `GET` | `/api/github/user/:username/repos` | Retrieve user public repositories from GitHub API |
| **GitHub** | `POST` | `/api/github/pitch` | Generate technical elevator pitches for a repo |
| **Jobs** | `GET` | `/api/jobs/live` | Fetch real-time curated entry-level tech roles |
| **Jobs** | `POST` | `/api/jobs/recommendations` | Skill-matched job recommendations with match % |
| **Applications**| `GET` | `/api/applications` | Retrieve user's application pipeline |
| **Applications**| `POST` | `/api/applications` | Create new tracked job application |
| **Applications**| `PATCH`| `/api/applications/:id` | Update application status (`applied`, `interviewing`, etc.) |
| **Profile** | `GET` | `/api/profile/readiness` | Get 5-axis readiness scores & market benchmarks |
| **Profile** | `POST` | `/api/profile/readiness/snapshot` | Record daily readiness snapshot for progress tracking |

---

## 🏆 Engineering Highlights & Resilient Design

1. **Custom Resilient Storage Layer (`resilientStorage.js`)**:
   - If MongoDB Atlas or local MongoDB is temporarily unreachable, traditional Mongoose queries buffer for 10 seconds and crash with a `500 Timeout`.
   - We engineered a **transparent proxy fallback** that caches all operations (`find`, `create`, `countDocuments`, `findOneAndUpdate`, `$push`, `$pull`) to an in-memory & disk-synced store (`.data/local_db.json`).
   - The application **never goes down**, even completely offline, and automatically syncs to MongoDB once connected.

2. **LLM Pacing & Timing Analytics**:
   - Interview answers are evaluated not only on content, but also on **time-management efficiency**, penalizing severe overruns and rushed non-answers.

3. **Multi-Model Circuit Breaker**:
   - Primary calls route to `gemini-2.5-flash` with aggressive timeouts (25s) to guarantee fast user interactions.
   - If rate limits occur, the breaker automatically falls back to secondary LLMs or the deterministic heuristic engine without raising errors to the frontend.

4. **Security & Production Hardening**:
   - Strict file validation inspecting true magic bytes (preventing malicious extension spoofing).
   - Helmet CSP security headers, CORS origin isolation, and rate-limiting on generative endpoints.

---

## 👥 The Team

| Developer | Role & Contributions | Profiles |
|---|---|---|
| **Nilesh Kumar** | **MERN Full-Stack Developer**<br/>• Frontend Architecture & UI/UX<br/>• Resilient Database Storage Layer<br/>• Production Deployment & Vercel Pipeline | [![GitHub](https://img.shields.io/badge/GitHub-shukla9523-181717?style=flat&logo=github)](https://github.com/shukla9523) |
| **Sanjay Jakhar** | **Team Lead — AI/LLM Engineer**<br/>• AI Microservice & FastAPI Architecture<br/>• LLM Orchestration & RAG Pipeline<br/>• Interview Generation & Pacing Engine | [![GitHub](https://img.shields.io/badge/GitHub-sanjayjakhar-181717?style=flat&logo=github)](https://github.com/sanjayjakhar) |

**Academic Mentorship:**
- **Dr. Kuntal Mukherjee**, Associate Professor, Department of Computer Science and Engineering, Birla Institute of Technology, Mesra — Jaipur Campus.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
