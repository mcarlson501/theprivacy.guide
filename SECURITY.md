# Security Policy

## Supported Versions

We actively maintain and provide security updates for the latest version of The Privacy Guide.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow these steps:

### For Security Issues
**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please email security concerns to: **privacy@theprivacy.guide**

Include the following information:
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact assessment
- Any suggested fixes (if available)

### Response Timeline
- **Initial Response**: Within 48 hours
- **Assessment**: Within 1 week
- **Fix Timeline**: Varies based on severity
- **Public Disclosure**: After fix is deployed

### What to Expect
1. **Acknowledgment**: We'll confirm receipt of your report
2. **Investigation**: We'll investigate and assess the impact
3. **Resolution**: We'll develop and test a fix
4. **Disclosure**: We'll coordinate responsible disclosure

## Security Best Practices

### Recent Security Enhancements (September 2025)

#### **JSON Import Security Hardening**
We've implemented enterprise-grade security measures for the progress data import functionality:

- **Input Validation**: Comprehensive type checking, length limits (50KB max), and format validation
- **Data Sanitization**: Strict filtering of allowed characters and property whitelisting
- **Protection Against Attacks**: JSON bomb prevention, memory exhaustion protection, and injection attack mitigation
- **Error Handling**: Secure error messaging that doesn't expose system internals
- **Multi-Layer Defense**: Client-side and server-side validation with real-time input limiting

#### **Privacy-by-Design Architecture**
- **Minimal Data Collection**: Privacy-first analytics using GoatCounter (aggregate data only, no personal information, cookies, or cross-site tracking)
- **No Personal Data Storage**: No user accounts, emails, or identifiable information
- **Local Storage Only**: User progress stored locally on device
- **No External Dependencies**: Self-hosted assets prevent data leakage
- **User Data Control**: Full export, import, and deletion capabilities

### For Contributors
- **Dependencies**: Keep dependencies updated and regularly audit for vulnerabilities
- **Code Review**: All code changes require security-focused review
- **Input Validation**: Implement comprehensive validation for any user input
- **Testing**: Include security considerations and edge case testing
- **Documentation**: Keep security documentation current with implementation

### For Users
- **Updates**: Keep your installation updated with latest security patches
- **Environment**: Use secure hosting environments and HTTPS
- **Configuration**: Follow security configuration guides and best practices
- **Data Control**: Utilize built-in export/import features for data portability
- **Monitoring**: Monitor for security advisories

## Security Features

### Built-in Security
- **Static Generation**: No server-side vulnerabilities
- **Client-Side Only**: Minimal attack surface
- **No Authentication**: No user data stored
- **Local Storage**: Progress data stays on device
- **Content Security Policy**: Comprehensive CSP headers preventing XSS attacks and unauthorized script execution
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy for defense in depth

### Privacy Protection
- **Privacy-First Analytics**: GoatCounter for aggregate usage data (no personal data, cookies, or user tracking)
- **Self-Hosted Assets**: No external resource loading beyond analytics
- **Local Progress**: All user data stays on your device
- **No Invasive Tracking**: No advertising networks, social media pixels, or cross-site tracking
- **Restricted External Connections**: CSP policy only allows connections to our GoatCounter analytics endpoint (theprivacyguide.goatcounter.com)

## Reporting Other Issues

### Non-Security Bugs
Use the GitHub issue tracker for:
- Feature requests
- Bug reports (non-security)
- Documentation improvements
- General questions

### Content Issues
For privacy task accuracy or content concerns:
- Create a GitHub issue
- Tag with appropriate labels
- Provide clear description of the problem

---

Thank you for helping keep The Privacy Guide secure!
