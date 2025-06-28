import React from 'react'
import { ArrowRight, Users, TrendingDown, Clock, Target, Zap, Shield, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    {
      icon: Users,
      value: '65.9%',
      label: 'of users skip video ads',
      description: 'players hate intrusive advertising'
    },
    {
      icon: TrendingDown,
      value: '29.46% → 3.21%',
      label: 'retention drop by day 30',
      description: 'traditional ads hurt engagement'
    },
    {
      icon: Clock,
      value: '30 sec',
      label: 'average ad duration',
      description: 'too long for modern attention spans'
    },
    {
      icon: Target,
      value: '0%',
      label: 'meaningful insights from ads',
      description: 'brands get no valuable data'
    }
  ]

  const features = [
    {
      icon: Zap,
      title: 'seamless integration',
      description: 'simple api that plugs into any mobile game engine. get started in minutes, not months.'
    },
    {
      icon: Users,
      title: 'ai-powered characters',
      description: 'elevenlabs voice synthesis creates immersive survey experiences that feel like game npcs.'
    },
    {
      icon: Shield,
      title: 'privacy-first approach',
      description: 'collect valuable insights while respecting player privacy and maintaining trust.'
    }
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              replace ads with<br />
              ai conversations
            </h1>
            <p className="text-xl md:text-2xl text-orange-900 max-w-3xl mx-auto">
              turn reward moments into engaging survey experiences. 
              your players get what they want, brands get real insights, 
              and you get better retention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/api"
                className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 neon-glow transform hover:scale-105"
              >
                get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demos"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
              >
                see demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Problem Statistics */}
      <section className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              the mobile game ad problem
            </h2>
            <p className="text-xl text-gray-600">
              current monetization strategies are failing players and brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-6 mx-auto">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-orange-600 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Market Research Problem */}
      <section className="py-20 section-bg-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">
                market research is broken for gen z
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                traditional market research organizations like kantar struggle to gather authentic 
                feedback from gen z consumers. conventional surveys are ignored, and short attention 
                spans make traditional research methods ineffective.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">gen z ignores traditional survey formats</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">attention spans too short for lengthy questionnaires</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">brands need authentic insights from younger demographics</p>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="h-8 w-8 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">the insight gap</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                  <div className="text-sm text-red-600 mb-1">traditional surveys</div>
                  <div className="text-red-800 font-semibold">2-5% response rate from gen z</div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                  <div className="text-sm text-orange-600 mb-1">mobile game ads</div>
                  <div className="text-orange-800 font-semibold">zero meaningful data collection</div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="text-sm text-green-600 mb-1">insight ai surveys</div>
                  <div className="text-green-800 font-semibold">85%+ completion rate in games</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Solution */}
      <section className="py-20 section-bg-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">
                our solution: ai survey agents
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                when players want rewards, they interact with an ai character that conducts 
                brief, conversational surveys. the character's voice and personality are 
                powered by elevenlabs, making interactions feel immersive and game-appropriate.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">players get rewards without watching ads</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">brands get authentic feedback from gen z</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">developers get better retention rates</p>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">example interaction:</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
                  <strong className="text-orange-600">ai character:</strong> 
                  <span className="text-gray-700"> "hey there, adventurer! before i give you those coins, 
                  mind helping me with a quick question?"</span>
                </div>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200">
                  <strong className="text-gray-600">player:</strong> 
                  <span className="text-gray-700"> "sure, what's up?"</span>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
                  <strong className="text-orange-600">ai character:</strong> 
                  <span className="text-gray-700"> "what's your favorite type of mobile game?"</span>
                </div>
                <div className="space-y-2">
                  <button className="option-button w-full p-3 rounded-lg text-left text-gray-700 hover:text-orange-600">
                    🧩 puzzle games
                  </button>
                  <button className="option-button w-full p-3 rounded-lg text-left text-gray-700 hover:text-orange-600">
                    ⚔️ action games
                  </button>
                  <button className="option-button w-full p-3 rounded-lg text-left text-gray-700 hover:text-orange-600">
                    🧠 strategy games
                  </button>
                </div>
                <div className="text-center text-orange-600 text-xs mt-4 font-medium">
                  → player gets 100 coins + engaging experience<br />
                  → brand gets valuable demographic data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features */}
      <section className="py-20 section-bg-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              why choose insight ai?
            </h2>
            <p className="text-xl text-orange-800">
              built for game developers, by game developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ready to revolutionize your game monetization?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            join the beta and start creating better player experiences today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 neon-glow transform hover:scale-105"
          >
            join beta program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home