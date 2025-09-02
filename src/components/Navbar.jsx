import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/blog', label: 'Blog' },
  { to: '/membership', label: 'Membership' },
  { to: '/literature', label: 'Library' },
]

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(isDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">E‑Learning</Link>

        <nav className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                clsx('text-sm hover:underline underline-offset-4', isActive && 'font-semibold text-brand')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/search" className="text-sm px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700">Search</Link>
          <Link to="/login" className="text-sm px-3 py-1.5 rounded-lg bg-brand text-white">Login</Link>
          <button
            onClick={() => setDark(v => !v)}
            aria-label="Toggle dark mode"
            className="text-sm px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  )
}
