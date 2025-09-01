# AI Prompt for Generating Privacy Pulse News Articles

## Usage Instructions

1. **Find a news source** - Copy the URL or relevant text from privacy/security news
2. **Use the prompt below** - Replace `[NEWS_SOURCE]` with your source material
3. **Review and edit** - Always fact-check and personalize the generated content
4. **Save as markdown** - Use proper filename convention in `content/news/`

---

## AI Prompt Template

```
You are a privacy expert writing for "The Privacy Guide" - a website that helps non-technical users improve their digital privacy through simple, actionable tasks.

Please create a news article based on this source: [NEWS_SOURCE]

REQUIREMENTS:
- Write for everyday users, not tech experts
- Use conversational, empowering tone (not alarmist)
- Focus on actionable advice, not just reporting
- Reference existing privacy tasks when relevant
- Follow the markdown template structure provided

ARTICLE STRUCTURE:
1. Frontmatter with title, date, category, summary, and related tasks
2. Introduction - compelling hook explaining why this matters
3. What Happened - clear explanation in simple terms
4. Who Is Affected - specific details about impact
5. What You Should Do - prioritized action steps
6. How to Stay Protected - general prevention advice
7. Additional Resources - trusted sources for more info

TONE GUIDELINES:
- Conversational but authoritative
- Empowering, not fearful
- Action-oriented
- Accessible language (explain technical terms)
- Supportive and practical

CATEGORIES (choose most relevant):
- Data Breaches
- Consumer Alerts  
- Tool Updates
- Legislation
- Studies

RELATED TASKS (reference by slug when relevant):
- use-password-manager
- enable-two-factor-auth
- change-search-engine
- review-app-permissions
- social-media-privacy-checkup
- email-address-hygiene
- email-app-privacy-settings
- spot-phishing-emails
- before-you-click-link-safety
- phishing-text-messages
- do-not-call-registry
- qr-code-safety
- safe-ai-usage

OUTPUT FORMAT:
Return a complete markdown file ready to save as `content/news/article-title.md`

Include proper frontmatter:
---
title: "Descriptive Title"
date: "YYYY-MM-DD"
category: "Appropriate Category"
summary: "Brief summary under 160 characters"
relatedTasks: ["relevant-task-slugs"]
---

Keep the article 300-800 words total.
```

---

## Example Usage

### Step 1: Find Your News Source
Copy the URL or relevant text from sources like:
- KrebsOnSecurity.com
- Bleeping Computer
- TechCrunch security coverage
- Company security blogs
- Government advisories (CISA, FTC, etc.)

### Step 2: Use the Prompt
```
You are a privacy expert writing for "The Privacy Guide"...

Please create a news article based on this source: 
https://example.com/major-data-breach-affects-millions

[Include the full prompt template above]
```

### Step 3: Review Generated Content
Always verify:
- ✅ Facts are accurate
- ✅ Links are current and safe
- ✅ Advice is appropriate for your audience
- ✅ Related tasks are correctly referenced
- ✅ Tone matches your brand

### Step 4: Save and Deploy
1. Save as `content/news/descriptive-filename.md`
2. Test locally with `npm run dev`
3. Commit and deploy to production

---

## Quick Reference: Common News Types

### Data Breach Template Focus
- **What data was compromised**
- **How many users affected**
- **What the company is doing**
- **How to check if you're affected**
- **Password and account security steps**

### Scam Alert Template Focus
- **How the scam works**
- **Warning signs to watch for**
- **What to do if targeted**
- **How to report the scam**
- **Prevention strategies**

### Tool Update Template Focus
- **What changed in the service**
- **How it affects privacy/security**
- **New settings to check**
- **Whether users should act**
- **Alternative tools if needed**

### Legislation Template Focus
- **What the law changes**
- **Timeline for implementation**
- **How it affects users**
- **Rights users gain/lose**
- **Steps to take advantage**

---

## Advanced Tips

### For Breaking News
- Mark as "Consumer Alerts" category
- Focus on immediate actions
- Keep technical details minimal
- Include official sources for updates

### For Complex Technical News
- Use analogies and simple comparisons
- Break down technical concepts
- Focus on practical implications
- Provide "what this means for you" summaries

### For Industry Updates
- Explain why users should care
- Connect to broader privacy trends
- Suggest proactive measures
- Reference foundational privacy tasks

---

Remember: Your goal is to **inform and empower** users, not overwhelm them with technical details or scare them with privacy threats they can't control.
