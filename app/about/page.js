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
                    <path fillRule="evenodd" d="M10 2L3 7v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7l-7-5zM10 9a1 1 0 100 2 1 1 0 000-2z" />
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
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
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
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
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
