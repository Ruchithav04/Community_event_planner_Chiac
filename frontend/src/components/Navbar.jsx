import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar({ isLoggedIn, currentUser, userRole, onLogout, darkMode, setDarkMode }) {
  const location = useLocation();
  
  const [open, setOpen] = useState(false);

  return (
    <nav className="gradient-border shadow-md sticky top-0 z-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-pink-500 text-white p-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <Link to="/" aria-label="EventHub home" className="text-xl font-extrabold gradient-text tracking-tight">
              EventHub
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/' 
                ? "gradient-chip text-indigo-700"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white/70 dark:hover:bg-gray-800"
              }`}
            >
              Home
            </Link>

            <Link 
              to="/events" 
              className={`font-medium px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/events' 
                  ? "gradient-chip text-indigo-700"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white/70 dark:hover:bg-gray-800"
              }`}
            >
              Events
            </Link>

            <Link 
              to="/about" 
              className={`font-medium px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/about' 
                  ? "gradient-chip text-indigo-700"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white/70 dark:hover:bg-gray-800"
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`font-medium px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/contact' 
                  ? "gradient-chip text-indigo-700"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-white/70 dark:hover:bg-gray-800"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* User Info and Logout */}
          <div className="hidden md:flex items-center space-x-4">
             {/* 🌙 DARK MODE TOGGLE — ADD HERE */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-indigo-600 rounded-full p-1 transition-all duration-300 shadow-inner"
               >
               <span className="absolute left-2 text-yellow-400 text-sm">☀️</span>
               <span className="absolute right-2 text-blue-400 text-sm">🌙</span>

                <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    darkMode ? "translate-x-8" : "translate-x-0"
                }`}
                />
              </button>
            {isLoggedIn ? (
              <>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 hover:text-blue-600 hover:bg-white/70">
                    Welcome, <span className="text-gray-600 hover:text-blue-600 hover:bg-white/70">{currentUser}</span>
                  </span>
                  {userRole === 'admin' && (
                    <span className="px-2.5 py-0.5 gradient-chip text-indigo-700 text-xs rounded-full font-medium">
                      Admin
                    </span>
                  )}
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 hover:bg-white/70 px-2.5 py-1.5 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1.5 rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all text-sm font-medium"
              >
                Sign In/Sign Up
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="p-2 rounded-md text-gray-600 hover:bg-white/80"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Links */}
          {open && (
            <div className="absolute right-4 top-16 w-44 surface-card gradient-border rounded-xl shadow-lg py-2 md:hidden bg-white dark:bg-gray-800 transition-colors duration-300">
              <Link to="/" onClick={() => setOpen(false)} className={`block px-4 py-2 text-sm transition-colors ${location.pathname === '/' ? "text-indigo-700 font-medium" : "text-gray-600 hover:text-blue-600"}`}>Home</Link>
              <Link to="/events" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:text-indigo-600">
                Events
              </Link>

              <Link to="/about" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:text-indigo-600">
                About
              </Link>

              <Link to="/contact" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:text-indigo-600">
                Contact
              </Link>

              {!isLoggedIn && (
              <>
               <Link to="/login" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm hover:text-indigo-600">
                 Sign In/Sign Up
              </Link>
              </>
           )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
