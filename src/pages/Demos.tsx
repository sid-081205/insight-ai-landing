import React, { useState } from 'react'
import { Play, Gamepad2, MessageCircle, Gift, Volume2, Users, Star, ArrowRight, CheckCircle } from 'lucide-react'

const Demos = () => {
  const [activeDemo, setActiveDemo] = useState<number | null>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const demos = [
    {
      title: 'puzzle game integration',
      description: 'see how insight ai works in a match-3 puzzle game when players need extra moves',
      gameType: 'puzzle',
      scenario: 'player runs out of moves',
      reward: '5 extra moves',
      character: 'zara the wise owl',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      metrics: {
        completionRate: '89%',
        avgTime: '32s',
        satisfaction: '4.7/5'
      }
    },
    {
      title: 'rpg character interaction',
      description: 'watch an ai npc conduct a survey that feels like natural game dialogue',
      gameType: 'rpg',
      scenario: 'visiting the tavern',
      reward: '100 gold coins',
      character: 'finn the bartender',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      metrics: {
        completionRate: '92%',
        avgTime: '28s',
        satisfaction: '4.8/5'
      }
    },
    {
      title: 'racing game rewards',
      description: 'experience how surveys work when players want to upgrade their vehicles',
      gameType: 'racing',
      scenario: 'upgrading car parts',
      reward: 'turbo boost',
      character: 'max the mechanic',
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=400',
      metrics: {
        completionRate: '85%',
        avgTime: '35s',
        satisfaction: '4.6/5'
      }
    },
    {
      title: 'casual mobile game',
      description: 'see the integration in a simple tap-to-play mobile game',
      gameType: 'casual',
      scenario: 'daily bonus claim',
      reward: 'mystery box',
      character: 'luna the fairy',
      image: 'https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400',
      metrics: {
        completionRate: '94%',
        avgTime: '25s',
        satisfaction: '4.9/5'
      }
    }
  ]

  const interactiveSteps = [
    {
      character: 'zara the wise owl',
      message: "hey there, adventurer! i see you're looking for some extra coins. before i help you out, mind if i ask you a quick question about your gaming preferences?",
      options: ["sure, what do you want to know?", "make it quick!", "what's in it for me?"]
    },
    {
      character: 'zara the wise owl',
      message: "awesome! so tell me, when you're playing mobile games, what usually makes you want to keep playing longer?",
      options: ["challenging puzzles", "collecting rewards", "competing with friends", "exploring new content"]
    },
    {
      character: 'zara the wise owl',
      message: "that's really helpful! one last quick question - how often do you usually play mobile games?",
      options: ["daily", "few times a week", "weekends only", "whenever i'm bored"]
    },
    {
      character: 'zara the wise owl',
      message: "perfect! thanks for sharing that with me. as promised, here are your 100 coins! 🪙 enjoy your adventure!",
      options: ["thanks!", "that was fun!", "see you around!"],
      isComplete: true
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

  const integrationExamples = [
    {
      title: 'before: traditional reward ad',
      description: 'the old way that frustrates players',
      code: `// old way - show video ad
function giveReward() {
  showVideoAd({
    onComplete: () => {
      player.addCoins(100);
      // player watched 30s ad
      // brand got 0 insights
      // 65.9% skip rate
    },
    onSkip: () => {
      // no reward, frustrated player
      showRetryPrompt();
    }
  });
}`,
      problems: ['high skip rate', 'no data collected', 'player frustration', 'poor retention']
    },
    {
      title: 'after: ai survey integration',
      description: 'the new way that engages players',
      code: `// new way - ai survey
async function giveReward() {
  const survey = await insightAI.start({
    playerId: player.id,
    rewardType: 'coins',
    rewardAmount: 100,
    gameContext: 'level_complete'
  });
  
  showSurveyDialog(survey);
  // player enjoys conversation
  // brand gets valuable data
  // 89% completion rate
}`,
      benefits: ['high completion rate', 'valuable insights', 'player engagement', 'better retention']
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            see insight ai in action
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            explore live demos across different game genres and experience the difference yourself
          </p>
        </div>

        {/* Demo Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="demo-card bg-white rounded-2xl shadow-lg overflow-hidden border border-cozy-100">
                <div className="relative">
                  <img 
                    src={demo.image} 
                    alt={demo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveDemo(activeDemo === index ? null : index)}
                      className="bg-white/90 hover:bg-white p-4 rounded-full transition-all transform hover:scale-110"
                    >
                      <Play className="h-8 w-8 text-cozy-600" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-cozy-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {demo.gameType}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sage-900 mb-2">{demo.title}</h3>
                  <p className="text-sage-700 mb-4">{demo.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="h-4 w-4 text-cozy-600" />
                      <span className="text-sage-600">scenario: {demo.scenario}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gift className="h-4 w-4 text-cozy-600" />
                      <span className="text-sage-600">reward: {demo.reward}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4 text-cozy-600" />
                      <span className="text-sage-600">character: {demo.character}</span>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cozy-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cozy-600">{demo.metrics.completionRate}</div>
                      <div className="text-xs text-sage-600">completion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cozy-600">{demo.metrics.avgTime}</div>
                      <div className="text-xs text-sage-600">avg time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cozy-600">{demo.metrics.satisfaction}</div>
                      <div className="text-xs text-sage-600">satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">try it yourself</h2>
              <p className="text-xl text-cozy-100">
                experience a live survey interaction right here
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cozy-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-cozy-600" />
                </div>
                <div>
                  <div className="font-semibold text-lg">{interactiveSteps[currentStep].character}</div>
                  <div className="text-sm text-cozy-200 flex items-center">
                    <Volume2 className="h-4 w-4 mr-1" />
                    ai voice enabled
                  </div>
                </div>
                <div className="ml-auto text-sm text-cozy-200">
                  step {currentStep + 1} of {interactiveSteps.length}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-cozy-100">
                    "{interactiveSteps[currentStep].message}"
                  </p>
                </div>
                
                {!interactiveSteps[currentStep].isComplete ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interactiveSteps[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (currentStep < interactiveSteps.length - 1) {
                            setCurrentStep(currentStep + 1)
                          }
                        }}
                        className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors text-left"
                      >
                        "{option}"
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="bg-green-500/20 p-4 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 text-green-200">
                        <CheckCircle className="h-5 w-5" />
                        <span>survey completed! reward earned: 100 coins</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentStep(0)}
                      className="bg-white text-cozy-600 px-6 py-3 rounded-lg font-semibold hover:bg-cozy-50 transition-colors"
                    >
                      try again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              traditional ads vs insight ai*
            </h2>
            <p className="text-xl text-sage-700">
              see the dramatic difference in real metrics
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
                <div className="p-6 text-center text-red-600">{row.traditional}</div>
                <div className="p-6 text-center text-cozy-600 font-semibold">{row.insightAi}</div>
                <div className="p-6 text-center text-green-600 font-bold">{row.improvement}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-sage-600">
              * Predicted data based on deep research and industry analysis
            </p>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              before & after integration
            </h2>
            <p className="text-xl text-sage-700">
              see how easy it is to upgrade your monetization
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-cozy-100">
                <h3 className="text-xl font-semibold text-sage-900 mb-2">{example.title}</h3>
                <p className="text-sage-600 mb-4">{example.description}</p>
                <div className="code-block mb-4">
                  <pre className="text-sm">{example.code}</pre>
                </div>
                <div className="space-y-2">
                  {(example.problems || example.benefits)?.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      {example.problems ? (
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      <span className={`text-sm ${example.problems ? 'text-red-600' : 'text-green-600'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ready to see these results in your game?
            </h2>
            <p className="text-xl text-cozy-100 mb-8">
              start using insight ai today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-cozy-600 rounded-lg font-semibold hover:bg-cozy-50 transition-all transform hover:scale-105">
                get started free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                book demo call
              </button>
            </div>
            <p className="text-sm text-cozy-200 mt-4">
              completely free • unlimited surveys • no setup fees
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Demos