import { useEffect } from 'react'

export const useInteractiveEffects = () => {
  useEffect(() => {
    // Reveal on scroll
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.style.transition = 'transform 500ms cubic-bezier(0.2,0.8,0.2,1), opacity 500ms ease'
            e.target.style.transform = 'translateY(0px) scale(1)'
            e.target.style.opacity = '1'
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.2 }
    )
    revealEls.forEach((el) => {
      el.style.transform = 'translateY(16px) scale(0.99)'
      el.style.opacity = '0'
      io.observe(el)
    })

    // Tilt on hover
    const tiltEls = Array.from(document.querySelectorAll('[data-tilt]'))
    const handleMove = (e) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const tiltX = (y - 0.5) * -6
      const tiltY = (x - 0.5) * 6
      el.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`
    }
    const handleLeave = (e) => {
      const el = e.currentTarget
      el.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)'
    }
    tiltEls.forEach((el) => {
      el.style.transition = 'transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease'
      el.style.willChange = 'transform'
      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)
    })

    // Color reveal on hover for grayscale images
    const colorWrappers = Array.from(document.querySelectorAll('[data-color-hover]'))
    colorWrappers.forEach((wrap) => {
      const img = wrap.querySelector('img')
      if (!img) return
      img.style.transition = 'filter 220ms ease, transform 220ms ease'
      img.style.filter = 'grayscale(1) saturate(0.6)'
      img.style.objectFit = 'cover'
      wrap.style.backgroundColor = 'transparent'
      wrap.addEventListener('mouseenter', () => {
        img.style.filter = 'grayscale(0) saturate(1.1)'
        img.style.transform = 'scale(1.01)'
        // show the whole image inside the tile on hover
        img.style.objectFit = 'contain'
        wrap.style.backgroundColor = '#000'
      })
      wrap.addEventListener('mouseleave', () => {
        img.style.filter = 'grayscale(1) saturate(0.6)'
        img.style.transform = 'scale(1)'
        img.style.objectFit = 'cover'
        wrap.style.backgroundColor = 'transparent'
      })
    })

    return () => {
      io.disconnect()
      tiltEls.forEach((el) => {
        el.replaceWith(el.cloneNode(true)) // quick remove listeners
      })
    }
  }, [])
}

