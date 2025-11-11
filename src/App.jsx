import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import DesignGallery from './components/DesignGallery'
import Contact from './components/Contact'
import BackgroundCanvas from './components/BackgroundCanvas'
import { useInteractiveEffects } from './effects/interactive'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { themes } from './theme'
import './global.css'

const App = () => {
  useInteractiveEffects()
  const [themeName, setThemeName] = useState('dark')
  const theme = useMemo(() => themes[themeName], [themeName])

  useEffect(() => {
    document.body.style.backgroundColor = theme.background
    document.body.style.color = theme.text
    document.body.dataset.theme = theme.name
  }, [theme])

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <BackgroundCanvas theme={theme} />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          color: theme.text,
          backgroundColor: theme.background,
          transition: 'background-color 300ms ease, color 300ms ease',
        }}
      >
        <Hero theme={theme} />
        <Skills theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <DesignGallery theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  )
}

export default App

