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
            <span>Last Updated: August 31, 2025</span>
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
                <li>• Use tracking cookies or analytics</li>
                <li>• Share data with third parties</li>
                <li>• Store your data on our servers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-charcoal-gray dark:text-dark-text">Information We Collect</h2>
          
          <h3 className="text-charcoal-gray dark:text-dark-text">What We Do Collect</h3>
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
            <h4 className="text-blue-800 dark:text-blue-300 font-semibold mb-3">Technical Information (No Personal Identification)</h4>
            <ul className="text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Basic website usage patterns for improving user experience</li>
              <li>• Error logs to help us fix technical issues</li>
              <li>• Device type (mobile/desktop) for responsive design optimization</li>
            </ul>
            <p className="text-blue-700 dark:text-blue-300 text-sm mt-3 mb-0">
              This information cannot be used to identify you personally.
            </p>
          </div>

          <h3 className="text-charcoal-gray dark:text-dark-text">What We Don't Collect</h3>
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

          <h2 className="text-charcoal-gray dark:text-dark-text">How We Store Your Data</h2>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/30 rounded-lg p-6 mb-6">
            <h3 className="text-purple-800 dark:text-purple-300 font-semibold mb-3">Local Storage Only</h3>
            <div className="space-y-3 text-purple-700 dark:text-purple-300">
              <p><strong>Your progress data stays on your device</strong> – We use browser localStorage to save your task completion progress</p>
              <p><strong>No server uploads</strong> – Your data never leaves your device unless you explicitly export it</p>
              <p><strong>You control everything</strong> – You can view, export, or delete your data at any time through our Settings page</p>
            </div>
          </div>

          <h2 className="text-charcoal-gray dark:text-dark-text">Data Sharing and Third Parties</h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/30 rounded-lg p-6 mb-6">
            <h3 className="text-yellow-800 dark:text-yellow-300 font-semibold mb-3">We Don't Share Your Data</h3>
            <p className="text-yellow-700 dark:text-yellow-300 mb-3"><strong>Period.</strong> We have no servers storing your personal data, so there's nothing to share.</p>
            
            <h4 className="text-yellow-800 dark:text-yellow-300 font-semibold mb-2">Third-Party Services</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-2">
              <strong>Self-Hosted Fonts:</strong> We use self-hosted system fonts for typography. No external font requests are made to Google or other services.
            </p>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-0">
              <strong>No Other Third Parties:</strong> We don't use analytics services, advertising networks, social media plugins, font delivery services, or any other third-party services that collect user data.
            </p>
          </div>

          <h2 className="text-charcoal-gray dark:text-dark-text">Your Rights and Control</h2>
          
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

          <h2 className="text-charcoal-gray dark:text-dark-text">Data Security</h2>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3">🔒 Technical Safeguards</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>No central database</strong> – No data to breach since everything is local</li>
              <li><strong>HTTPS encryption</strong> – All website traffic is encrypted in transit</li>
              <li><strong>No login vulnerabilities</strong> – No accounts mean no password breaches</li>
              <li><strong>Minimal attack surface</strong> – We can't lose what we don't have</li>
            </ul>
          </div>

          <h2 className="text-charcoal-gray dark:text-dark-text">Contact Us</h2>
          
          <div className="bg-calm-off-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-lg p-6 mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              If you have questions about this privacy policy or privacy concerns, please contact us.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              <strong>Note:</strong> Specific contact information will be established as the website develops.
            </p>
          </div>

          <h2 className="text-charcoal-gray dark:text-dark-text">Summary: Privacy by Design</h2>
          
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
                  <span>No third-party tracking or analytics</span>
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
