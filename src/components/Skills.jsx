import SectionTitle from './SectionTitle'

const skillCategories = [
  {
    name: 'Programming Languages & Tools',
    items: [
      { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      {
        label: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      { label: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { label: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    name: 'Design Suite',
    items: [
      {
        label: 'Adobe',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg',
      },
      { label: 'Blender', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/blender.svg' },
      { label: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg' },
      {
        label: 'Canva',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg',
      },
    ],
  },
  {
    name: 'Office & Productivity',
    items: [
      {
        label: 'Microsoft Excel',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg',
      },
      {
        label: 'Microsoft Word',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftword.svg',
      },
      {
        label: 'Microsoft PowerPoint',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftpowerpoint.svg',
      },
    ],
  },
]

const Skills = ({ theme }) => {
  const sectionStyle = { padding: '64px 6vw' }
  const containerStyle = { maxWidth: 1100, margin: '0 auto' }
  const gridStyle = { display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }
  const cardStyle = {
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    padding: 24,
    borderRadius: 18,
    boxShadow: theme.name === 'dark' ? '0 18px 40px rgba(3,8,20,0.4)' : '0 12px 26px rgba(15,23,42,0.08)',
  }
  const titleStyle = { marginTop: 0, marginBottom: 16, color: theme.text }
  const listStyle = { margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12 }
  const liStyle = { display: 'flex', alignItems: 'center', gap: 12, color: theme.muted, fontWeight: 500 }
  const iconWrap = {
    width: 36,
    height: 36,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 11,
    background: theme.accentSoft,
    border: `1px solid ${theme.border}`,
  }

  return (
    <section id="skills" style={sectionStyle} data-reveal>
      <div style={containerStyle}>
        <SectionTitle
          eyebrow="What I Work With"
          title="Skills & Toolset"
          subtitle="A blend of development, design, and productivity tools that empower me to ship exceptional experiences end-to-end."
          theme={theme}
        />

        <div style={gridStyle}>
          {skillCategories.map((category) => (
            <article key={category.name} style={cardStyle} data-tilt>
              <h3 style={titleStyle}>{category.name}</h3>
              <ul style={listStyle}>
                {category.items.map((item) => (
                  <li key={item.label} style={liStyle}>
                    <span style={iconWrap}>
                      <img src={item.icon} alt={`${item.label} logo`} loading="lazy" />
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

