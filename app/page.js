import Link from 'next/link'
import ProgressCard from '../components/ProgressCard'
import PrivacyPulseWidget from '../components/PrivacyPulseWidget'
import { getAllTasksData, getTotalPossiblePoints } from '../lib/tasks'
import { getRecentNews } from '../lib/news'

export default async function Home() {
  const [totalPoints, allTasks, recentNews] = await Promise.all([
    getTotalPossiblePoints(),
    getAllTasksData(),
    getRecentNews(3).catch(() => []) // Fallback to empty array if news loading fails
  ]);
  const totalTasks = allTasks.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-friendly-blue via-blue-600 to-success-teal dark:from-blue-800 dark:via-blue-900 dark:to-teal-800 text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Take Control of Your{' '}
                <span className="text-success-teal dark:text-teal-300">Digital Privacy</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 dark:text-blue-200 leading-relaxed">
                Simple, actionable steps to protect yourself online. No tech expertise required – 
                just follow our guided tasks and build better privacy habits.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="/tasks"
                  className="bg-success-teal hover:bg-teal-400 dark:bg-teal-500 dark:hover:bg-teal-400 text-charcoal-gray dark:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 text-center hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-300/50"
                >
                  Start Your Privacy Journey
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-friendly-blue dark:hover:bg-gray-100 dark:hover:text-blue-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10">
                <ProgressCard totalPossiblePoints={totalPoints} totalTasks={totalTasks} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
              Why Privacy Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every day, companies collect your personal data. Take back control with our 
              easy-to-follow privacy tasks designed for real people, not tech experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-friendly-blue dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Simple & Secure</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                No complex tech jargon. Just clear, step-by-step instructions that anyone can follow 
                to improve their digital privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-teal/10 dark:bg-success-teal/20 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-success-teal dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Track Progress</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Earn points and badges as you complete privacy tasks. See your progress and 
                stay motivated on your privacy journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Made for Everyone</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Whether you're a complete beginner or privacy-conscious user, our tasks are 
                designed to be approachable and empowering.
              </p>
            </div>
          </div>

          {/* "Nothing to Hide" Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-4 max-w-3xl mx-auto leading-tight">
                  "I Have Nothing to Hide" —<br className="hidden sm:block" />
                  <span className="block sm:inline"> Here's Why Privacy Still Matters</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Privacy isn't about hiding wrongdoing — it's about protecting what's rightfully yours.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-3">
                    Your Personal Life Matters
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You lock your front door, close your curtains, and keep personal conversations private. 
                    Digital privacy is the same — it's about having control over your personal space and information.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-3">
                    Your Data Has Value
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Companies spend billions collecting your data because it's valuable. Your browsing habits, 
                    location data, and personal preferences are being sold to advertisers and data brokers.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-3">
                    Surveillance is Growing
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Governments around the world are expanding surveillance programs. What's legal today 
                    might be restricted tomorrow, and your data trail could be used in ways you never intended.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-charcoal-gray dark:text-dark-text mb-3">
                    Future-Proof Your Life
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Privacy protects you from identity theft, discrimination, and misuse of your information. 
                    It's an investment in your family's safety and your own peace of mind.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 italic">
                  Privacy is a fundamental right, not a privilege. You deserve control over your own information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy News Section */}
      <section className="py-16 lg:py-20 bg-calm-off-white dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Keep up with the latest privacy news, data breaches, and security updates that matter to you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PrivacyPulseWidget recentNews={recentNews} />
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-dark-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
              Why Trust The Privacy Guide?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We practice what we preach. Our commitment to privacy isn't just talk — it's built into everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* No Tracking */}
            <div className="bg-white dark:bg-dark-bg rounded-xl p-6 text-center border border-gray-200 dark:border-dark-border">
              <div className="bg-success-teal/10 dark:bg-success-teal/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-success-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-2">No Tracking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">We don't use Google Analytics, Facebook pixels, or any third-party trackers.</p>
            </div>

            {/* Open Source */}
            <div className="bg-white dark:bg-dark-bg rounded-xl p-6 text-center border border-gray-200 dark:border-dark-border">
              <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-friendly-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-2">Open Source</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Our code is open on GitHub. See exactly how we protect your privacy.</p>
            </div>

            {/* Local Storage */}
            <div className="bg-white dark:bg-dark-bg rounded-xl p-6 text-center border border-gray-200 dark:border-dark-border">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-2">Local Storage</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Your progress stays on your device. We never see your personal data.</p>
            </div>

            {/* No Ads */}
            <div className="bg-white dark:bg-dark-bg rounded-xl p-6 text-center border border-gray-200 dark:border-dark-border">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal-gray dark:text-dark-text mb-2">Ad-Free</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">No advertisements, no sponsored content, no hidden agenda.</p>
            </div>
          </div>

          {/* Security Badges */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Trusted by privacy-conscious users worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>HTTPS Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Privacy by Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Privacy Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Data Collection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-gray dark:text-dark-text mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Join thousands of people who are already protecting their digital privacy. 
            Start with quick wins and work your way up to becoming a privacy expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tasks"
              className="btn-primary text-lg py-4 px-8 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Browse Privacy Tasks
            </Link>
            <Link 
              href="/about"
              className="bg-white dark:bg-dark-bg border-2 border-friendly-blue dark:border-blue-400 text-friendly-blue dark:text-blue-400 hover:bg-friendly-blue dark:hover:bg-blue-400 hover:text-white dark:hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Learn About Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
