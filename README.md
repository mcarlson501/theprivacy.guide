# The Privacy Guide

A gamified, user-friendly web application designed to help non-tech-savvy users improve their digital privacy through simple, actionable tasks.

## 🎯 Project Vision

The Privacy Guide makes digital privacy accessible to everyone. We break down complex privacy concepts into simple, actionable tasks that anyone can complete, regardless of technical expertise. Our gamified approach makes privacy protection engaging and rewarding.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom brand colors
- **Content Management**: Markdown files with YAML frontmatter
- **State Management**: React Context with localStorage persistence
- **Markdown Processing**: gray-matter + remark + remark-html

### Brand Colors
- `friendly-blue`: #4A90E2
- `success-teal`: #50E3C2
- `charcoal-gray`: #333333
- `calm-off-white`: #F8F9FA

### Project Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with ProgressProvider
│   ├── page.js            # Home/landing page
│   ├── tasks/             # Task library pages
│   │   ├── page.js        # Server component that fetches tasks
│   │   └── TasksClient.js # Client component with filtering/modal logic
│   ├── about/             # About page
│   │   └── page.js
│   └── globals.css        # Global styles with Tailwind
├── components/            # Reusable React components
│   ├── Header.js          # Navigation header with progress display
│   ├── ProgressCard.js    # User progress and badge display
│   ├── TaskCard.js        # Individual task preview cards
│   └── TaskModal.js       # Detailed task view modal
├── content/               # Markdown content management
│   └── tasks/            # Individual privacy task .md files
│       ├── change-search-engine.md
│       ├── enable-two-factor-auth.md
│       ├── review-app-permissions.md
│       └── use-password-manager.md
├── context/               # React Context for state management
│   └── ProgressContext.js # User progress, scores, and badges
├── lib/                   # Utility functions
│   └── tasks.js          # Functions to read and parse markdown files
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production
```bash
npm run build
npm start
```

## 📝 Content Management

### Adding New Privacy Tasks

Tasks are stored as Markdown files in `/content/tasks/`. Each task requires YAML frontmatter with the following structure:

```yaml
---
title: 'Task Title'
description: 'Brief description for task cards'
category: 'Quick Win' | 'Essential' | 'Advanced' | 'Expert'
time: 'Estimated time (e.g., ☕️ About 5 minutes)'
points: 50  # Points awarded for completion
badgeId: 'unique-badge-id'  # Optional
badgeName: 'Badge Name'     # Optional
---

Markdown content goes here...
```

### Task Categories
- **Quick Win**: 5-10 minute tasks with immediate impact
- **Essential**: 15-30 minute tasks for core privacy protection
- **Advanced**: Longer tasks for enhanced privacy
- **Expert**: Complex tasks for privacy enthusiasts

### Content Guidelines
- Use clear, non-technical language
- Include "Why It's Important" sections
- Provide step-by-step instructions
- Explain the benefits and expected outcomes
- Use encouraging, empowering tone

## 🎮 Gamification Features

### Progress Tracking
- Points awarded for task completion
- Progress percentage based on total available points
- Visual progress bars and statistics

### Badge System
- Unique badges awarded for completing specific tasks
- Badge collection displayed in user progress
- Optional badge rewards defined in task frontmatter

### Local Storage Persistence
- All progress saved to browser localStorage
- No account creation required
- Privacy-first approach to user data

## 🎨 Styling & Design

### Tailwind Configuration
Custom colors are defined in `tailwind.config.js` and used throughout the application:
- Friendly, approachable blue for primary actions
- Success teal for positive feedback and achievements
- Charcoal gray for readable text
- Calm off-white for backgrounds

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interface elements
- Accessible across all device sizes

## 🔧 Development

### Key Files to Understand
- `lib/tasks.js`: Handles markdown file reading and parsing
- `context/ProgressContext.js`: Manages user progress state
- `components/TaskModal.js`: Displays full task content
- `app/tasks/page.js`: Server component that fetches task data

### Adding Features
1. **New task categories**: Update the category filter logic in `TasksClient.js`
2. **Additional metadata**: Extend the frontmatter schema in `lib/tasks.js`
3. **New components**: Add to `/components/` and import where needed
4. **Styling changes**: Modify `globals.css` or component-specific styles

## 📦 Dependencies

### Core Framework
- **next**: React framework with App Router
- **react** & **react-dom**: UI library
- **tailwindcss**: Utility-first CSS framework

### Content Processing
- **gray-matter**: YAML frontmatter parsing
- **remark**: Markdown processor
- **remark-html**: HTML output plugin

### Development
- **eslint**: Code linting
- **autoprefixer**: CSS vendor prefixing
- **postcss**: CSS processing

## 🎯 Core Values

- **Accessible**: Privacy protection for everyone, regardless of technical expertise
- **Actionable**: Every piece of content leads to concrete action
- **Empowering**: Building confidence and understanding, not fear
- **Progressive**: Start simple, gradually build advanced privacy habits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add new privacy tasks or improve existing features
4. Test thoroughly across devices
5. Submit a pull request with clear description

### Content Contributions
We especially welcome:
- New privacy task content
- Improved instructions for existing tasks
- Better explanations of privacy concepts
- Mobile-specific privacy guidance

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ for digital privacy advocates everywhere.
