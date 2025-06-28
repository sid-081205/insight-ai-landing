import React from 'react'
import { ArrowRight, Users, TrendingDown, Clock, Target, Zap, Shield, Brain, MessageCircle, Trophy, Star, CheckCircle, Volume2, Mic, Headphones } from 'lucide-react'
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
      description: 'simple api that plugs into any mobile game engine. get started in minutes, not months.',
      benefits: ['5-minute setup', 'cross-platform support', 'zero maintenance']
    },
    {
      icon: Brain,
      title: 'ai-powered characters',
      description: 'elevenlabs voice synthesis creates immersive survey experiences that feel like game npcs.',
      benefits: ['natural conversations', 'multiple personalities', 'adaptive responses']
    },
    {
      icon: Shield,
      title: 'privacy-first approach',
      description: 'collect valuable insights while respecting player privacy and maintaining trust.',
      benefits: ['gdpr compliant', 'anonymous data', 'transparent consent']
    }
  ]

  const elevenLabsFeatures = [
    {
      icon: Volume2,
      title: 'ultra-realistic voices',
      description: 'elevenlabs\' cutting-edge ai generates voices so natural, players forget they\'re talking to ai',
      details: ['29 languages supported', 'emotional voice modulation', 'real-time generation']
    },
    {
      icon: Mic,
      title: 'custom character voices',
      description: 'create unique voice personalities for each ai character that match your game\'s theme',
      details: ['voice cloning technology', 'personality-matched tones', 'consistent character identity']
    },
    {
      icon: Headphones,
      title: 'immersive audio experience',
      description: 'high-quality audio that makes survey interactions feel like natural game dialogue',
      details: ['studio-quality output', 'adaptive speech patterns', 'contextual responses']
    }
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cozy-50 via-white to-sage-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-cozy-100 rounded-full text-cozy-700 text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              powered by elevenlabs ai voices
            </div>
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
                className="inline-flex items-center px-8 py-4 bg-cozy-600 text-white rounded-lg font-semibold hover:bg-cozy-700 transition-all transform hover:scale-105"
              >
                get started free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demos"
                className="inline-flex items-center px-8 py-4 border-2 border-cozy-600 text-cozy-600 rounded-lg font-semibold hover:bg-cozy-50 transition-colors"
              >
                watch demo
              </Link>
            </div>
            <p className="text-sm text-sage-600">
              completely free • unlimited surveys • no setup fees
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-900 mb-4">
              the mobile game ad crisis
            </h2>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto">
              traditional advertising is destroying player experience and failing to deliver value to brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card bg-white p-8 rounded-2xl shadow-lg border border-cozy-100">
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

      {/* Solution Overview */}
      <section className="py-16 bg-gradient-to-r from-sage-900 to-cozy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                introducing ai survey agents
              </h2>
              <p className="text-lg text-cozy-100 mb-8">
                when players want rewards, they interact with an ai character that conducts 
                brief, conversational surveys. powered by elevenlabs voice synthesis, 
                these interactions feel immersive and game-appropriate.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cozy-400 mt-1 flex-shrink-0" />
                  <p className="text-cozy-100">players get rewards without watching ads</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cozy-400 mt-1 flex-shrink-0" />
                  <p className="text-cozy-100">brands get authentic feedback from gen z</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cozy-400 mt-1 flex-shrink-0" />
                  <p className="text-cozy-100">developers get better retention rates</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">live interaction example</h3>
              <div className="space-y-4">
                <div className="bg-cozy-600 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="h-4 w-4" />
                    <span className="font-medium">zara the wise owl</span>
                    <Volume2 className="h-3 w-3 text-cozy-200" />
                  </div>
                  <p className="text-sm">"hey there, adventurer! before i give you those coins, mind helping me with a quick question?"</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4" />
                    <span className="font-medium">player</span>
                  </div>
                  <p className="text-sm">"sure, what's up?"</p>
                </div>
                <div className="bg-cozy-600 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="h-4 w-4" />
                    <span className="font-medium">zara</span>
                    <Volume2 className="h-3 w-3 text-cozy-200" />
                  </div>
                  <p className="text-sm">"what's your favorite type of mobile game? puzzle, action, or strategy?"</p>
                </div>
                <div className="text-center bg-white/10 p-3 rounded-lg">
                  <div className="text-sm text-cozy-200">
                    <Trophy className="h-4 w-4 inline mr-1" />
                    player gets 100 coins + engaging experience
                  </div>
                  <div className="text-sm text-cozy-200">
                    <Target className="h-4 w-4 inline mr-1" />
                    brand gets valuable demographic data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-cozy-50">
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
                <p className="text-sage-700 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-sage-600">
                      <CheckCircle className="h-4 w-4 text-cozy-600 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ElevenLabs Integration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-900 mb-4">
              powered by elevenlabs voice ai
            </h2>
            <p className="text-xl text-sage-700">
              the most advanced voice synthesis technology brings your ai characters to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {elevenLabsFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-cozy-100">
                <div className="flex items-center justify-center w-16 h-16 bg-cozy-100 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-cozy-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-900 mb-4">{feature.title}</h3>
                <p className="text-sage-700 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-sage-600">
                      <CheckCircle className="h-4 w-4 text-cozy-600 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ElevenLabs Benefits */}
          <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">why elevenlabs makes the difference</h3>
            <p className="text-cozy-100 mb-8 max-w-3xl mx-auto">
              elevenlabs' neural voice synthesis creates characters that sound completely human. 
              players engage naturally because the voices feel real and emotionally authentic, 
              making survey interactions feel like natural game dialogue.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-cozy-200 mb-1">29</div>
                <div className="text-sm text-cozy-100">languages supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-cozy-200 mb-1">real-time</div>
                <div className="text-sm text-cozy-100">voice generation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-cozy-200 mb-1">emotional</div>
                <div className="text-sm text-cozy-100">voice modulation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-cozy-200 mb-1">studio</div>
                <div className="text-sm text-cozy-100">quality output</div>
              </div>
            </div>
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
            join developers already using insight ai to create better player experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cozy-600 rounded-lg font-semibold hover:bg-cozy-50 transition-all transform hover:scale-105"
            >
              get started free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demos"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              see live demos
            </Link>
          </div>
          <p className="text-sm text-cozy-200">
            completely free • unlimited surveys • no setup fees
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home