***ideation
I am participating in a creative Prompt to Prototype challenge where the end goal is to build a web-based prototype in 4 modules:

1. Research
2. Product Requirements Document (PRD)
3. Branding & Logo
4. Prototype

Here is my idea: [Describe your idea in 2–3 sentences].

Please help me scope it by filling out the following details:
- Scenario (theme or context)
- Audience (target users)
- Vibe Words (2–3 adjectives for style and tone)
- Format (type of web experience — app, game, dashboard, interactive toy, quiz etc.)
- Concept (short description)
- Goal (what it aims to achieve)
- Title (placeholder name)
- MVP Features (small, completable in &lt;2 hours)
- Stretch Goals (2–3 enhancements)

Output the result in a table with these columns: Scenario | Audience | Vibe Words | Format | Concept | Goal | Title | MVP Features | Stretch Goals.

***pitch
We will work on the scenario called [Title].Draft a short compelling pitch for this idea. Make it clear and concise.


***json formate
{
  "project": {
    "title": "The Privacy Guide",
    "scenario": "Empowering everyday internet users to improve their digital privacy through guided, simple steps.",
    "audience": "Non-tech-savvy individuals who are concerned about their online privacy but feel overwhelmed by technical jargon and complex guides.",
    "vibeWords": [
      "Approachable",
      "Empowering",
      "Clear"
    ],
    "format": "A gamified web app with a central dashboard.",
    "concept": "A user-friendly, step-by-step roadmap that guides users through low-effort, high-impact 'Quick Wins' to improve their digital privacy, using gamification to make the process rewarding.",
    "goal": "To make digital privacy accessible and achievable for everyone, replacing user anxiety with a sense of confidence and control over their digital footprint.",
    "mvpFeatures": [
      "Dashboard View: A single, clear 'Next Step' is presented.",
      "Progress Tracker: A simple visual that updates when a task is marked complete.",
      "Three 'Quick Win' Modules: Content for three initial, easy-to-complete tasks."
    ],
    "stretchGoals": [
      "User Accounts: Allow users to save their progress across different devices.",
      "Personalized Roadmaps: Create a short quiz to generate a customized list of 'Quick Wins.'",
      "Native Mobile App: Develop a dedicated iOS and Android app."
    ]
  }
}


***research

You are my Product Research assistant. I’m working on:
{
  "project": {
    "title": "The Privacy Guide",
    "scenario": "Empowering everyday internet users to improve their digital privacy through guided, simple steps.",
    "audience": "Non-tech-savvy individuals who are concerned about their online privacy but feel overwhelmed by technical jargon and complex guides.",
    "vibeWords": [
      "Approachable",
      "Empowering",
      "Clear"
    ],
    "format": "A gamified web app with a central dashboard.",
    "concept": "A user-friendly, step-by-step roadmap that guides users through low-effort, high-impact 'Quick Wins' to improve their digital privacy, using gamification to make the process rewarding.",
    "goal": "To make digital privacy accessible and achievable for everyone, replacing user anxiety with a sense of confidence and control over their digital footprint.",
    "mvpFeatures": [
      "Dashboard View: A single, clear 'Next Step' is presented.",
      "Progress Tracker: A simple visual that updates when a task is marked complete.",
      "Three 'Quick Win' Modules: Content for three initial, easy-to-complete tasks."
    ],
    "stretchGoals": [
      "User Accounts: Allow users to save their progress across different devices.",
      "Personalized Roadmaps: Create a short quiz to generate a customized list of 'Quick Wins.'",
      "Native Mobile App: Develop a dedicated iOS and Android app."
    ]
  }
}

SCOPE RULES (BEGINNER, LOW-COMPLEXITY):
- Keep ideas buildable as a single-page front-end (no auth, no external APIs, minimal state).
- If suggesting competitors/inspiration, prefer products that can be emulated without backends or complex data.

RESEARCH MODE:
- If browsing is available, use recent, credible sources. Prefer official docs, reputable media, or case studies.
- For every factual claim, include a source title + link + month/year. If uncertain, label as “emerging/unclear”.

TASKS (KEEP IT TIGHT):
1) Trends / Facts — 5 concise items relevant to the domain AND the chosen [format].
 Columns: Claim | Why it matters | Source | Date (MM/YYYY)
2) Competitors — 3–5 direct or analogous products.
Columns: Name/Link | What it is | Engagement hook | What they do well | Note for us (beginner-feasible twist)
• At least 1 should match our [format]; at least 1 can be an adjacent inspiration.
3) Audience Insights — 3 items.
 Columns: Need/Behavior | Why it happens | Implication for our MVP
4) Differentiators*— 3–5 crisp options that fit beginner constraints.
Columns: Differentiator | How it helps | 1-line build hint (front-end only)
5) Alternative Vibe Words — 3–5 options.
Columns: Word | Tone cue | Quick UI cue (color/type/layout)

QUALITY CHECK (do silently before output):
- No claims without a source if you used the web. If no good source, mark “emerging/unclear”.
- Avoid suggestions that require servers, auth, or complex data.
- Keep each cell ≤ ~18 words.

OUTPUT FORMAT (return ONLY these five tables, in order, no extra text):
- Trends / Facts
- Competitors
- Audience Insights
- Differentiators
- Alternative Vibe Words


*** branding logo prompt 
Create a brand identity for my project.

Please provide:
1. 3 possible tagline options.
2. A suggested color palette (with hex codes) that matches my vibe words.
3. A short style description for use in design tools (e.g., “Bold geometric shapes with bright gradients”).
4. A text prompt I can use to generate a simple, scalable logo with a transparent background.

Keep everything simple enough to create and apply within a 1-hour workshop build.


***PRD
I am creating a Product Requirements Document (PRD) for my project.

Please create a short lightweight PRD that includes:
1. Vision & Objectives (1–2 sentences)
2. User Stories (3–5 stories in the format “As a [user], I want [feature] so that [benefit]”)
3. Feature List (separating MVP from nice-to-have/stretch goals)
4. Success Metrics (how we’ll know it’s working)
5. Constraints or Assumptions

Keep it concise and scoped so the MVP can be built in under 1 hour. Export the PRD as a markdown file.

***mockup concept 
Based on my PRD, create an image of a simple mockup of the main or starting screen.

***Add Your PRD
Attached is my Product Requirements document named PRD.md. Please refine and update this document to be optimized for vibe coding a lightweight client-side web application.

Make the purpose clear, identify core features for a simple prototype, outline key user flows, and ensure it supports building with limited time.

Update the document directly with your improvements.


***Update Your Copilot Instructions
Based on my refined PRD, update the Copilot instructions file to better reflect my project goals, target audience, and technical requirements. The instructions should help Copilot provide more relevant coding assistance for this specific project.

***Create the Application
Create an application that is [insert product description from your Product Requirements Document]


***Integrate Your Brand
Integrate the image in the public folder named[logo.png].Place it in the header/navigation area and ensure it's properly sized and positioned.

***Quality Check: GitHub Pages Compatibility
Act as a release auditor for GitHub Pages.
Read all project files including package.json, vite.config files, index.html, src files, and public assets.

Create a checklist marking PASS or FAIL for each item:
1) Pure static with no server APIs
2) Vite base set to dot slash
 3) No service worker or web app manifest
4) No root-absolute paths for assets
5) Uses HashRouter or no router
6) Scoped styles with no global bleed
7) Build outputs to dist folder with hashed assets.

Output as a table with columns for Item, Status, Evidence with file and line, Fix steps in 3 bullets or less, and Effort as S M or L.

Finish with verdict of PASS, NEEDS CHANGES, or BLOCKED.




*** No code prompting Create a Starting Prompt
Draft a starting prompt that I can use with a no-code vibe coding platform like [Github Spark] to prototype this application. It should be clear, concise and include relevant details. Refer to the PRD work we did.

***
