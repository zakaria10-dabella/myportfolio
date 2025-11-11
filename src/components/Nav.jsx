const items = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#design', label: 'Design' },
  { href: '#contact', label: 'Contact' },
]

const Nav = ({ theme, onToggleTheme }) => {
  const barStyle = {
    position: 'fixed',
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 12,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    padding: '10px 16px',
    borderRadius: 999,
    background: theme.navBg,
    border: `1px solid ${theme.border}`,
    backdropFilter: 'blur(14px)',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '95vw',
  }

  const linkStyle = {
    color: theme.text,
    textDecoration: 'none',
    fontSize: 14,
    padding: '6px 10px',
    borderRadius: 8,
    border: `1px solid transparent`,
    transition: 'background-color 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease',
  }

  const buttonStyle = {
    border: `1px solid ${theme.border}`,
    background: theme.surfaceLight,
    color: theme.text,
    borderRadius: 999,
    padding: '6px 12px',
    fontSize: 12,
    cursor: 'pointer',
  }

  return (
    <nav className="main-nav" style={barStyle}>
      {items.map((i) => (
        <a
          key={i.href}
          href={i.href}
          style={linkStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.accentSoft
            e.currentTarget.style.borderColor = theme.border
            e.currentTarget.style.color = theme.accent
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.borderColor = 'transparent'
            e.currentTarget.style.color = theme.text
            e.currentTarget.style.transform = 'translateY(0)'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(0.98)'
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px) scale(1)'
          }}
        >
          {i.label}
        </a>
      ))}
      <button type="button" onClick={onToggleTheme} style={buttonStyle}>
        {theme.name === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  )
}

export default Nav

