# The Privacy Guide

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

An open-source web application that makes digital privacy accessible through clear, actionable tasks for everyday users.

## Overview

The Privacy Guide transforms complex privacy concepts into practical, step-by-step actions. Built for non-technical users, it provides a gamified learning experience while maintaining strict privacy standards.

**Live site:** https://theprivacy.guide

## Features

**Interactive Privacy Tasks**
- 21 practical tasks from 5-minute quick wins to advanced guides
- Complete social media privacy series
- Step-by-step instructions tested across platforms

**Gamified Progress**
- Points, badges, and level progression
- Progress tracking dashboard
- Personal achievement system

**Privacy Pulse News**
- Curated privacy news with actionable takeaways
- Links to relevant tasks
- Regular updates on privacy developments

**Privacy-First Design**
- No user accounts or personal data collection
- Local-only progress storage
- Anonymous analytics via GoatCounter
- Full data export/import capabilities

## Architecture

**Content-Driven**
- Tasks and news stored as Markdown files
- Easy contribution without coding knowledge
- Static site generation for performance and security

**Tech Stack**
- Next.js 14 with App Router
- Tailwind CSS for styling
- Markdown content processing
- Local storage for progress tracking

**Security Features**
- Content Security Policy implementation
- Input validation and sanitization
- No external dependencies except analytics
- Enterprise-grade JSON import security

## Content Structure

```
content/
├── tasks/          # Privacy task guides
└── news/           # Privacy news articles
```

**Task Categories**
- Quick Win (5-10 minutes)
- Essential (15-30 minutes)  
- Social Media (10-20 minutes)
- Advanced (30+ minutes)

## Privacy Architecture

The Privacy Guide implements privacy by design principles:

- **Minimal Data Collection:** Anonymous aggregate analytics only
- **Local Storage:** All user progress stays on device
- **No Tracking:** No cookies, cross-site tracking, or personal data
- **User Control:** Complete data export, import, and deletion
- **Self-Hosted Assets:** Eliminates third-party data leakage

## Development

**Prerequisites**
- Node.js 18 or higher
- npm or yarn package manager

**Setup**
```bash
git clone https://github.com/mcarlson501/theprivacy.guide.git
cd theprivacy.guide
npm install
npm run dev
```

**Project Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting checks

## Contributing

We welcome contributions that make privacy more accessible. Ways to help:

**Content Contributions**
- Create new privacy tasks using our templates
- Write Privacy Pulse news articles
- Improve existing task instructions
- Translate content for broader accessibility

**Code Contributions**
- Bug fixes and performance improvements
- Accessibility enhancements
- Mobile experience optimizations
- Security improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Project Status

**Current Stats**
- 21 privacy tasks across four difficulty levels
- Complete social media privacy series
- Privacy Pulse news integration
- WCAG 2.1 AA accessibility considerations
- Enterprise-grade security implementation

**Recent Enhancements**
- JSON import security hardening
- Comprehensive task formatting standardization
- Enhanced mobile experience
- Privacy Pulse call-to-action integration

## Resources

- **Live Site:** https://theprivacy.guide
- **Documentation:** [docs/](docs/) directory
- **Issues:** [GitHub Issues](https://github.com/mcarlson501/theprivacy.guide/issues)
- **Security:** [SECURITY.md](SECURITY.md)
- **Task Backlog:** [docs/development/TASK_BACKLOG.md](docs/development/TASK_BACKLOG.md)

## License

Open source under the [MIT License](LICENSE).

---

**The Privacy Guide:** Making digital privacy accessible, one task at a time.
