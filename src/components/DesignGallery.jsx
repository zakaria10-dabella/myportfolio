import { useState } from 'react'
import SectionTitle from './SectionTitle'
import design01 from '../../image/WhatsApp Image 2025-11-11 at 15.46.04_2061b76e.jpg'
import design02 from '../../image/WhatsApp Image 2025-11-11 at 15.46.04_485853c7.jpg'
import design03 from '../../image/WhatsApp Image 2025-11-11 at 15.46.04_b40e4185.jpg'
import design04 from '../../image/WhatsApp Image 2025-11-11 at 15.46.30_e572c8af.jpg'
import design05 from '../../image/WhatsApp Image 2025-11-11 at 15.47.02_662ff68a.jpg'
import design06 from '../../image/WhatsApp Image 2025-11-11 at 15.47.02_e65ffe27.jpg'

const designImages = [
  { src: design01, caption: 'Brand exploration — fitness identity' },
  { src: design02, caption: 'UI concept — product landing page' },
  { src: design03, caption: '3D render — studio lighting practice' },
  { src: design04, caption: 'Poster series — monochrome mood' },
  { src: design05, caption: 'Social media kit — launch campaign' },
  { src: design06, caption: 'Illustration — character design study' },
]

const DesignGallery = ({ theme }) => {
  const [active, setActive] = useState(null)
  const sectionStyle = { padding: '64px 6vw' }
  const containerStyle = { maxWidth: 1100, margin: '0 auto' }
  const gridStyle = { display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }
  const figStyle = {
    margin: 0,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    borderRadius: 16,
    overflow: 'hidden',
    cursor: 'pointer',
  }
  const imgStyle = { width: '100%', height: 220, objectFit: 'cover' }
  const capStyle = { padding: '12px 16px', color: theme.muted, fontSize: 14 }

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(3,6,15,0.85)',
    display: 'grid',
    placeItems: 'center',
    zIndex: 20,
    padding: '40px 20px',
  }

  const modalStyle = {
    maxWidth: 'min(900px, 90vw)',
    width: '100%',
    background: theme.surface,
    borderRadius: 20,
    padding: 20,
    border: `1px solid ${theme.border}`,
    boxShadow: theme.name === 'dark' ? '0 30px 70px rgba(3,8,20,0.6)' : '0 24px 70px rgba(15,23,42,0.15)',
  }

  return (
    <section id="design" style={sectionStyle} data-reveal>
      <div style={containerStyle}>
        <SectionTitle
          eyebrow="Visual Direction"
          title="Design Portfolio"
          subtitle="Muted previews turn full color on hover — click to explore each piece in detail."
          theme={theme}
        />

        <div style={gridStyle}>
          {designImages.map((item) => (
            <figure
              key={item.caption}
              style={figStyle}
              data-color-hover
              data-tilt
              onClick={() => setActive(item)}
            >
              <img style={imgStyle} src={item.src} alt={item.caption} loading="lazy" />
              <figcaption style={capStyle}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div style={overlayStyle} onClick={() => setActive(null)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.caption}
              style={{ width: '100%', borderRadius: 14, marginBottom: 16 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
              <p style={{ margin: 0, color: theme.muted }}>{active.caption}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 999,
                  border: 'none',
                  background: theme.accent,
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default DesignGallery

