# Security Policy

## Supported Versions

We actively maintain and provide security updates for the latest version of The Privacy Guide.

| Version | Supported |
| ------- | --------- |
| Latest  | Yes       |
| Older   | No        |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow responsible disclosure practices.

### Security Issues
**DO NOT** create a public GitHub issue for security vulnerabilities.

Email security concerns to: **privacy@theprivacy.guide**

**Include the following information:**
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Suggested fixes (if available)

### Response Timeline
- **Initial Response**: Within 48 hours
- **Assessment**: Within 1 week
- **Fix Development**: Timeline varies by severity
- **Public Disclosure**: After fix deployment

### Process Overview
1. **Acknowledgment**: Confirmation of report receipt
2. **Investigation**: Impact assessment and verification
3. **Resolution**: Fix development and testing
4. **Disclosure**: Coordinated public disclosure

## Security Architecture

### Recent Security Enhancements

**Automated Testing and Quality Monitoring**
- Jest test suite with React Testing Library for component security validation
- SonarCloud integration for continuous security analysis
- GitHub Actions CI/CD pipeline with automated security scanning
- Code coverage reporting to identify untested security-critical paths
- Dependency vulnerability monitoring with automated alerts
- Pull request security reviews with quality gates

**JSON Import Security Hardening**
- Input validation with comprehensive type checking
- 50KB file size limit with format validation
- Data sanitization and property whitelisting
- JSON bomb and memory exhaustion prevention
- Secure error handling without system exposure
- Multi-layer client and server-side validation

**Privacy-by-Design Implementation**
- Minimal data collection via GoatCounter analytics
- No personal data storage or user accounts
- Local-only progress storage on user devices
- Self-hosted assets preventing data leakage
- Complete user control over data export/import/deletion

### Security Guidelines

**For Contributors**
- Keep dependencies updated with regular vulnerability audits
- All code changes require security-focused review with automated quality gates
- Run `npm test` before submitting pull requests
- Maintain or improve test coverage for security-critical components
- Implement comprehensive input validation with corresponding tests
- Include security testing for edge cases
- Maintain current security documentation
- Monitor SonarCloud reports for security hotspots and vulnerabilities

**For Users and Deployers**
- Keep installations updated with latest security patches
- Use secure hosting environments with HTTPS
- Follow configuration security best practices
- Utilize built-in data export/import features
- Monitor security advisories and updates

## Built-in Security Features

**Application Security**
- Static site generation eliminates server-side vulnerabilities
- Client-side only architecture minimizes attack surface
- No authentication system or stored user data
- Local storage keeps progress data on user devices
- Comprehensive Content Security Policy headers
- Security headers including X-Frame-Options and X-Content-Type-Options
- Automated security testing with Jest and React Testing Library
- Continuous security monitoring via SonarCloud analysis
- GitHub Actions CI/CD pipeline with security scanning on every commit

**Privacy Protection**
- GoatCounter analytics with no personal data collection
- Self-hosted assets with minimal external dependencies
- No tracking, cookies, or cross-site data sharing
- Restricted external connections limited to analytics endpoint
- No advertising networks or social media integration

## Issue Reporting

### Non-Security Issues
Use GitHub Issues for:
- Feature requests and enhancements
- Non-security bug reports
- Documentation improvements
- General project questions

### Content Accuracy
For privacy task accuracy or content concerns:
- Create a GitHub issue with appropriate labels
- Provide clear description of the problem
- Include relevant sources or corrections

---

Thank you for helping keep The Privacy Guide secure.
