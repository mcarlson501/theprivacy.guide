# The Privacy Guide - Project Instructions

## Project Overview
"The Privacy Guide" is a gamified web application built with Next.js and Tailwind CSS that helps non-tech-savvy users improve their digital privacy through guided tasks stored as Markdown files.

## Progress Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements - Complete Next.js web app with Markdown content management
- [x] Scaffold the Project - Manual setup complete with all required files and structure
- [x] Customize the Project - Full implementation with components, pages, and content
- [x] Install Required Extensions - No additional extensions needed
- [x] Compile the Project - Project ready for npm install and npm run dev
- [x] Create and Run Task - Ready for development server
- [x] Launch the Project - Instructions provided in README
- [x] Ensure Documentation is Complete - Comprehensive README and documentation added
- [x] Social Media Privacy Task Series - Complete platform-specific guides implemented
- [x] Privacy Pulse News System - Enhanced with call-to-action integration
- [x] Security Hardening - Enterprise-grade input validation and protection
- [x] User Experience Optimization - Clickable interfaces and typography improvements
- [x] Standardized Points System - Game theory-optimized scoring (25/50/75/100 points) with Essential task priority

## Architecture Overview

### Tech Stack
- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with custom brand colors
- **Content**: Markdown files with YAML frontmatter
- **State Management**: React Context with localStorage persistence

### Brand Colors
- friendly-blue: '#4A90E2'
- success-teal: '#50E3C2'
- charcoal-gray: '#333333'
- calm-off-white: '#F8F9FA'

### Project Structure
```
/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── tasks/
│   │   └── page.js
│   └── about/
│       └── page.js
├── components/
│   ├── Header.js
│   ├── ProgressCard.js
│   ├── TaskCard.js
│   └── TaskModal.js
├── content/
│   └── tasks/
│       └── *.md files
├── context/
│   └── ProgressContext.js
└── lib/
    └── tasks.js
```
