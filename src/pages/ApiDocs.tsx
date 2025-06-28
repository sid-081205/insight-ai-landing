import React from 'react'
import { Code, Key, Zap, Shield } from 'lucide-react'

const ApiDocs = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            api documentation
          </h1>
          <p className="text-xl text-midnight-300">
            integrate insight ai into your game in minutes
          </p>
        </div>

        <div className="space-y-12">
          {/* Getting Started */}
          <section className="glass-effect rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-6 w-6 text-electric-400" />
              <h2 className="text-2xl font-semibold text-midnight-100">getting started</h2>
            </div>
            <p className="text-midnight-300 mb-6">
              our rest api makes it easy to integrate ai survey experiences into any game engine.
            </p>
            <div className="code-block">
              <pre>{`# install our sdk (optional)
npm install @insight-ai/game-sdk

# or use direct http requests
curl -X POST https://api.insight-ai.com/v1/survey/start \\
  -H "authorization: bearer YOUR_API_KEY" \\
  -H "content-type: application/json" \\
  -d '{
    "player_id": "player_123",
    "reward_type": "coins",
    "reward_amount": 100,
    "game_context": "level_complete"
  }'`}</pre>
            </div>
          </section>

          {/* Authentication */}
          <section className="glass-effect rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Key className="h-6 w-6 text-electric-400" />
              <h2 className="text-2xl font-semibold text-midnight-100">authentication</h2>
            </div>
            <p className="text-midnight-300 mb-6">
              all api requests require an api key in the authorization header.
            </p>
            <div className="code-block">
              <pre>{`authorization: bearer sk_live_your_api_key_here

# get your api key from the dashboard
# test with sandbox key: sk_test_demo_key_123`}</pre>
            </div>
          </section>

          {/* Core Endpoints */}
          <section className="glass-effect rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="h-6 w-6 text-electric-400" />
              <h2 className="text-2xl font-semibold text-midnight-100">core endpoints</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-midnight-100 mb-3">start survey session</h3>
                <div className="code-block">
                  <pre>{`POST /v1/survey/start

{
  "player_id": "string",
  "reward_type": "coins|gems|lives|powerups",
  "reward_amount": number,
  "game_context": "string",
  "player_demographics": {
    "age_range": "13-17|18-24|25-34|35+",
    "region": "string"
  }
}

response:
{
  "session_id": "sess_abc123",
  "character": {
    "name": "zara",
    "voice_id": "elevenlabs_voice_id",
    "personality": "friendly_guide"
  },
  "first_message": {
    "text": "hey there! ready for a quick chat?",
    "audio_url": "https://audio.insight-ai.com/...",
    "options": [
      { "id": "yes", "text": "sure, let's do this!" },
      { "id": "quick", "text": "make it quick please" }
    ]
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-midnight-100 mb-3">handle player response</h3>
                <div className="code-block">
                  <pre>{`POST /v1/survey/respond

{
  "session_id": "sess_abc123",
  "option_id": "yes"
}

response:
{
  "next_message": {
    "text": "awesome! what's your favorite game genre?",
    "audio_url": "https://audio.insight-ai.com/...",
    "options": [
      { "id": "puzzle", "text": "🧩 puzzle games" },
      { "id": "action", "text": "⚔️ action games" },
      { "id": "strategy", "text": "🧠 strategy games" }
    ]
  },
  "is_complete": false
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-midnight-100 mb-3">complete survey</h3>
                <div className="code-block">
                  <pre>{`GET /v1/survey/complete/:session_id

response:
{
  "rewards": {
    "type": "coins",
    "amount": 100,
    "bonus_multiplier": 1.2
  },
  "completion_message": {
    "text": "thanks for chatting! here are your coins!",
    "audio_url": "https://audio.insight-ai.com/..."
  }
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* SDK Examples */}
          <section className="glass-effect rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-electric-400" />
              <h2 className="text-2xl font-semibold text-midnight-100">sdk examples</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-midnight-100 mb-3">unity c#</h3>
                <div className="code-block">
                  <pre>{`using InsightAI;

public class RewardManager : MonoBehaviour 
{
    private InsightAIClient client;
    
    void Start() 
    {
        client = new InsightAIClient("your_api_key");
    }
    
    public async void ShowRewardSurvey() 
    {
        var session = await client.StartSurvey(new SurveyRequest 
        {
            PlayerId = "player_123",
            RewardType = "coins",
            RewardAmount = 100
        });
        
        // display ai character ui with options
        ShowCharacterDialog(session.Character, session.FirstMessage);
    }
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-midnight-100 mb-3">javascript/typescript</h3>
                <div className="code-block">
                  <pre>{`import { InsightAI } from '@insight-ai/game-sdk';

const client = new InsightAI('your_api_key');

async function showRewardSurvey(playerId: string) {
  const session = await client.startSurvey({
    playerId,
    rewardType: 'coins',
    rewardAmount: 100,
    gameContext: 'level_complete'
  });
  
  // play character audio
  const audio = new Audio(session.firstMessage.audioUrl);
  audio.play();
  
  // show survey ui with selectable options
  showSurveyDialog(session);
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="bg-midnight-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-midnight-100 mb-4">best practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-midnight-100 mb-2">integration tips</h3>
                <ul className="text-midnight-300 space-y-1">
                  <li>• trigger surveys at natural reward moments</li>
                  <li>• match character personality to game theme</li>
                  <li>• keep surveys under 3 questions</li>
                  <li>• provide clear reward expectations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-midnight-100 mb-2">optimization</h3>
                <ul className="text-midnight-300 space-y-1">
                  <li>• cache audio files for better performance</li>
                  <li>• implement fallback for network issues</li>
                  <li>• track completion rates and adjust</li>
                  <li>• a/b test different character voices</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ApiDocs