import React, { useState } from 'react'
import { Code, Key, Zap, Shield, Copy, CheckCircle, Book, Rocket, Settings } from 'lucide-react'

const ApiDocs = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const quickStartSteps = [
    {
      step: 1,
      title: 'get your api key',
      description: 'sign up and get your api key from the dashboard',
      action: 'sign up free'
    },
    {
      step: 2,
      title: 'install sdk',
      description: 'add our lightweight sdk to your project',
      action: 'npm install @insight-ai/game-sdk'
    },
    {
      step: 3,
      title: 'integrate surveys',
      description: 'replace ad calls with survey interactions',
      action: 'start coding'
    },
    {
      step: 4,
      title: 'go live',
      description: 'deploy and start earning better engagement',
      action: 'launch'
    }
  ]

  const sdkExamples = [
    {
      title: 'unity c#',
      language: 'csharp',
      code: `using InsightAI;

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
            RewardAmount = 100,
            GameContext = "level_complete"
        });
        
        // display ai character ui
        ShowCharacterDialog(session.Character, session.FirstMessage);
    }
    
    private void ShowCharacterDialog(Character character, Message message)
    {
        // your ui implementation
        dialogUI.Show(character.Name, message.Text);
        audioSource.clip = LoadAudioFromUrl(message.AudioUrl);
        audioSource.Play();
    }
}`
    },
    {
      title: 'javascript/typescript',
      language: 'javascript',
      code: `import { InsightAI } from '@insight-ai/game-sdk';

const client = new InsightAI('your_api_key');

async function showRewardSurvey(playerId: string) {
  try {
    const session = await client.startSurvey({
      playerId,
      rewardType: 'coins',
      rewardAmount: 100,
      gameContext: 'level_complete'
    });
    
    // play character audio
    const audio = new Audio(session.firstMessage.audioUrl);
    await audio.play();
    
    // show survey ui
    showSurveyDialog(session);
    
  } catch (error) {
    console.error('Survey failed:', error);
    // fallback to direct reward
    giveDirectReward(playerId, 100);
  }
}

function showSurveyDialog(session) {
  const dialog = document.createElement('div');
  dialog.innerHTML = \`
    <div class="survey-dialog">
      <h3>\${session.character.name}</h3>
      <p>\${session.firstMessage.text}</p>
      <input type="text" id="player-response" placeholder="Type your response...">
      <button onclick="submitResponse()">Send</button>
    </div>
  \`;
  document.body.appendChild(dialog);
}`
    },
    {
      title: 'react native',
      language: 'javascript',
      code: `import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { InsightAI } from '@insight-ai/game-sdk';

const RewardScreen = ({ playerId }) => {
  const [session, setSession] = useState(null);
  const [response, setResponse] = useState('');
  const client = new InsightAI('your_api_key');

  const startSurvey = async () => {
    try {
      const newSession = await client.startSurvey({
        playerId,
        rewardType: 'gems',
        rewardAmount: 50,
        gameContext: 'daily_bonus'
      });
      setSession(newSession);
    } catch (error) {
      console.error('Survey error:', error);
    }
  };

  const submitResponse = async () => {
    try {
      const result = await client.respondToSurvey({
        sessionId: session.sessionId,
        response
      });
      
      if (result.isComplete) {
        // give reward and close
        giveReward(result.rewards);
      } else {
        // continue conversation
        setSession({ ...session, ...result });
      }
    } catch (error) {
      console.error('Response error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {session ? (
        <View>
          <Text style={styles.characterName}>{session.character.name}</Text>
          <Text style={styles.message}>{session.currentMessage.text}</Text>
          <TextInput
            style={styles.input}
            value={response}
            onChangeText={setResponse}
            placeholder="Type your response..."
          />
          <TouchableOpacity onPress={submitResponse}>
            <Text>Send Response</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={startSurvey}>
          <Text>Claim Reward</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};`
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            developer documentation
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            integrate insight ai into your game in minutes with our simple, powerful api
          </p>
        </div>

        {/* Quick Start Guide */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">quick start guide</h2>
            <p className="text-cozy-100 text-lg">get up and running in under 10 minutes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-cozy-100">
                <div className="flex items-center justify-center w-12 h-12 bg-cozy-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-cozy-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-sage-900 mb-2">{step.title}</h3>
                <p className="text-sage-600 text-sm mb-4">{step.description}</p>
                <button className="text-cozy-600 font-medium text-sm hover:text-cozy-700">
                  {step.action} →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cozy-100">
            <div className="flex items-center space-x-3 mb-6">
              <Rocket className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">getting started</h2>
            </div>
            <p className="text-sage-700 mb-6">
              our rest api makes it easy to integrate ai survey experiences into any game engine.
            </p>
            <div className="relative">
              <div className="code-block">
                <pre>{`# install our sdk (optional but recommended)
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
              <button
                onClick={() => copyToClipboard(`# install our sdk (optional but recommended)
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
  }'`, 'getting-started')}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                {copiedCode === 'getting-started' ? (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-cozy-200" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cozy-100">
            <div className="flex items-center space-x-3 mb-6">
              <Key className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">authentication</h2>
            </div>
            <p className="text-sage-700 mb-6">
              all api requests require an api key in the authorization header. get your key from the dashboard.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sage-900 mb-3">production key</h3>
                <div className="relative">
                  <div className="code-block">
                    <pre>{`authorization: bearer sk_live_your_api_key_here

# example request
curl -H "authorization: bearer sk_live_abc123..." \\
     https://api.insight-ai.com/v1/survey/start`}</pre>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sage-900 mb-3">test with sandbox</h3>
                <div className="relative">
                  <div className="code-block">
                    <pre>{`# test with our sandbox key
authorization: bearer sk_test_demo_key_123

# sandbox always returns success
# perfect for development & testing`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Endpoints */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cozy-100">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">core endpoints</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono mr-3">POST</span>
                  start survey session
                </h3>
                <div className="relative">
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
    "personality": "friendly_guide",
    "avatar_url": "https://cdn.insight-ai.com/avatars/zara.png"
  },
  "first_message": {
    "text": "hey there! ready for a quick chat?",
    "audio_url": "https://audio.insight-ai.com/sess_abc123_msg_1.mp3"
  }
}`}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`POST /v1/survey/start

{
  "player_id": "string",
  "reward_type": "coins|gems|lives|powerups",
  "reward_amount": number,
  "game_context": "string",
  "player_demographics": {
    "age_range": "13-17|18-24|25-34|35+",
    "region": "string"
  }
}`, 'start-survey')}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {copiedCode === 'start-survey' ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-cozy-200" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-mono mr-3">POST</span>
                  handle player response
                </h3>
                <div className="relative">
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
    "audio_url": "https://audio.insight-ai.com/sess_abc123_msg_2.mp3"
  },
  "is_complete": false,
  "progress": {
    "current_question": 2,
    "total_questions": 3
  }
}`}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`POST /v1/survey/respond

{
  "session_id": "sess_abc123",
  "response": "puzzle games are my favorite!"
}`, 'respond-survey')}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {copiedCode === 'respond-survey' ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-cozy-200" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-900 mb-3 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-mono mr-3">GET</span>
                  complete survey
                </h3>
                <div className="relative">
                  <div className="code-block">
                    <pre>{`GET /v1/survey/complete/:session_id

response:
{
  "rewards": {
    "type": "coins",
    "amount": 100,
    "bonus_multiplier": 1.2,
    "total_awarded": 120
  },
  "completion_message": {
    "text": "thanks for chatting! here are your coins!",
    "audio_url": "https://audio.insight-ai.com/sess_abc123_complete.mp3"
  },
  "survey_data": {
    "completion_time": "45s",
    "satisfaction_score": 4.8
  }
}`}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`GET /v1/survey/complete/:session_id`, 'complete-survey')}
                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {copiedCode === 'complete-survey' ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-cozy-200" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK Examples */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cozy-100">
            <div className="flex items-center space-x-3 mb-6">
              <Book className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">sdk examples</h2>
            </div>
            
            <div className="space-y-8">
              {sdkExamples.map((example, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-sage-900 mb-3">{example.title}</h3>
                  <div className="relative">
                    <div className="code-block">
                      <pre>{example.code}</pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example.code, `sdk-${index}`)}
                      className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      {copiedCode === `sdk-${index}` ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-cozy-200" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Configuration & Settings */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cozy-100">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="h-6 w-6 text-cozy-600" />
              <h2 className="text-2xl font-semibold text-sage-900">configuration options</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-sage-900 mb-4">character customization</h3>
                <div className="code-block">
                  <pre>{`{
  "character_preferences": {
    "personality": "friendly|professional|casual|energetic",
    "voice_style": "warm|neutral|excited|calm",
    "conversation_length": "short|medium|long",
    "topics": ["gaming", "lifestyle", "preferences"]
  }
}`}</pre>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sage-900 mb-4">reward configuration</h3>
                <div className="code-block">
                  <pre>{`{
  "reward_settings": {
    "base_amount": 100,
    "bonus_multipliers": {
      "engagement_bonus": 1.2,
      "completion_bonus": 1.1,
      "quality_bonus": 1.3
    },
    "fallback_reward": 50
  }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Resources */}
        <section>
          <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">need help getting started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">documentation</h3>
                <p className="text-cozy-100 text-sm mb-4">comprehensive guides and tutorials</p>
                <button className="text-white hover:text-cozy-200">explore docs →</button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">quick start</h3>
                <p className="text-cozy-100 text-sm mb-4">get running in under 10 minutes</p>
                <button className="text-white hover:text-cozy-200">start tutorial →</button>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">support</h3>
                <p className="text-cozy-100 text-sm mb-4">get help from our developer team</p>
                <button className="text-white hover:text-cozy-200">contact support →</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ApiDocs