'use client'

import { useState } from 'react'

interface FormData {
  nev: string
  email: string
  uzenet: string
  elfogadas: boolean
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nev: '',
    email: '',
    uzenet: '',
    elfogadas: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({ nev: '', email: '', uzenet: '', elfogadas: false })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Hiba az üzenet elküldésekor:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {submitted && (
        <div className="mb-8 p-6 bg-primary/20 border border-primary/50 rounded-lg text-center slide-up">
          <p className="text-primary font-semibold">Üzenete sikeresen elküldve</p>
          <p className="text-foreground/70 text-sm mt-1">Köszönjük az üzeneted. Hamarosan válaszolunk.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="scale-in" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="nev" className="block text-sm font-semibold text-foreground mb-2">
            Név
          </label>
          <input
            type="text"
            id="nev"
            name="nev"
            value={formData.nev}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors hover:border-white/20"
            placeholder="A neved"
          />
        </div>

        <div className="scale-in" style={{ animationDelay: '0.3s' }}>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors hover:border-white/20"
            placeholder="az@email.com"
          />
        </div>

        <div className="scale-in" style={{ animationDelay: '0.4s' }}>
          <label htmlFor="uzenet" className="block text-sm font-semibold text-foreground mb-2">
            Üzenet
          </label>
          <textarea
            id="uzenet"
            name="uzenet"
            value={formData.uzenet}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-secondary/50 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none hover:border-white/20"
            placeholder="Az üzenet..."
          />
        </div>

        <div className="flex items-center gap-3 scale-in" style={{ animationDelay: '0.5s' }}>
          <input
            type="checkbox"
            id="elfogadas"
            name="elfogadas"
            checked={formData.elfogadas}
            onChange={handleChange}
            required
            className="w-4 h-4 accent-primary"
          />
          <label htmlFor="elfogadas" className="text-sm text-foreground/70">
            Elfogadom az adatvédelmi szabályzatot
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 hover:scale-105 transform scale-in"
          style={{ animationDelay: '0.6s' }}
        >
          {loading ? 'Küldés...' : 'Üzenet Küldése'}
        </button>
      </form>
    </>
  )
}
