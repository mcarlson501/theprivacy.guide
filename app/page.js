import Link from 'next/link'
import ProgressCard from '../components/ProgressCard'
import { getAllTasksData, getTotalPossiblePoints } from '../lib/tasks'

export default async function Home() {
  const [totalPoints, allTasks] = await Promise.all([
    getTotalPossiblePoints(),
    getAllTasksData()
  ]);
  const totalTasks = allTasks.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-friendly-blue via-blue-600 to-success-teal dark:from-blue-800 dark:via-blue-900 dark:to-teal-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Take Control of Your{' '}
                <span className="text-success-teal dark:text-teal-300">Digital Privacy</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 dark:text-blue-200 leading-relaxed">
                Simple, actionable steps to protect yourself online. No tech expertise required – 
                just follow our guided tasks and build better privacy habits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/tasks"
                  className="bg-success-teal hover:bg-teal-400 dark:bg-teal-500 dark:hover:bg-teal-400 text-charcoal-gray dark:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-center hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Start Your Privacy Journey
                </Link>
                <Link 
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-friendly-blue dark:hover:bg-gray-100 dark:hover:text-blue-800 font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-center"
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-friendly-blue/10 dark:bg-friendly-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-friendly-blue dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Simple & Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No complex tech jargon. Just clear, step-by-step instructions that anyone can follow 
                to improve their digital privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-teal/10 dark:bg-success-teal/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success-teal dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn points and badges as you complete privacy tasks. See your progress and 
                stay motivated on your privacy journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Made for Everyone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you're a complete beginner or privacy-conscious user, our tasks are 
                designed to be approachable and empowering.
              </p>
            </div>
          </div>

          {/* "Nothing to Hide" Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-charcoal-gray dark:text-dark-text mb-4">
                  "I Have Nothing to Hide" — But Should You Care?
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

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-calm-off-white dark:bg-dark-surface">
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
