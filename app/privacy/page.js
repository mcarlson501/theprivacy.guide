export const metadata = {
  title: 'Privacy Policy - The Privacy Guide',
  description: 'Learn how The Privacy Guide protects your privacy. We practice what we preach with minimal data collection and complete user control.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-gray dark:text-dark-text mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We don't just teach privacy – we live it. Here's exactly how we protect yours.
          </p>
          <div className="mt-6 flex justify-center items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Effective Date: August 31, 2025</span>
            <span>•</span>
            <span>Last Updated: September 11, 2025</span>
          </div>
        </div>

        {/* Privacy-First Promise */}
        <div className="bg-gradient-to-br from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-2xl p-8 border border-friendly-blue/10 dark:border-friendly-blue/20 mb-12">
          <h2 className="text-2xl font-bold text-charcoal-gray dark:text-dark-text mb-4">Our Privacy Promise</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>The short version:</strong> We collect minimal data, store everything locally on your device, 
            and never share your information with anyone.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-2">✅ What We Do</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Store your progress locally on your device</li>
                <li>• Give you complete control over your data</li>
                <li>• Use minimal technical data for website improvement</li>
                <li>• Practice privacy by design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-2">❌ What We Don't Do</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Collect personal information or emails</li>
                <li>• Use tracking cookies or invasive analytics</li>
                <li>• Share data with third parties</li>
                <li>• Store your personal data on our servers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">Information We Collect</h2>
          
          <h3 className="text-2xl font-semibold text-charcoal-gray dark:text-dark-text mb-6 mt-10">What We Do Collect</h3>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-6 mb-6">
            <h4 className="text-green-800 dark:text-green-300 font-semibold mb-3">Local Progress Data (Stored on Your Device Only)</h4>
            <ul className="text-green-700 dark:text-green-300 space-y-1">
              <li>• Task completion status (which privacy tasks you've completed)</li>
              <li>• Points earned and badges awarded</li>
              <li>• Your privacy level progression</li>
              <li>• Timestamps of when tasks were completed</li>
            </ul>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-800/30 rounded border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 text-sm mb-0">
                <strong>Important:</strong> This data never leaves your device unless you explicitly export it.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-lg p-6 mb-6">
            <h4 className="text-blue-800 dark:text-blue-300 font-semibold mb-3">Website Analytics (Privacy-Friendly)</h4>
            <div className="space-y-3 text-blue-700 dark:text-blue-300">
              <p><strong>GoatCounter Analytics:</strong> We use GoatCounter, an open-source, privacy-friendly analytics service to understand how our website is used.</p>
              <p><strong>What's Collected (Aggregate Only):</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Page visits and referrer information</li>
                <li>• Browser type and screen width (for responsive design)</li>
                <li>• General geographic location (country level only)</li>
                <li>• Basic website usage patterns for improving user experience</li>
              </ul>
              <p><strong>What's NOT Collected:</strong></p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• No IP addresses stored</li>
                <li>• No cookies or tracking identifiers</li>
                <li>• No personal information or user profiles</li>
                <li>• No cross-site tracking capabilities</li>
              </ul>
              <p className="text-sm font-medium mt-3">
                GoatCounter stores only aggregate data that cannot be used to identify individual users. 
                It operates under GDPR compliance on a legitimate interest basis.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/30 rounded-lg p-6 mb-6">
            <h4 className="text-orange-800 dark:text-orange-300 font-semibold mb-3">Hosting Infrastructure (Cloudflare Pages)</h4>
            <div className="space-y-3 text-orange-700 dark:text-orange-300 text-sm">
              <p><strong>CDN and Hosting:</strong> This website is hosted on Cloudflare Pages, which provides content delivery and DDoS protection.</p>
              <p><strong>Server Logs:</strong> Cloudflare may temporarily log basic request information (IP addresses, request time, URL requested) for security and performance purposes. These logs are automatically deleted per Cloudflare's data retention policies.</p>
              <p><strong>No Analytics Tracking:</strong> We have disabled Cloudflare Web Analytics and other tracking features to protect your privacy.</p>
              <p><strong>Data Location:</strong> Static website files are distributed globally through Cloudflare's network, but no personal data is stored on these servers.</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-charcoal-gray dark:text-dark-text mb-6 mt-10">What We Don't Collect</h3>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/30 rounded-lg p-6 mb-6">
            <p className="text-red-800 dark:text-red-300 font-semibold mb-3">We DO NOT collect, store, or have access to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                <li>❌ Your name, email address, or personal identifiers</li>
                <li>❌ Your IP address or location data</li>
                <li>❌ Browsing history across other websites</li>
                <li>❌ Content of the privacy tasks you complete</li>
              </ul>
              <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                <li>❌ Financial information or payment data</li>
                <li>❌ Device identifiers or advertising IDs</li>
                <li>❌ Social media profiles or accounts</li>
                <li>❌ Any data that could personally identify you</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">How We Store Your Data</h2>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/30 rounded-lg p-6 mb-6">
            <h3 className="text-purple-800 dark:text-purple-300 font-semibold mb-3">Local Storage Only</h3>
            <div className="space-y-3 text-purple-700 dark:text-purple-300">
              <p><strong>Your progress data stays on your device</strong> – We use browser localStorage to save your task completion progress</p>
              <p><strong>No server uploads</strong> – Your data never leaves your device unless you explicitly export it</p>
              <p><strong>You control everything</strong> – You can view, export, or delete your data at any time through our Settings page</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">Data Sharing and Third Parties</h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-lg p-6 mb-6">
            <h3 className="text-yellow-800 dark:text-yellow-300 font-semibold mb-3">We Don't Share Your Data</h3>
            <p className="text-yellow-700 dark:text-yellow-300 mb-3"><strong>Period.</strong> We have no servers storing your personal data, so there's nothing to share.</p>
            
            <h4 className="text-yellow-800 dark:text-yellow-300 font-semibold mb-2">Third-Party Services</h4>
            <div className="space-y-3 text-yellow-700 dark:text-yellow-300 text-sm">
              <p>
                <strong>Cloudflare Pages (Hosting Provider):</strong> Our website infrastructure is provided by Cloudflare. 
                They may process basic technical data (IP addresses, request headers) as part of their CDN and security services. 
                Cloudflare operates under their own privacy policy and GDPR compliance framework.
              </p>
              <p>
                <strong>Self-Hosted Fonts:</strong> We use self-hosted system fonts for typography. No external font requests are made to Google or other services.
              </p>
              <p>
                <strong>GoatCounter Analytics:</strong> We use GoatCounter for privacy-friendly website analytics. GoatCounter is an open-source service that collects only aggregate, non-personal data and operates under GDPR compliance. No personal data is shared with GoatCounter.
              </p>
              <p>
                <strong>No Invasive Tracking:</strong> We don't use Google Analytics, Facebook Pixel, advertising networks, social media plugins, or any other services that create user profiles or track you across websites.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">Your Rights and Control</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3">📊 Data Access</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li><strong>View your data:</strong> Use our Settings page to see all stored progress data</li>
                <li><strong>Export your data:</strong> Download a complete copy in JSON format</li>
                <li><strong>Delete your data:</strong> Clear all progress with one click</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3">🔄 Data Portability</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li><strong>Export progress:</strong> Back up to your own files</li>
                <li><strong>Import progress:</strong> Restore or transfer between devices</li>
                <li><strong>No vendor lock-in:</strong> Your data is in standard format</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg p-6">
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3">⚡ Immediate Control</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li><strong>No requests needed:</strong> All data is on your device</li>
                <li><strong>Instant deletion:</strong> Clear browser storage anytime</li>
                <li><strong>Complete ownership:</strong> You control everything</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">Data Security</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3">🔒 Technical Safeguards</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>No central database</strong> – No personal data to breach since everything is stored locally</li>
              <li><strong>HTTPS encryption</strong> – All website traffic is encrypted in transit via Cloudflare's SSL/TLS</li>
              <li><strong>Content Security Policy</strong> – Comprehensive CSP headers prevent XSS attacks and restrict external connections to only our analytics endpoint</li>
              <li><strong>Security headers</strong> – Additional protections including X-Frame-Options, X-Content-Type-Options, and Permissions-Policy</li>
              <li><strong>DDoS protection</strong> – Cloudflare provides enterprise-grade security to keep the site available</li>
              <li><strong>No login vulnerabilities</strong> – No accounts mean no password breaches</li>
              <li><strong>Minimal attack surface</strong> – We can't lose what we don't collect or store</li>
              <li><strong>Static site architecture</strong> – No server-side processing reduces security vulnerabilities</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">Contact Us</h2>
          
          <div className="bg-calm-off-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg p-6 mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If you have questions about this privacy policy or privacy concerns, please contact us at:
            </p>
            <p className="text-lg font-semibold mb-3">
              <a 
                href="mailto:privacy@theprivacy.guide" 
                className="text-friendly-blue hover:text-blue-600 hover:underline transition-colors"
              >
                privacy@theprivacy.guide
              </a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              We typically respond to privacy inquiries within 48 hours.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 mt-12 pb-4 border-b-2 border-friendly-blue/20 dark:border-friendly-blue/40">Summary: Privacy by Design</h2>
          
          <div className="bg-gradient-to-r from-friendly-blue/10 to-success-teal/10 dark:from-friendly-blue/20 dark:to-success-teal/20 rounded-lg p-8 border border-friendly-blue/20 dark:border-friendly-blue/30">
            <p className="text-lg text-charcoal-gray dark:text-dark-text mb-4">
              At The Privacy Guide, we've built privacy protection into our very architecture:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-charcoal-gray dark:text-dark-text">
                <li className="flex items-start">
                  <span className="text-success-teal mr-2">✅</span>
                  <span>No user accounts or personal information collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-teal mr-2">✅</span>
                  <span>All data stored locally on your device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-teal mr-2">✅</span>
                  <span>Privacy-first analytics with no personal data collection</span>
                </li>
              </ul>
              <ul className="space-y-2 text-charcoal-gray dark:text-dark-text">
                <li className="flex items-start">
                  <span className="text-success-teal mr-2">✅</span>
                  <span>No advertising or marketing data collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-teal mr-2">✅</span>
                  <span>Complete user control over all data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success-teal mr-2">✅</span>
                  <span>No servers storing your personal information</span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-charcoal-gray dark:text-dark-text mt-6 font-medium">
              We don't just teach privacy – we live it. Your journey to better digital privacy starts with a website that already respects yours.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
