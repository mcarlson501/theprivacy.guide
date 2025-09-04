# AI News Article Generation Prompt

Use this prompt template when asking AI to help create concise, actionable privacy news articles.

## Base Prompt Template

```
Create a concise privacy news article for The Privacy Guide about [TOPIC/INCIDENT]. This is for non-technical users who want practical privacy guidance without information overload.

**Article Requirements:**
- Write in clear, accessible language (no technical jargon)
- Keep total length to 400-600 words maximum
- Include 3-6 prioritized action items (no more)
- Focus on what users can control, not on fear
- Use minimal formatting - no excessive blockquotes or dividers
- Follow our streamlined article template structure
- Include proper frontmatter with source attribution
- Add comprehensive Sources section at the end

**Target Audience:**
- Regular internet users who value their time
- People who want practical privacy guidance without technical complexity
- Users who prefer clear, direct communication over lengthy explanations

**Tone:**
- Informative and direct
- Solution-focused, not problem-obsessed
- Respectful of user's time
- Empowering through actionable guidance

**Structure to Follow:**
1. What Happened (2-3 sentences max)
2. Who Is Affected (specific details, bullet points)
3. What You Should Do (3-6 prioritized actions only)
4. How to Stay Protected (brief prevention advice)
5. Why This Matters (1-2 sentences context)
6. Additional Resources (official links)
7. Sources (primary source, official statements, additional coverage)

**Formatting Guidelines:**
- Use ONE blockquote maximum per article (only for truly urgent info)
- NO horizontal rule dividers (---)
- Short paragraphs (2-3 sentences)
- Clear section headers only
- Bullet points for easy scanning

**Please ensure:**
- Summary is under 160 characters for social sharing
- Total length is 400-600 words (shorter than before)
- Action items are truly prioritized (most urgent first)
- Language is accessible but not condescending
- Content is scannable and actionable
- Frontmatter includes source and sourceUrl fields
- Sources section lists primary source with working link
- All claims can be verified from cited sources

**Context about the incident:**
[Provide specific details about the news/breach/incident you want covered]

**Related privacy tasks to reference:**
[List any relevant task slugs from our content/tasks directory]
```

## Available Task References
Reference existing tasks by their slug when relevant:
- `use-password-manager`
- `enable-two-factor-auth`
- `change-search-engine`
- `review-app-permissions`
- `social-media-privacy-checkup`
- `email-address-hygiene`
- `email-app-privacy-settings`
- `spot-phishing-emails`
- `before-you-click-link-safety`
- `phishing-text-messages`
- `do-not-call-registry`
- `qr-code-safety`
- `safe-ai-usage`
- `retail-rewards-privacy`
- `facebook-privacy-settings`
- `instagram-privacy-settings`
- `tiktok-privacy-safety`
- `twitter-x-privacy-settings`
- `linkedin-privacy-professionals`

## Example Usage

```
Create a concise privacy news article for The Privacy Guide about the recent LinkedIn data scraping incident affecting 700 million users.

**Context about the incident:**
A hacker posted data from 700 million LinkedIn users on a dark web forum. The data includes email addresses, phone numbers, and profile information. LinkedIn says this was data scraping, not a breach of their systems.

**Related privacy tasks to reference:**
- linkedin-privacy-professionals
- social-media-privacy-checkup
- email-address-hygiene
```

## Follow-up Prompts

If the initial article needs refinement:

### For Too Long
```
Please shorten this to 400-600 words maximum. Remove unnecessary details while keeping all essential information and action items.
```

### For Too Complex
```
Simplify the language further. Replace any remaining technical terms and make the explanations more direct.
```

### For Too Many Actions
```
Reduce to 6 action items maximum. Prioritize the most important steps users should take.
```

### For Too Much Formatting
```
Remove excessive formatting. Use only one blockquote maximum and no horizontal dividers. Keep the structure clean and scannable.
```

## Quick Reference: Common News Types

### Data Breach Focus
- How many users affected
- What data was compromised  
- How to check if you're affected
- Password and account security steps

### Scam Alert Focus
- How the scam works (briefly)
- Warning signs to watch for
- What to do if targeted
- Prevention strategies

### Tool Update Focus
- What changed in the service
- New settings to check
- Whether users should act
- Alternative tools if needed

### Legislation Focus
- What the law changes
- How it affects users
- Timeline for implementation
- Steps to take advantage

## Quality Reminders

Remember: Your goal is to **inform and empower** users efficiently, not overwhelm them with technical details or lengthy explanations they don't need.
