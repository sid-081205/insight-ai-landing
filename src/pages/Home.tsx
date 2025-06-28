import React from 'react'
import { ArrowRight, Users, TrendingDown, Clock, Target, Zap, Shield, Brain, MessageCircle, Trophy, Star, CheckCircle } from 'lucide-react'
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

  const testimonials = [
    {
      quote: "our retention improved by 23% after switching from video ads to insight ai surveys. players actually enjoy the interactions!",
      author: "sarah chen",
      role: "lead game designer",
      company: "puzzle studios"
    },
    {
      quote: "finally, a way to monetize that doesn't annoy our players. the ai characters feel like part of our game world.",
      author: "marcus rodriguez",
      role: "ceo",
      company: "indie games collective"
    },
    {
      quote: "we're getting 10x more valuable data than traditional ads ever provided. brands love the authentic feedback.",
      author: "emily watson",
      role: "monetization director",
      company: "mobile gaming corp"
    }
  ]

  const comparisonData = [
    {
      metric: 'completion rate',
      traditional: '34.1%',
      insightAi: '87.3%',
      improvement: '+156%'
    },
    {
      metric: 'player satisfaction',
      traditional: '2.1/5',
      insightAi: '4.6/5',
      improvement: '+119%'
    },
    {
      metric: 'data quality',
      traditional: 'none',
      insightAi: 'high',
      improvement: '∞'
    },
    {
      metric: 'retention impact',
      traditional: '-12%',
      insightAi: '+23%',
      improvement: '+35%'
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
              trusted by 500+ game developers
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
                start free trial
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
              no credit card required • 1,000 free surveys/month
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sage-600 mb-8">trusted by leading game studios</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-sage-400">puzzle studios</div>
            <div className="text-2xl font-bold text-sage-400">indie collective</div>
            <div className="text-2xl font-bold text-sage-400">mobile corp</div>
            <div className="text-2xl font-bold text-sage-400">game labs</div>
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

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-900 mb-4">
              traditional ads vs insight ai
            </h2>
            <p className="text-xl text-sage-700">
              see the dramatic difference in performance
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-4 bg-sage-900 text-white">
              <div className="p-6 font-semibold">metric</div>
              <div className="p-6 font-semibold text-center">traditional ads</div>
              <div className="p-6 font-semibold text-center">insight ai</div>
              <div className="p-6 font-semibold text-center">improvement</div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-cozy-50' : 'bg-white'}`}>
                <div className="p-6 font-medium text-sage-900">{row.metric}</div>
                <div className="p-6 text-center text-sage-600">{row.traditional}</div>
                <div className="p-6 text-center text-cozy-600 font-semibold">{row.insightAi}</div>
                <div className="p-6 text-center text-green-600 font-bold">{row.improvement}</div>
              </div>
            ))}
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

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sage-900 mb-4">
              loved by game developers
            </h2>
            <p className="text-xl text-sage-700">
              hear from studios already using insight ai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sage-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-sage-900">{testimonial.author}</div>
                  <div className="text-sm text-sage-600">{testimonial.role}</div>
                  <div className="text-sm text-cozy-600">{testimonial.company}</div>
                </div>
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
            join 500+ developers already using insight ai to create better player experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cozy-600 rounded-lg font-semibold hover:bg-cozy-50 transition-all transform hover:scale-105"
            >
              start free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/demos"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              book demo call
            </Link>
          </div>
          <p className="text-sm text-cozy-200">
            1,000 free surveys • no setup fees • cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home