import SectionTitle from './SectionTitle'

const contactDetails = [
  { label: 'Phone', value: '0635451685', link: 'tel:+213000000000' },
  { label: 'Email', value: 'zakariaadabella@gmail.com', link: 'mailto:zakaria.dev@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/zakaria-dabella', link: 'https://www.linkedin.com' },
]

const socials = [
  {
    name: 'WhatsApp',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    link: '#',
  },
  {
    name: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: '#',
  },
  {
    name: 'Instagram',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    link: '#',
  },
]

const Contact = ({ theme }) => {
  const sectionStyle = { padding: '64px 6vw' }
  const containerStyle = { maxWidth: 1100, margin: '0 auto' }
  const wrapStyle = {
    display: 'grid',
    gap: 24,
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    alignItems: 'start',
  }
  const cardStyle = {
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    padding: 26,
    borderRadius: 18,
    boxShadow: theme.name === 'dark' ? '0 20px 44px rgba(3,8,20,0.45)' : '0 16px 36px rgba(15,23,42,0.12)',
  }
  const listStyle = { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16 }
  const labelStyle = { color: theme.accent, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.14em' }
  const linkStyle = { color: theme.text, fontWeight: 600, textDecoration: 'none' }
  const socialsStyle = { display: 'flex', gap: 12, flexWrap: 'wrap' }
  const socialBtn = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 18px',
    borderRadius: 999,
    background: theme.surfaceLight,
    border: `1px solid ${theme.border}`,
    color: theme.text,
    textDecoration: 'none',
    transition: 'transform 180ms ease, box-shadow 220ms ease, background-color 180ms ease, color 180ms ease, border-color 180ms ease',
    cursor: 'pointer',
  }

  return (
    <section id="contact" style={sectionStyle} data-reveal>
      <div style={containerStyle}>
        <SectionTitle
          eyebrow="Let’s Connect"
          title="Contact & Socials"
          subtitle="I’m available for full-time opportunities, freelance projects, and collaborations."
          theme={theme}
        />

        <div style={wrapStyle}>
          <div style={cardStyle}>
            <ul style={listStyle}>
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <span style={labelStyle}>{item.label}</span>
                  <a style={linkStyle} href={item.link}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>

          <div style={socialsStyle}>
            {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              style={socialBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow =
                  theme.name === 'dark' ? '0 12px 26px rgba(3,8,20,0.35)' : '0 10px 22px rgba(15,23,42,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(0.98)'
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1)'
              }}
            >
                <img src={social.icon} alt={`${social.name} logo`} loading="lazy" style={{ width: 24, height: 24 }} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

