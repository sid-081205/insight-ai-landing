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
          <p className="text-xl text-sage-700">
            integrate insight ai into your game in minutes
          </p>
        </div>

        <div className="space-y-12">
          {/* Getting Started */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">getting started</h2>
            </div>
            <p className="text-sage-700 mb-6">
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
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Key className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">authentication</h2>
            </div>
            <p className="text-sage-700 mb-6">
              all api requests require an api key in the authorization header.
            </p>
            <div className="code-block">
              <pre>{`authorization: bearer sk_live_your_api_key_here

# get your api key from the dashboard
# test with sandbox key: sk_test_demo_key_123`}</pre>
            </div>
          </section>

          {/* Core Endpoints */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">core endpoints</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3">start survey session</h3>
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
    "audio_url": "https://audio.insight-ai.com/..."
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3">handle player response</h3>
                <div className="code-block">
                  <pre>{`POST /v1/survey/respond

{
  "session_id": "sess_abc123",
  "response": "puzzle games are my favorite!"
}

response:
{
  "next_message": {
    "text": "awesome choice! one more quick question...",
    "audio_url": "https://audio.insight-ai.com/..."
  },
  "is_complete": false
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3">complete survey</h3>
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
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">sdk examples</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3">unity c#</h3>
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
        
        // display ai character ui
        ShowCharacterDialog(session.Character, session.FirstMessage);
    }
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3">javascript/typescript</h3>
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
  
  // show survey ui
  showSurveyDialog(session);
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* Rate Limits */}
          <section className="bg-cozy-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-sage-900 mb-4">rate limits & pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sage-900 mb-2">free tier</h3>
                <ul className="text-sage-700 space-y-1">
                  <li>• 1,000 surveys/month</li>
                  <li>• basic ai characters</li>
                  <li>• standard voice synthesis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sage-900 mb-2">pro tier</h3>
                <ul className="text-sage-700 space-y-1">
                  <li>• unlimited surveys</li>
                  <li>• custom ai characters</li>
                  <li>• premium voice options</li>
                  <li>• advanced analytics</li>
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