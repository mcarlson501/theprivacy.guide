// Accessibility utilities for content processing

/**
 * Enhances HTML content with accessibility improvements
 */
export function enhanceContentAccessibility(htmlContent) {
  if (!htmlContent) return '';
  
  // Add alt text to images that don't have it
  const enhancedContent = htmlContent
    // Add alt text to images without alt attributes
    .replace(/<img(?![^>]*alt=)[^>]*src="([^"]*)"[^>]*>/gi, (match, src) => {
      // Extract filename and create descriptive alt text
      const filename = src.split('/').pop().split('.')[0];
      const altText = filename
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      return match.replace('>', ` alt="${altText} - Privacy guide illustration">`);
    })
    // Ensure all images have proper alt text
    .replace(/<img([^>]*)alt=""([^>]*)>/gi, '<img$1alt="Decorative image"$2>')
    // Add screen reader text for icons that are purely decorative
    .replace(/<svg([^>]*)(class="[^"]*w-\d+[^"]*")([^>]*)>/gi, '<svg$1$2$3 aria-hidden="true">')
    // Enhance link accessibility
    .replace(/<a\s+href="([^"]*)"(?![^>]*aria-label)([^>]*)>/gi, (match, href, rest) => {
      if (href.startsWith('http')) {
        return `<a href="${href}" aria-label="External link" target="_blank" rel="noopener noreferrer"${rest}>`;
      }
      return match;
    })
    // Add proper table headers where missing
    .replace(/<table[^>]*>/gi, (match) => {
      if (!match.includes('role=')) {
        return match.replace('>', ' role="table">');
      }
      return match;
    })
    // Ensure proper heading hierarchy
    .replace(/<h(\d)([^>]*)>/gi, (match, level, attributes) => {
      // Add proper ARIA attributes to headings
      if (!attributes.includes('id=')) {
        const id = `heading-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        return `<h${level} id="${id}"${attributes}>`;
      }
      return match;
    });
  
  return enhancedContent;
}

/**
 * Generates descriptive alt text for common privacy-related images
 */
export function generatePrivacyAltText(imageSrc, context = '') {
  const commonPatterns = {
    'browser': 'Web browser interface showing privacy settings',
    'settings': 'Settings menu or configuration panel',
    'lock': 'Security lock icon representing data protection',
    'shield': 'Shield icon symbolizing privacy protection',
    'key': 'Key icon representing encryption or secure access',
    'eye': 'Eye icon related to visibility or privacy controls',
    'phone': 'Mobile phone or smartphone device',
    'computer': 'Computer or laptop device',
    'password': 'Password field or security credential interface',
    'two-factor': 'Two-factor authentication setup screen',
    '2fa': 'Two-factor authentication interface',
    'vpn': 'VPN (Virtual Private Network) connection interface',
    'cookie': 'Cookie settings or web tracking controls',
    'tracking': 'Privacy tracking or data collection controls',
    'social': 'Social media platform privacy settings',
    'facebook': 'Facebook privacy settings interface',
    'google': 'Google account or service privacy controls',
    'apple': 'Apple device or iCloud privacy settings',
    'android': 'Android device privacy settings',
    'ios': 'iOS device privacy settings'
  };
  
  const filename = imageSrc.toLowerCase();
  
  for (const [pattern, description] of Object.entries(commonPatterns)) {
    if (filename.includes(pattern)) {
      return `${description}${context ? ` - ${context}` : ''}`;
    }
  }
  
  // Fallback to generic description
  return `Privacy guide illustration${context ? ` - ${context}` : ''}`;
}

/**
 * Adds skip links for long content sections
 */
export function addSkipLinks(content, sections = []) {
  if (sections.length === 0) return content;
  
  const skipLinksHtml = `
    <div class="skip-links mb-4" role="navigation" aria-label="Skip to section">
      <p class="text-sm text-gray-600 mb-2">Quick navigation:</p>
      <ul class="flex flex-wrap gap-2">
        ${sections.map((section, index) => `
          <li>
            <a href="#section-${index}" 
               class="inline-block px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-friendly-blue focus:ring-offset-2">
              ${section}
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
  
  return skipLinksHtml + content;
}

/**
 * Process content for better screen reader experience
 */
export function enhanceForScreenReaders(content) {
  return content
    // Add context to numbered lists
    .replace(/<ol[^>]*>/gi, '<ol role="list">')
    .replace(/<ul[^>]*>/gi, '<ul role="list">')
    // Add context to definition lists
    .replace(/<dl[^>]*>/gi, '<dl role="list">')
    // Enhance button accessibility
    .replace(/<button(?![^>]*aria-label)([^>]*)>([^<]*)</gi, '<button aria-label="$2"$1>$2<')
    // Add landmark roles where appropriate
    .replace(/<div class="[^"]*tip[^"]*"[^>]*>/gi, (match) => {
      return match.replace('>', ' role="note" aria-label="Tip">');
    })
    .replace(/<div class="[^"]*warning[^"]*"[^>]*>/gi, (match) => {
      return match.replace('>', ' role="alert" aria-label="Warning">');
    })
    .replace(/<div class="[^"]*info[^"]*"[^>]*>/gi, (match) => {
      return match.replace('>', ' role="note" aria-label="Information">');
    });
}
