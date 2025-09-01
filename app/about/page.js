export const metadata = {
  title: 'About Us - The Privacy Guide',
  description: 'Learn about our mission to make digital privacy accessible to everyone. Discover why we created The Privacy Guide and how we\'re helping people take control of their data.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 bg-calm-off-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-gray dark:text-dark-text mb-6">
            About The Privacy Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We believe digital privacy shouldn't be complicated. Our mission is to make 
            online privacy accessible, actionable, and empowering for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-friendly-blue/5 to-success-teal/5 dark:from-friendly-blue/10 dark:to-success-teal/10 rounded-2xl p-8 border border-friendly-blue/10 dark:border-friendly-blue/20">
            <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In an age where our personal data is constantly collected, stored, and sold, 
                most people feel overwhelmed by the complexity of digital privacy. Technical 
                guides are often too complicated, and many privacy tools require expertise 
                that regular users simply don't have.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
