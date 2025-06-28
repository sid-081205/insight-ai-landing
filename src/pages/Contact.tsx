import React, { useState } from 'react'
import { Mail, MessageCircle, Calendar, Users, CheckCircle, ArrowRight, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    gameType: '',
    playerCount: '',
    message: '',
    interestedIn: []
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (value: string) => {
    const currentInterests = formData.interestedIn as string[]
    const updatedInterests = currentInterests.includes(value)
      ? currentInterests.filter(item => item !== value)
      : [...currentInterests, value]
    
    setFormData({
      ...formData,
      interestedIn: updatedInterests
    })
  }

  const benefits = [
    {
      icon: Users,
      title: 'early access',
      description: 'be among the first to integrate insight ai and get priority support'
    },
    {
      icon: MessageCircle,
      title: 'direct feedback',
      description: 'help shape the product with your input and feature requests'
    },
    {
      icon: Calendar,
      title: 'community access',
      description: 'join our discord community of game developers'
    },
    {
      icon: CheckCircle,
      title: 'dedicated support',
      description: 'direct line to our engineering team for integration help'
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: 'email us',
      description: 'hello@insight-ai.com',
      subtitle: 'we respond within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'discord community',
      description: 'join 500+ developers',
      subtitle: 'get help from the community'
    },
    {
      icon: Phone,
      title: 'schedule call',
      description: 'book a 15-min demo',
      subtitle: 'see insight ai in action'
    }
  ]

  const faqs = [
    {
      question: 'how long does integration take?',
      answer: 'most developers integrate insight ai in under 10 minutes using our sdk. we provide step-by-step guides for all major game engines.'
    },
    {
      question: 'what data do you collect?',
      answer: 'we only collect survey responses and basic engagement metrics. all data is anonymized and gdpr compliant. players always know what data is being collected.'
    },
    {
      question: 'is insight ai really free?',
      answer: 'yes! insight ai is completely free with unlimited surveys. we believe in making better monetization accessible to all developers.'
    },
    {
      question: 'can i customize the ai characters?',
      answer: 'absolutely! you can customize character personalities, voices, and conversation styles to match your game\'s theme and tone.'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-sage-900 mb-4">
              thanks for reaching out!
            </h1>
            <p className="text-lg text-sage-700 mb-8">
              we've received your message and will be in touch within 24 hours with your api key and setup instructions.
            </p>
            <div className="space-y-4">
              <div className="bg-cozy-50 p-4 rounded-lg">
                <h3 className="font-semibold text-sage-900 mb-2">what happens next?</h3>
                <ul className="text-sm text-sage-700 space-y-1">
                  <li>• you'll receive your api key via email</li>
                  <li>• access to our private discord community</li>
                  <li>• invitation to our weekly developer calls</li>
                  <li>• complete documentation and examples</li>
                </ul>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-cozy-600 hover:text-cozy-700 font-medium"
              >
                ← back to contact page
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            get started with insight ai
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            ready to revolutionize your game monetization? join developers already using insight ai to create better player experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cozy-100">
              <h2 className="text-2xl font-semibold text-sage-900 mb-6">get your api key</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                      your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                      email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-sage-700 mb-2">
                      company/studio
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                      placeholder="indie developer, big studio, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="gameType" className="block text-sm font-medium text-sage-700 mb-2">
                      primary game type *
                    </label>
                    <select
                      id="gameType"
                      name="gameType"
                      value={formData.gameType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                      required
                    >
                      <option value="">select game type</option>
                      <option value="puzzle">puzzle</option>
                      <option value="rpg">rpg</option>
                      <option value="racing">racing</option>
                      <option value="casual">casual</option>
                      <option value="strategy">strategy</option>
                      <option value="action">action</option>
                      <option value="simulation">simulation</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="playerCount" className="block text-sm font-medium text-sage-700 mb-2">
                    monthly active players
                  </label>
                  <select
                    id="playerCount"
                    name="playerCount"
                    value={formData.playerCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                  >
                    <option value="">select player count</option>
                    <option value="pre-launch">pre-launch</option>
                    <option value="1k-10k">1k - 10k</option>
                    <option value="10k-100k">10k - 100k</option>
                    <option value="100k-1m">100k - 1m</option>
                    <option value="1m+">1m+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-3">
                    what are you most interested in? (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'replacing video ads',
                      'improving retention',
                      'collecting player insights',
                      'custom ai characters',
                      'voice integration',
                      'analytics dashboard'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={(formData.interestedIn as string[]).includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="rounded border-cozy-300 text-cozy-600 focus:ring-cozy-500"
                        />
                        <span className="text-sm text-sage-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                    tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                    placeholder="what kind of game are you building? what's your current monetization strategy? any specific challenges you're facing?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cozy-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-cozy-700 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  get started free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-cozy-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-sage-900 mb-6">what you get</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <benefit.icon className="h-5 w-5 text-cozy-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sage-900">{benefit.title}</div>
                      <div className="text-sage-700 text-sm">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-cozy-100">
              <h3 className="text-xl font-semibold text-sage-900 mb-6">other ways to reach us</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cozy-50 transition-colors cursor-pointer">
                    <method.icon className="h-5 w-5 text-cozy-600 mt-1" />
                    <div>
                      <div className="font-medium text-sage-900">{method.title}</div>
                      <div className="text-sage-700 text-sm">{method.description}</div>
                      <div className="text-sage-500 text-xs">{method.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              frequently asked questions
            </h2>
            <p className="text-xl text-sage-700">
              get answers to common questions about insight ai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-cozy-100">
                <h3 className="font-semibold text-sage-900 mb-3">{faq.question}</h3>
                <p className="text-sage-700 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ready to transform your game monetization?
            </h2>
            <p className="text-xl text-cozy-100 mb-6">
              join hundreds of developers already creating better player experiences
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-cozy-200">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4" />
                <span>completely free</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>dedicated support</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact