import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Lightbulb, Code, Gamepad2, Mail } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'home', icon: Lightbulb },
    { path: '/api', label: 'api docs', icon: Code },
    { path: '/demos', label: 'demos', icon: Gamepad2 },
    { path: '/contact', label: 'contact us', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-midnight-900">
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-electric-400 neon-glow" />
              <span className="text-xl font-bold gradient-text">insight ai</span>
            </Link>
            
            <div className="flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                    location.pathname === path
                      ? 'text-electric-400 active'
                      : 'text-midnight-300 hover:text-electric-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-midnight-900 border-t border-midnight-700 text-midnight-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-6 w-6 text-electric-400" />
              <span className="font-semibold">insight ai</span>
            </div>
            <p className="text-sm text-midnight-400">
              revolutionizing game monetization through ai-powered surveys
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout