const SectionTitle = ({ eyebrow, title, subtitle, theme }) => {
  const wrapStyle = { textAlign: 'center', margin: '0 auto 48px', maxWidth: 640 }
  const eyebrowStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 14px',
    borderRadius: 999,
    textTransform: 'uppercase',
    letterSpacing: '0.24em',
    fontSize: 10,
    color: theme.accent,
    backgroundColor: theme.accentSoft,
  }
  const titleStyle = { fontSize: 'clamp(2rem, 3vw, 2.8rem)', margin: '18px 0 12px', letterSpacing: '-0.03em', color: theme.text }
  const subtitleStyle = { margin: 0, color: theme.muted, lineHeight: 1.7, fontSize: 16 }

  return (
    <div style={wrapStyle}>
      {eyebrow && <span style={eyebrowStyle}>{eyebrow}</span>}
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle

