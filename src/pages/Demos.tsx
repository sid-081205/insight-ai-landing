import React from 'react'
import { Play, Gamepad2, MessageCircle, Gift } from 'lucide-react'

const Demos = () => {
  const demos = [
    {
      title: 'puzzle game integration',
      description: 'see how insight ai works in a match-3 puzzle game when players need extra moves',
      gameType: 'puzzle',
      scenario: 'player runs out of moves',
      reward: '5 extra moves',
      character: 'zara the wise owl',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'rpg character interaction',
      description: 'watch an ai npc conduct a survey that feels like natural game dialogue',
      gameType: 'rpg',
      scenario: 'visiting the tavern',
      reward: '100 gold coins',
      character: 'finn the bartender',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'racing game rewards',
      description: 'experience how surveys work when players want to upgrade their vehicles',
      gameType: 'racing',
      scenario: 'upgrading car parts',
      reward: 'turbo boost',
      character: 'max the mechanic',
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'casual mobile game',
      description: 'see the integration in a simple tap-to-play mobile game',
      gameType: 'casual',
      scenario: 'daily bonus claim',
      reward: 'mystery box',
      character: 'luna the fairy',
      image: 'https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            live demos
          </h1>
          <p className="text-xl text-midnight-300">
            see insight ai in action across different game genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {demos.map((demo, index) => (
            <div key={index} className="demo-card rounded-2xl overflow-hidden">
              <div className="relative">
                <img 
                  src={demo.image} 
                  alt={demo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-colors neon-glow">
                    <Play className="h-8 w-8 text-electric-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-midnight-100 mb-2">{demo.title}</h3>
                <p className="text-midnight-300 mb-4">{demo.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Gamepad2 className="h-4 w-4 text-electric-400" />
                    <span className="text-midnight-400">game type: {demo.gameType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-electric-400" />
                    <span className="text-midnight-400">scenario: {demo.scenario}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gift className="h-4 w-4 text-electric-400" />
                    <span className="text-midnight-400">reward: {demo.reward}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-midnight-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-electric-600/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-electric-400" />
                    </div>
                    <span className="text-sm font-medium text-midnight-100">{demo.character}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <section className="bg-gradient-to-r from-electric-600 to-neon-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">try it yourself</h2>
            <p className="text-xl text-electric-100">
              experience a live survey interaction right here
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto glass-effect rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-electric-100 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-electric-600" />
              </div>
              <div>
                <div className="font-semibold">zara the wise owl</div>
                <div className="text-sm text-electric-200">ai survey character</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-electric-100">
                  "hey there, adventurer! i see you're looking for some extra coins. 
                  before i help you out, mind if i ask you a quick question about your gaming preferences?"
                </p>
              </div>
              
              <div className="space-y-2">
                <button className="option-button w-full p-3 rounded-lg text-left">
                  "sure, what do you want to know?"
                </button>
                <button className="option-button w-full p-3 rounded-lg text-left">
                  "make it quick!"
                </button>
                <button className="option-button w-full p-3 rounded-lg text-left">
                  "can i skip this?"
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="bg-white text-electric-600 px-6 py-3 rounded-lg font-semibold hover:bg-electric-50 transition-colors neon-glow">
                start interactive demo
              </button>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-midnight-100 mb-4">
              integration examples
            </h2>
            <p className="text-xl text-midnight-300">
              see how easy it is to add insight ai to your game
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-midnight-100 mb-4">before: traditional ad</h3>
              <div className="code-block">
                <pre>{`// old way - show video ad
function giveReward() {
  showVideoAd({
    onComplete: () => {
      player.addCoins(100);
      // player watched 30s ad
      // brand got 0 insights
    },
    onSkip: () => {
      // 65.9% of players skip
      // no reward, frustrated player
    }
  });
}`}</pre>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-midnight-100 mb-4">after: ai survey</h3>
              <div className="code-block">
                <pre>{`// new way - ai survey
async function giveReward() {
  const survey = await insightAI.start({
    playerId: player.id,
    rewardType: 'coins',
    rewardAmount: 100
  });
  
  showSurveyDialog(survey);
  // player enjoys conversation
  // brand gets valuable data
  // 15-30 second interaction
}`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Demos