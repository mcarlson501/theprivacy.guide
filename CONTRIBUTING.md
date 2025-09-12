# Contributing to The Privacy Guide

Thank you for your interest in contributing to The Privacy Guide. We welcome contributions that help make digital privacy more accessible to everyone.

## Ways to Contribute

### Content Contributions
- **Privacy Tasks**: Create new step-by-step privacy guides
- **News Articles**: Write about privacy breaches, tool updates, or policy changes
- **Content Improvements**: Enhance existing content with better explanations or updated steps

### Code Contributions
- **Bug Fixes**: Report and fix issues
- **Feature Development**: Add new functionality to improve user experience
- **Performance**: Optimize loading times and accessibility
- **Mobile Experience**: Improve mobile usability and responsiveness

## Content Guidelines

### Privacy Tasks
- **Clear Language**: Write for non-technical users
- **Step-by-Step Format**: Break complex processes into simple, numbered steps
- **Platform Testing**: Verify instructions work across devices and platforms
- **Appropriate Categories**: Use correct difficulty levels (Quick Win, Essential, Social Media, Advanced)

### News Articles
- **Timely Content**: Focus on recent privacy and security developments
- **Actionable Information**: Always include practical steps users can take
- **Accessible Language**: Translate technical concepts into user-friendly explanations
- **Reliable Sources**: Link to official sources and trusted security resources

## Getting Started

### Development Setup
```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/theprivacy.guide.git
cd theprivacy.guide
npm install
npm run dev
```

### Creating a Branch
```bash
git checkout -b feature/your-feature-name
# or for content:
git checkout -b content/new-task-name
```

## Content Creation Process

### Adding a Privacy Task

1. **Create the markdown file** in `content/tasks/your-task.md`
2. **Use the template** from `docs/content-creation/TASK_TEMPLATE.md`
3. **Follow the frontmatter structure**:
   ```yaml
   ---
   title: 'Your Task Title'
   description: 'Brief description'
   category: 'Quick Win' # or Essential, Social Media, Advanced
   time: '10 minutes'
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

## Technical Contributions

### Development Requirements
- Node.js 18 or higher
- Next.js 14 with App Router
- Tailwind CSS for styling
- Markdown with gray-matter for content processing

### Code Standards
- Follow existing ESLint configuration
- Use consistent indentation and naming conventions
- Document complex logic with clear comments
- Test across multiple browsers and devices

### Pull Request Process
1. Update documentation if functionality changes
2. Test thoroughly across different screen sizes
3. Write clear, descriptive commit messages
4. Link to relevant issues in PR description
5. Respond promptly to review feedback

## Design Guidelines

### Visual Consistency
- Use established brand color palette
- Maintain consistent typography and text styles
- Follow existing layout patterns and spacing
- Use consistent icon styles throughout

### Accessibility Standards
- Ensure sufficient color contrast ratios
- Support keyboard navigation
- Use proper heading structure and alt text
- Ensure touch targets meet minimum size requirements

## Review Process

### Automated Validation
- Markdown syntax validation
- Link checking and verification
- Build process verification

### Human Review Criteria
- Technical accuracy of instructions
- Language appropriate for target audience
- Completeness of all necessary steps
- Security and currency of recommendations

## Community Guidelines

### Professional Standards
- Provide constructive, specific feedback
- Use inclusive, welcoming language
- Be patient when helping newcomers to privacy concepts

### User-Focused Approach
- Prioritize end-user benefit in all changes
- Consider users with varying technical skill levels
- Focus on practical, implementable advice

## Getting Help

### Support Channels
- **GitHub Issues**: Project direction questions and bug reports
- **Documentation**: Comprehensive guides in `/docs` folder
- **Security Issues**: Email concerns privately to maintainers

### Issue Reporting
- **Bug Reports**: Include clear reproduction steps
- **Feature Requests**: Describe the problem being solved
- **Content Issues**: Provide specific accuracy concerns

## License

By contributing to The Privacy Guide, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make digital privacy accessible to everyone.
