import SectionTitle from './SectionTitle'
import profileImage from '../../image/profile.jpg'

const About = ({ theme }) => {
  const sectionStyle = { padding: '64px 6vw' }
  const containerStyle = { maxWidth: 1100, margin: '0 auto' }
  const bodyStyle = {
    display: 'grid',
    gap: 32,
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    alignItems: 'center',
  }
  const textStyle = { display: 'grid', gap: 14, color: theme.muted, lineHeight: 1.8 }
  const avatarWrap = {
    position: 'relative',
    width: 240,
    height: 240,
    borderRadius: '50%',
    padding: 6,
    background: `linear-gradient(135deg, ${theme.accent}, ${theme.secondary})`,
    boxShadow: theme.name === 'dark' ? '0 30px 60px rgba(3,8,20,0.55)' : '0 20px 40px rgba(15,23,42,0.15)',
    margin: '0 auto',
  }
  const avatarImg = { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }

  return (
    <section id="about" style={sectionStyle} data-reveal>
      <div style={containerStyle}>
        <SectionTitle
          eyebrow="Who I Am"
          title="A Quick Snapshot"
          subtitle="I’m a builder at heart who thrives at the intersection of engineering and design."
          theme={theme}
        />

        <div style={bodyStyle}>
          <div style={textStyle}>
            <p>
              I’m Zakaria Dabella, a full-stack developer focused on creating immersive web experiences
              that feel as good as they look. I enjoy architecting scalable systems, designing smooth
              user journeys, and collaborating with multi-disciplinary teams. Outside of coding, I’m
              constantly sharpening my design eye and exploring new creative tools.
            </p>
            <p>
              My goal is to deliver work that is clean, performant, and memorable. Whether it’s a
              product MVP, a brand website, or a data-driven dashboard, I push for clarity, polish, and
              measurable impact.
            </p>
          </div>
          <div>
            <div style={avatarWrap} data-tilt>
              <img style={avatarImg} src={profileImage} alt="Zakaria Dabella" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

