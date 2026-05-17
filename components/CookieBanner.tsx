'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleSettings = () => {
    localStorage.setItem('cookie-consent', 'settings')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-t border-white/10 p-4 slide-up animate-in">
      <div className="container-base max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 fade-in">
        <p className="text-sm text-foreground/80">
          Cookie-kat használunk a legjobb felhasználói élmény biztosítására. Adataid védelme számunkra fontos.
        </p>
        <div className="flex gap-3 fade-in" style={{animationDelay: '0.2s'}}>
          <button
            onClick={handleSettings}
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors border border-white/10 rounded hover:scale-105 transform"
          >
            Beállítások
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded hover:opacity-90 transition-opacity hover:scale-105 transform"
          >
            Elfogadás
          </button>
        </div>
      </div>
    </div>
  )
}
