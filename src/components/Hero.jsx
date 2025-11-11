const computerImage =
  'https://www.ecpi.edu/sites/default/files/SofDev.png'

const Hero = ({ theme }) => {
  const sectionStyle = {
    minHeight: '92vh',
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
    padding: '140px 6vw 80px',
    position: 'relative',
    overflow: 'hidden',
  }

  const titleStyle = {
    fontSize: 'clamp(3rem, 8vw, 4.6rem)',
    margin: '18px 0 20px',
    letterSpacing: '-0.05em',
    background: `linear-gradient(90deg, ${theme.accent}, ${theme.secondary})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }
  if (theme.name === 'light') {
    // Use solid dark text for better contrast in light mode
    titleStyle.background = 'none'
    titleStyle.WebkitBackgroundClip = 'initial'
    titleStyle.backgroundClip = 'initial'
    titleStyle.color = theme.text
  }

  const textStyle = {
    color: theme.muted,
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 720,
    margin: '0 auto 32px',
  }

  const btnPrimary = {
    padding: '14px 26px',
    borderRadius: 999,
    border: 'none',
    textDecoration: 'none',
    color: '#fff',
    display: 'inline-block',
    background: `linear-gradient(135deg, ${theme.accent}, ${theme.secondary})`,
    boxShadow: `0 14px 30px ${theme.glow}`,
    transition: 'transform 180ms ease, box-shadow 220ms ease',
    cursor: 'pointer',
  }

  const btnGhost = {
    padding: '14px 26px',
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    textDecoration: 'none',
    color: theme.text,
    display: 'inline-block',
    background: theme.surface,
    transition: 'transform 180ms ease, box-shadow 220ms ease, background-color 180ms ease, color 180ms ease, border-color 180ms ease',
    cursor: 'pointer',
  }

  return (
    <header id="home" style={sectionStyle} data-reveal>
      <div
        style={{
          position: 'absolute',
          inset: '-10% -10% 0',
          backgroundImage: `url(${computerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(38px)',
          opacity: theme.name === 'dark' ? 0.35 : 0.3,
          transform: 'scale(1.1)',
        }}
        aria-hidden
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, ${theme.name === 'dark' ? 'rgba(3,6,15,0.7)' : 'rgba(255,255,255,0.65)'}, ${theme.background})`,
        }}
        aria-hidden
      />
      <div style={{ maxWidth: 880, position: 'relative', zIndex: 2 }}>
        <span
          style={{
            color: theme.accent,
            letterSpacing: '0.24em',
            fontSize: 12,
            textTransform: 'uppercase',
            display: 'inline-block',
          }}
        >
          Full Stack Developer
        </span>
        <h1 style={titleStyle}>Zakaria Dabella</h1>
        <p style={textStyle}>
          I craft modern, high-performance digital products that blend clean design with robust
          engineering. I specialize in full-stack web development and love turning ideas into
          impactful experiences.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a
            style={btnPrimary}
            href="#projects"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = `0 18px 40px ${theme.glow}`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = `0 14px 30px ${theme.glow}`
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(0.98)'
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1)'
            }}
          >
            View My Work
          </a>
          <a
            style={btnGhost}
            href="#contact"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow =
                theme.name === 'dark' ? '0 14px 30px rgba(3,8,20,0.35)' : '0 12px 24px rgba(15,23,42,0.12)'
              e.currentTarget.style.borderColor = theme.border
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = theme.border
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(0.98)'
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1)'
            }}
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero

