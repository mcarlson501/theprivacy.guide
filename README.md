# The Privacy Guide

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Security Policy](https://img.shields.io/badge/Security-Policy-red?style=for-the-badge)](SECURITY.md)
[![Privacy by Design](https://img.shields.io/badge/Privacy-by%20Design-green?style=for-the-badge)](https://en.wikipedia.org/wiki/Privacy_by_design)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

The Privacy Guide is an open-source, privacy-first web app that turns digital privacy into simple, practical actions anyone can follow.

## Purpose

The Privacy Guide bridges the gap between technical privacy guidance and real-world action. We provide clear, step-by-step tasks designed for non-technical users.

Our core belief: privacy protection should be accessible to everyone.

## Key features

- Interactive privacy tasks: 19 practical tasks from 5-minute "Quick Wins" to advanced guides, including a full social media series.
- Gamified experience: earn points, badges, and levels with an intuitive progress dashboard.
- Privacy Pulse: short news items that link to actionable tasks.
- Privacy-first architecture: no tracking, local-only progress storage, and exportable data.
- Accessibility: WCAG 2.1 AA considerations, dark mode, and responsive design.
- Mobile-friendly UI with clear, clickable cards.

## Architecture overview

The app is content-driven: tasks and news are stored as Markdown files so contributors can add content without coding.

Content structure:

- `content/tasks/` — task guides (.md)
- `content/news/` — news articles (.md)

Tasks are processed into interactive pages during the build.

## Privacy by design

The Privacy Guide is built to minimize data collection and give users control over their information.

- Zero data collection by default: no accounts or tracking.
- Local-only progress storage with export/import options.
- Static generation and self-hosted assets reduce external dependencies.
- One-click data clearing and clear controls for users.

## Content philosophy

Our approach is practical and empowering: we prioritize simple, tested actions over theory.

Independence and integrity:

- No ads, sponsorships, or affiliate links.
- Recommendations are based on research and effectiveness.
- Community contributions are welcome and encouraged.

Task categories:

- Quick Wins (5–10 minutes)
- Essential (15–30 minutes)
- Social Media (10–20 minutes)
- Advanced (30+ minutes)

## User journey

1. Discover tasks by category and difficulty.
2. Follow clear instructions and complete tasks.
3. Track progress and earn points and badges.
4. Read Privacy Pulse for context and linked actions.
5. Export or clear progress as needed.

## Technical implementation

Tech stack:

- Next.js 14 (App Router)
- Tailwind CSS
- Markdown content for tasks and news
- Local storage for progress tracking
- Self-hosted assets and CSP for privacy

Recent enhancements include the social media task series, Privacy Pulse integration, improved templates, and security hardening for JSON import.

## Project stats

- 19 privacy tasks across four categories
- Full social media privacy series
- Privacy Pulse news with action prompts
- Enterprise-grade input validation and security hardening
- No external trackers; local-only progress storage
- WCAG 2.1 AA accessibility considerations
- Open-source (MIT)

## Contributing

Contributions are welcome. Ways to help:

- Suggest tasks or review the [task backlog](docs/development/TASK_BACKLOG.md).
- Submit content improvements or translations via Markdown.
- Help with accessibility, performance, or UI improvements.
- Report bugs or suggest features via GitHub issues.

See `CONTRIBUTING.md` for guidelines.

## Links

- Live site: https://theprivacy.guide
- Task backlog: docs/development/TASK_BACKLOG.md
- Issues: https://github.com/mcarlson501/theprivacy.guide/issues
- Security: SECURITY.md
- Contributing: CONTRIBUTING.md

## License

Open source under the MIT License — see `LICENSE` for details.

---

Built for everyone who believes privacy is a right, not a privilege.

The Privacy Guide: making digital privacy accessible, one task at a time.
