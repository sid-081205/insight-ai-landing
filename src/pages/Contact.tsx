import React, { useState } from 'react'
import { Mail, MessageCircle, Calendar, Users } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    gameType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            get in touch
          </h1>
          <p className="text-xl text-sage-700">
            ready to revolutionize your game monetization? let's chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-sage-900 mb-6">join the beta program</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                  your name
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
                  email address
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
                />
              </div>

              <div>
                <label htmlFor="gameType" className="block text-sm font-medium text-sage-700 mb-2">
                  game type
                </label>
                <select
                  id="gameType"
                  name="gameType"
                  value={formData.gameType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cozy-200 rounded-lg focus:ring-2 focus:ring-cozy-500 focus:border-transparent"
                >
                  <option value="">select game type</option>
                  <option value="puzzle">puzzle</option>
                  <option value="rpg">rpg</option>
                  <option value="racing">racing</option>
                  <option value="casual">casual</option>
                  <option value="strategy">strategy</option>
                  <option value="action">action</option>
                  <option value="other">other</option>
                </select>
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
                  placeholder="what kind of game are you building? how many players do you have? what's your current monetization strategy?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cozy-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cozy-700 transition-colors"
              >
                join beta program
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-cozy-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-sage-900 mb-6">why join our beta?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-cozy-600 mt-1" />
                  <div>
                    <div className="font-medium text-sage-900">early access</div>
                    <div className="text-sage-700 text-sm">be among the first to integrate insight ai</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-cozy-600 mt-1" />
                  <div>
                    <div className="font-medium text-sage-900">direct feedback</div>
                    <div className="text-sage-700 text-sm">help shape the product with your input</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-cozy-600 mt-1" />
                  <div>
                    <div className="font-medium text-sage-900">free tier</div>
                    <div className="text-sage-700 text-sm">extended free usage during beta period</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-sage-900 mb-6">get in touch directly</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cozy-600" />
                  <div>
                    <div className="font-medium text-sage-900">email us</div>
                    <div className="text-sage-700">hello@insight-ai.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-cozy-600" />
                  <div>
                    <div className="font-medium text-sage-900">discord community</div>
                    <div className="text-sage-700">join our developer community</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cozy-600 to-sage-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">schedule a demo call</h3>
              <p className="text-cozy-100 mb-6">
                want to see insight ai in action? book a 15-minute demo call with our team.
              </p>
              <button className="bg-white text-cozy-600 px-6 py-3 rounded-lg font-semibold hover:bg-cozy-50 transition-colors">
                book demo call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact