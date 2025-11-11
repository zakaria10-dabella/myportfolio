const Footer = ({ theme }) => {
  const footerStyle = {
    padding: '40px 6vw',
    borderTop: `1px solid ${theme.border}`,
    marginTop: 40,
    background: theme.surfaceLight,
  }

  const innerStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.muted,
    fontSize: 14,
  }

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <span>© {new Date().getFullYear()} Zakaria Dabella. All rights reserved.</span>
        <span>Crafted with passion for code & design.</span>
      </div>
    </footer>
  )
}

export default Footer

