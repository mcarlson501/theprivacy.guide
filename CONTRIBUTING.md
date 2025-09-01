# Contributing to The Privacy Guide

Thank you for your interest in contributing to The Privacy Guide! We welcome contributions that help make digital privacy more accessible to everyone.

## 🎯 Ways to Contribute

### Content Contributions
- **Privacy Tasks**: Create new step-by-step privacy guides
- **News Articles**: Write about privacy breaches, tool updates, or policy changes
- **Improvements**: Enhance existing content with better explanations or updated steps

### Code Contributions
- **Bug Fixes**: Report and fix issues
- **Features**: Add new functionality to improve user experience
- **Performance**: Optimize loading times and accessibility
- **Mobile**: Improve mobile experience and responsiveness

## 📋 Content Guidelines

### Privacy Tasks
- **Clear Language**: Write for non-technical users
- **Step-by-Step**: Break complex processes into simple steps
- **Screenshots**: Include helpful visuals when possible
- **Testing**: Verify instructions work on multiple devices/platforms
- **Categories**: Use appropriate difficulty levels (Quick Win, Essential, Advanced, Expert)

### News Articles
- **Timely**: Focus on recent privacy/security developments
- **Actionable**: Always include "what users should do"
- **Accessible**: Translate tech news into user-friendly language
- **Sources**: Link to official sources and trusted security sites

## 🚀 Getting Started

### 1. Fork and Clone
```bash
git fork https://github.com/mcarlson501/theprivacy.guide
git clone https://github.com/YOUR_USERNAME/theprivacy.guide.git
cd theprivacy.guide
```

### 2. Set Up Development Environment
```bash
npm install
npm run dev
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b content/new-task-name
```

## 📝 Content Creation Process

### Adding a Privacy Task

1. **Create the markdown file** in `content/tasks/your-task.md`
2. **Use the template** from `docs/content-creation/TASK_TEMPLATE.md`
3. **Follow the frontmatter structure**:
   ```yaml
   ---
   title: 'Your Task Title'
   description: 'Brief description'
   category: 'Quick Win' # or Essential, Advanced, Expert
   time: '⏱️ About 10 minutes'
   points: 50
   ---
   ```
4. **Test the task** on different devices and platforms
5. **Submit a pull request**

### Adding a News Article

1. **Create the markdown file** in `content/news/article-name.md`
2. **Use the template** from `docs/content-creation/NEWS_ARTICLE_TEMPLATE.md`
3. **Follow the frontmatter structure**:
   ```yaml
   ---
   title: "Article Title"
   date: "YYYY-MM-DD"
   category: "Data Breaches" # or Consumer Alerts, Tool Updates, etc.
   summary: "Brief summary under 160 characters"
   relatedTasks: ["task-slug-1", "task-slug-2"]
   ---
   ```
4. **Fact-check** against original sources
5. **Submit a pull request**

## 🔧 Technical Contributions

### Development Setup
- **Node.js 18+** required
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Markdown** with gray-matter for content

### Code Standards
- **ESLint**: Follow the existing linting rules
- **Formatting**: Use consistent indentation and naming
- **Comments**: Document complex logic
- **Testing**: Test on multiple browsers and devices

### Pull Request Process
1. **Update documentation** if you change functionality
2. **Test thoroughly** across different screen sizes
3. **Write clear commit messages**
4. **Link to relevant issues** in your PR description
5. **Be responsive** to feedback during review

## 🎨 Design Guidelines

### Visual Consistency
- **Colors**: Use the established brand palette
- **Typography**: Maintain consistent text styles
- **Spacing**: Follow existing layout patterns
- **Icons**: Use consistent icon styles

### Accessibility
- **Contrast**: Ensure sufficient color contrast
- **Navigation**: Support keyboard navigation
- **Screen Readers**: Use proper heading structure and alt text
- **Mobile**: Ensure touch targets are appropriately sized

## 📊 Content Review Process

### Automatic Checks
- Markdown syntax validation
- Link checking
- Build verification

### Human Review
- **Accuracy**: Technical accuracy of instructions
- **Clarity**: Language appropriate for target audience
- **Completeness**: All necessary steps included
- **Safety**: Recommendations are secure and current

## 🤝 Community Guidelines

### Be Respectful
- **Constructive Feedback**: Focus on improving content, not criticizing contributors
- **Inclusive Language**: Use welcoming, inclusive language
- **Patient Teaching**: Remember that privacy is new to many people

### Focus on Users
- **User-First**: Every change should benefit end users
- **Accessibility**: Consider users with different technical skills
- **Practical**: Prioritize actionable, implementable advice

## ❓ Getting Help

### Questions About Contributing
- **Open an Issue**: For questions about the project direction
- **Discussions**: For general questions and community chat
- **Documentation**: Check the `/docs` folder for detailed guides

### Technical Issues
- **Bug Reports**: Use the issue tracker with clear reproduction steps
- **Feature Requests**: Describe the problem you're trying to solve
- **Security Issues**: Email security concerns privately

## 📄 License

By contributing to The Privacy Guide, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make digital privacy accessible to everyone! 🔒
