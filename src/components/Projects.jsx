import SectionTitle from './SectionTitle'

const projectCards = [
  {
    name: 'Gym System',
    description:
      'A full-featured fitness management platform covering memberships, workouts, coaches, and payments with insightful dashboards.',
    tags: ['React', 'Node.js', 'MySQL', 'Tailwind'],
    status: 'Live',
  },
  {
    name: 'Weather App',
    description: 'A weather app that allows you to see your local weather',
    tags: ['React', 'JavaScript', 'Tailwind'],
    status: 'live',

  },
  {
    name: 'Coming Soon',
    description: 'Exploring immersive 3D storytelling for the web with real-time interactions and motion.',
    tags: ['Three.js', 'WebGL'],
    status: 'Concept',
  },
]

const Projects = ({ theme }) => {
  const sectionStyle = { padding: '64px 6vw' }
  const containerStyle = { maxWidth: 1100, margin: '0 auto' }
  const gridStyle = { display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }
  const cardStyle = {
    position: 'relative',
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    padding: 26,
    borderRadius: 18,
    boxShadow: theme.name === 'dark' ? '0 20px 44px rgba(3,8,20,0.45)' : '0 14px 28px rgba(15,23,42,0.12)',
  }
  const badgeStyle = (color) => ({
    position: 'absolute',
    top: 18,
    right: 18,
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color,
  })
  const tagList = { display: 'flex', flexWrap: 'wrap', gap: 8, margin: 0, padding: 0, listStyle: 'none' }
  const tagStyle = {
    padding: '6px 12px',
    borderRadius: 999,
    background: theme.accentSoft,
    color: theme.accent,
    fontSize: 13,
  }

  return (
    <section id="projects" style={sectionStyle} data-reveal>
      <div style={containerStyle}>
        <SectionTitle
          eyebrow="Recent Work"
          title="Programming Projects"
          subtitle="Highlighting shipped products and upcoming builds that showcase my end-to-end development approach."
          theme={theme}
        />

        <div style={gridStyle}>
          {projectCards.map((project) => (
            <article key={project.name} style={cardStyle} data-tilt>
              <div
                style={badgeStyle(
                  project.status === 'Live' ? '#22c55e' : project.status === 'In Progress' ? '#f97316' : theme.secondary
                )}
              >
                {project.status}
              </div>
              <h3 style={{ margin: 0, color: theme.text }}>{project.name}</h3>
              <p style={{ color: theme.muted, lineHeight: 1.7 }}>{project.description}</p>
              <ul style={tagList}>
                {project.tags.map((tag) => (
                  <li key={tag} style={tagStyle}>
                    {tag}
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

export default Projects

