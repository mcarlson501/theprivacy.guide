import Link from 'next/link'
import ProgressCard from '../components/ProgressCard'
import { getAllTasksData, getTotalPossiblePoints } from '../lib/tasks'

export default async function Home() {
  const totalPoints = await getTotalPossiblePoints();

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
                <ProgressCard totalPossiblePoints={totalPoints} />
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
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal-gray dark:text-dark-text mb-2">Made for Everyone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you're a complete beginner or privacy-conscious user, our tasks are 
                designed to be approachable and empowering.
              </p>
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
