# The Privacy Guide

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-29-C21325)](https://jestjs.io/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mcarlson501_theprivacy.guide&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mcarlson501_theprivacy.guide)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mcarlson501_theprivacy.guide&metric=coverage)](https://sonarcloud.io/summary/new_code?id=mcarlson501_theprivacy.guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)

An open-source web application that makes digital privacy accessible through clear, actionable tasks for everyday users.

## Overview

The Privacy Guide transforms complex privacy concepts into practical, step-by-step actions. Built for non-technical users, it provides a gamified learning experience while maintaining strict privacy standards.

**Live site:** https://theprivacy.guide

## Features

**Interactive Privacy Tasks**
- 28 practical tasks from 5-minute quick wins to advanced guides
- Complete social media privacy series (Facebook, Instagram, TikTok, Twitter/X, LinkedIn)
- Categories: Quick Win, Essential, Social Media, and Advanced
- Step-by-step instructions tested across platforms

**Gamified Progress**
- Points, badges, and level progression (25/50/75/100 point tiers)
- Progress tracking dashboard
- Personal achievement system

**Privacy-First Design**
- No user accounts or personal data collection
- Local-only progress storage
- Anonymous analytics via GoatCounter
- Full data export/import capabilities

## Architecture

**Content-Driven**
- Tasks stored as Markdown files with YAML frontmatter
- Easy contribution without coding knowledge
- Static site generation for performance and security

**Tech Stack**
- Next.js 14 with App Router
- Tailwind CSS for styling
- Markdown content processing
- Local storage for progress tracking

**Development Infrastructure**
- Jest + React Testing Library for automated testing
- SonarCloud integration for code quality and security analysis
- GitHub Actions CI/CD pipeline with automated testing
- ESLint and Prettier for code consistency
- Comprehensive test coverage reporting

**Security Features**
- Content Security Policy implementation
- Input validation and sanitization
- No external dependencies except analytics
- Enterprise-grade JSON import security

## Content Structure

```
content/
└── tasks/          # 28 privacy task guides (Markdown + YAML frontmatter)
```

**Task Categories (28 tasks)**
- Quick Win — 10 tasks (5-10 minutes, 25 points)
- Essential — 10 tasks (15-30 minutes, 75 points)
- Social Media — 5 tasks (10-20 minutes, 50 points)
- Advanced — 3 tasks (30+ minutes, 100 points)

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
- Improve existing task instructions
- Translate content for broader accessibility

**Code Contributions**
- Bug fixes and performance improvements
- Accessibility enhancements
- Mobile experience optimizations
- Security improvements
- Test coverage improvements

**Development Setup**
```bash
npm install          # Install dependencies
npm test            # Run test suite
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run dev         # Start development server
npm run build       # Build for production
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Project Status

**Current Stats**
- 28 privacy tasks across four categories
- 8 test suites, 56 automated tests
- Complete social media privacy series (5 platforms)
- WCAG 2.1 AA accessibility considerations
- Enterprise-grade security implementation

**Recent Enhancements**
- Expanded task library from 21 to 28 tasks (credit freeze, data brokers, phone/browser/computer privacy, Google privacy checkup, safe online shopping)
- Standardized points system: 25/50/75/100 across Quick Win/Social Media/Essential/Advanced
- Header scroll performance optimization (refs over state)
- Mobile menu accessibility: focus trap, ARIA dialog role
- Shared utility modules for categories and levels (DRY refactor)
- Dynamic task count in navigation header
- Comprehensive task formatting standardization across all content
- SonarCloud integration for continuous code quality monitoring
- GitHub Actions CI/CD pipeline with automated testing and security scanning
- JSON import security hardening with automated test coverage

## Resources

- **Live Site:** https://theprivacy.guide
- **Code Quality:** [SonarCloud Dashboard](https://sonarcloud.io/project/overview?id=mcarlson501_theprivacy.guide)
- **CI/CD Status:** [GitHub Actions](https://github.com/mcarlson501/theprivacy.guide/actions)
- **Documentation:** [docs/](docs/) directory
- **Issues:** [GitHub Issues](https://github.com/mcarlson501/theprivacy.guide/issues)
- **Security:** [SECURITY.md](SECURITY.md)
- **Task Backlog:** [docs/development/TASK_BACKLOG.md](docs/development/TASK_BACKLOG.md)

## License

Open source under the [MIT License](LICENSE).

---

**The Privacy Guide:** Making digital privacy accessible, one task at a time.
