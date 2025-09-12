import Image from 'next/image';

export const metadata = {
  title: 'About Us - The Privacy Guide',
  description: 'Learn about our mission to make digital privacy accessible to everyone. Discover why we created The Privacy Guide and how we\'re helping people take control of their data.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-6 sm:py-8 bg-calm-off-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
              <Image
                src="/images/logo.png?v=2"
                alt="The Privacy Guide Logo"
                width={112}
                height={112}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-gray dark:text-dark-text mb-4 sm:mb-6">
            About The Privacy Guide
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-2">
            We believe digital privacy shouldn't be complicated. Our mission is to make 
            online privacy accessible, actionable, and empowering for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-2xl p-6 sm:p-8 border border-friendly-blue/10 dark:border-friendly-blue/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-4 sm:mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                In an age where our personal data is constantly collected, stored, and sold, 
                most people feel overwhelmed by the complexity of digital privacy. Technical 
                guides are often too complicated, and many privacy tools require expertise 
                that regular users simply don't have.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                <strong>The Privacy Guide changes that.</strong> We break down complex privacy 
                concepts into simple, actionable tasks that anyone can complete. No technical 
                background required – just a desire to take control of your digital life.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our gamified approach makes privacy protection engaging and rewarding. Earn 
                points, unlock badges, and track your progress as you build better digital 
                privacy habits one task at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-6 sm:mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text">Accessible</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Privacy protection should be available to everyone, regardless of technical 
                expertise. We use clear language and simple steps that anyone can follow.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-success-teal/10 dark:bg-success-teal/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-success-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text">Actionable</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Every piece of content leads to concrete action. We don't just explain 
                problems – we provide specific, practical solutions you can implement today.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text">Empowering</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in giving people control over their digital lives. Our approach 
                builds confidence and understanding, not fear and confusion.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text">Progressive</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Start with quick wins and gradually build more advanced privacy habits. 
                Our progressive approach ensures everyone can make meaningful improvements.
              </p>
            </div>

            <div className="card md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text">Independent & Unbiased</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                We don't accept advertising, sponsorships, or affiliate commissions that could compromise our recommendations. 
                Our task recommendations are based solely on security research, community feedback, and real-world effectiveness — never financial incentives.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                This independence ensures you get honest, practical advice that's in your best interest, not ours.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-friendly-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Choose a Task</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our library of privacy tasks, from quick 5-minute wins to more 
                comprehensive privacy overhauls.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Follow the Guide</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each task includes clear explanations of why it matters and step-by-step 
                instructions that anyone can follow.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Earn Rewards</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your progress, earn points and badges, and build a comprehensive 
                privacy foundation over time.
              </p>
            </div>
          </div>
        </section>

        {/* Note for the Nerds */}
        <section className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
              A Note for our Privacy Nerds
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Yes, we know.</strong> There are more secure password managers than Bitwarden, 
                better VPNs than what we recommend, and more hardened browsers than the mainstream options we suggest.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our recommendations prioritize <em>adoption over perfection</em>. A beginner who actually uses 
                Bitwarden is infinitely more secure than one intimidated by KeePassXC. If a user abandons 
                our suggestion because it's too complex, we've failed our mission.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                For comprehensive privacy resources that dive deeper into threat modeling, OPSEC, 
                and advanced techniques, there are excellent resources available across the privacy community. 
                We're here to get people started—you're here to take them further.
              </p>
            </div>
          </div>
        </section>

        {/* Transparency & Trust Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-6 sm:mb-8 text-center">Our Commitment to You</h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
            <div className="card h-full flex flex-col">
              <div className="flex-shrink-0 mb-4">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-3 flex items-center">
                  <svg className="w-6 h-6 text-success-teal mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Complete Privacy
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Privacy-first analytics with no personal data collection or tracking.
                </p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>No user accounts or personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>Progress stored locally on your device</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>No tracking cookies or advertising</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>No email lists or marketing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card h-full flex flex-col">
              <div className="flex-shrink-0 mb-4">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-3 flex items-center">
                  <svg className="w-6 h-6 text-success-teal mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Transparent Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  <strong>GoatCounter Analytics:</strong> Open-source, privacy-first service for basic site metrics.
                </p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm mb-3">
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>Only aggregate data ("20 visitors today")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>No IP addresses, cookies, or identifiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>Cannot track across websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-teal mr-2 flex-shrink-0">•</span>
                    <span>GDPR compliant</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a href="/privacy" className="text-xs text-friendly-blue hover:underline italic">
                    Full privacy details →
                  </a>
                </div>
              </div>
            </div>

            <div className="card h-full flex flex-col">
              <div className="flex-shrink-0 mb-4">
                <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-3 flex items-center">
                  <svg className="w-6 h-6 text-friendly-blue mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Open Source
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Full transparency with complete source code availability and community involvement.
                </p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-friendly-blue mr-2 flex-shrink-0">•</span>
                    <span>Full source code on GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-friendly-blue mr-2 flex-shrink-0">•</span>
                    <span>See exactly how we protect privacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-friendly-blue mr-2 flex-shrink-0">•</span>
                    <span>Community contributions welcome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-friendly-blue mr-2 flex-shrink-0">•</span>
                    <span>Regular security audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-friendly-blue mr-2 flex-shrink-0">•</span>
                    <span>No hidden functionality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-6 sm:mb-8 text-center">Get Involved</h2>
          
          <div className="bg-gradient-to-br from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-2xl p-6 sm:p-8 border border-friendly-blue/10 dark:border-friendly-blue/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-4">Help Us Improve Privacy for Everyone</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                The Privacy Guide is a community effort. Whether you're a privacy expert, developer, or someone who's 
                learned from our tasks, there are many ways to contribute to making digital privacy more accessible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-dark-bg rounded-lg p-6">
                <h4 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3 flex items-center">
                  <svg className="w-5 h-5 text-friendly-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Contribute on GitHub
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Help improve our code, suggest new tasks, fix bugs, or enhance the user experience.
                </p>
                <a 
                  href="https://github.com/mcarlson501/theprivacy.guide" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-friendly-blue hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              <div className="bg-white dark:bg-dark-bg rounded-lg p-6">
                <h4 className="font-semibold text-charcoal-gray dark:text-dark-text mb-3 flex items-center">
                  <svg className="w-5 h-5 text-success-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Share Feedback & Ideas
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Suggest new privacy tasks, report issues, or share your experience with our existing guides.
                </p>
                <a 
                  href="https://github.com/mcarlson501/theprivacy.guide/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-success-teal hover:text-teal-600 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Open an Issue
                </a>
              </div>
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Every contribution, no matter how small, helps make digital privacy more accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-friendly-blue to-success-teal dark:from-indigo-800 dark:to-teal-800 rounded-2xl p-8 text-white border border-transparent dark:border-gray-600/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
            <p className="text-xl text-blue-100 dark:text-gray-200 mb-6">
              Join thousands of people who are already protecting their digital privacy 
              with our simple, actionable approach.
            </p>
            <a 
              href="/tasks"
              className="bg-white dark:bg-gray-800 text-friendly-blue dark:text-blue-400 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors inline-block shadow-lg dark:shadow-none"
            >
              Start Your First Task
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
