import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Code, Gamepad2, Mail } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'home', icon: Brain },
    { path: '/api', label: 'api docs', icon: Code },
    { path: '/demos', label: 'demos', icon: Gamepad2 },
    { path: '/contact', label: 'contact us', icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-cozy-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-cozy-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-cozy-600" />
              <span className="text-xl font-bold gradient-text">insight ai</span>
            </Link>
            
            <div className="flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                    location.pathname === path
                      ? 'text-cozy-600 active'
                      : 'text-sage-700 hover:text-cozy-600'
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

      <footer className="bg-sage-900 text-cozy-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6" />
              <span className="font-semibold">insight ai</span>
            </div>
            <p className="text-sm text-cozy-200">
              revolutionizing game monetization through ai-powered surveys
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout