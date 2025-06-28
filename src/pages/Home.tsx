import React from 'react'
import { ArrowRight, Users, TrendingDown, Clock, Target, Zap, Shield } from 'lucide-react'
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
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              replace ads with<br />
              ai conversations
            </h1>
            <p className="text-xl md:text-2xl text-sage-700 max-w-3xl mx-auto">
              turn reward moments into engaging survey experiences. 
              your players get what they want, brands get real insights, 
              and you get better retention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/api"
                className="inline-flex items-center px-8 py-4 bg-cozy-600 text-white rounded-lg font-semibold hover:bg-cozy-700 transition-colors"
              >
                get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demos"
                className="inline-flex items-center px-8 py-4 border-2 border-cozy-600 text-cozy-600 rounded-lg font-semibold hover:bg-cozy-50 transition-colors"
              >
                see demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statistics */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-900 mb-4">
              the mobile game ad problem
            </h2>
            <p className="text-xl text-sage-700">
              current monetization strategies are failing players and brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-cozy-100 rounded-full mb-6 mx-auto">
                  <stat.icon className="h-8 w-8 text-cozy-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cozy-600 mb-2">{stat.label}</div>
                  <p className="text-sm text-sage-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sage-900 mb-6">
                our solution: ai survey agents
              </h2>
              <p className="text-lg text-sage-700 mb-8">
                when players want rewards, they interact with an ai character that conducts 
                brief, conversational surveys. the character's voice and personality are 
                powered by elevenlabs, making interactions feel immersive and game-appropriate.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cozy-600 rounded-full mt-3"></div>
                  <p className="text-sage-700">players get rewards without watching ads</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cozy-600 rounded-full mt-3"></div>
                  <p className="text-sage-700">brands get authentic feedback from gen z</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cozy-600 rounded-full mt-3"></div>
                  <p className="text-sage-700">developers get better retention rates</p>
                </div>
              </div>
            </div>
            <div className="bg-sage-900 rounded-2xl p-8 text-cozy-50">
              <h3 className="text-xl font-semibold mb-4">example interaction:</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-cozy-600 p-3 rounded-lg">
                  <strong>ai character:</strong> "hey there, adventurer! before i give you those coins, 
                  mind helping me with a quick question?"
                </div>
                <div className="bg-sage-700 p-3 rounded-lg">
                  <strong>player:</strong> "sure, what's up?"
                </div>
                <div className="bg-cozy-600 p-3 rounded-lg">
                  <strong>ai character:</strong> "what's your favorite type of mobile game? 
                  puzzle, action, or strategy?"
                </div>
                <div className="text-center text-cozy-200 text-xs">
                  → player gets 100 coins + engaging experience<br />
                  → brand gets valuable demographic data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-900 mb-4">
              why choose insight ai?
            </h2>
            <p className="text-xl text-sage-700">
              built for game developers, by game developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-cozy-100 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-cozy-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-900 mb-4">{feature.title}</h3>
                <p className="text-sage-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cozy-600 to-sage-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ready to revolutionize your game monetization?
          </h2>
          <p className="text-xl text-cozy-100 mb-8">
            join the beta and start creating better player experiences today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-cozy-600 rounded-lg font-semibold hover:bg-cozy-50 transition-colors"
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