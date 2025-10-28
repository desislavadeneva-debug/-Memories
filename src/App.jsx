import React, { useEffect, useRef, useState } from 'react'
import messages from './data/messages.json'
import config from './data/config.json'
import MessageCard from './components/MessageCard.jsx'

// Map config.theme and style numbers to CSS custom properties
function buildCssVars() {
  const themeVars = config?.ui?.theme || {}
  const styleCfg = config?.ui?.styles || {}
  const layout = config?.ui?.layout || {}
  const vars = { ...themeVars }

  if (styleCfg.radius != null) vars['--radius'] = styleCfg.radius + 'px'
  if (styleCfg.cardMinHeight != null) vars['--card-min-h'] = styleCfg.cardMinHeight + 'px'
  if (styleCfg.transitionMs != null) vars['--transition-ms'] = styleCfg.transitionMs + 'ms'
  if (styleCfg.dotSize != null) vars['--dot-size'] = styleCfg.dotSize + 'px'
  if (styleCfg.spacing != null) vars['--spacing'] = styleCfg.spacing + 'px'

  if (layout.padding) vars['--page-padding'] = layout.padding
  if (layout.maxWidth) vars['--max-width'] = layout.maxWidth

  return vars
}

// Apply Google Fonts
function useGoogleFont() {
  useEffect(() => {
    const fontCfg = config?.ui?.font
    if (!fontCfg?.importUrl) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = fontCfg.importUrl
    document.head.appendChild(link)
    if (fontCfg.family) {
      document.documentElement.style.setProperty('--font-family', fontCfg.family)
    }
    return () => {
      if (link.parentNode) link.parentNode.removeChild(link)
    }
  }, [])
}

export default function App() {
  const [idx, setIdx] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const lastChange = useRef(Date.now())
  const hoverRef = useRef(false)

  const autoplayCfg = config?.ui?.autoplay || { enabled: false }
  const animCfg = config?.ui?.animations || {}

  useGoogleFont()

  const clamp = (n, min, max) => Math.max(min, Math.min(n, max))
  const next = () => setIdx(i => clamp(i + 1, 0, messages.length - 1))
  const prev = () => setIdx(i => clamp(i - 1, 0, messages.length - 1))
  const go = (i) => setIdx(clamp(i, 0, messages.length - 1))

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX }
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    const dx = touchEndX.current - touchStartX.current
    const now = Date.now()
    if (now - lastChange.current < 150) return
    lastChange.current = now
    if (dx < -50) next()
    if (dx >  50) prev()
  }

  // Autoplay (ако е включен в config.json)
  useEffect(() => {
    if (!autoplayCfg.enabled) return
    const interval = Math.max(1000, Number(autoplayCfg.intervalMs || 4000))
    const id = setInterval(() => {
      if (autoplayCfg.pauseOnHover && hoverRef.current) return
      setIdx(i => (i + 1) % messages.length)
    }, interval)
    return () => clearInterval(id)
  }, [autoplayCfg.enabled, autoplayCfg.intervalMs, autoplayCfg.pauseOnHover])

  const cssVars = buildCssVars()
  const animClass = animCfg.cardEnter === 'slide' ? 'anim-slide'
                  : animCfg.cardEnter === 'scale' ? 'anim-scale'
                  : 'anim-fade'

  const current = messages[idx] || {}

  // Ново: състояния за първи/последен
  const isFirst = idx === 0
  const isLast  = idx === messages.length - 1

  return (
    <div className="app" style={cssVars}>
      <h1>{config?.ui?.title || 'Farewell! 👋'}</h1>
      {config?.ui?.subtitle && <div className="subtitle">{config.ui.subtitle}</div>}

      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        aria-roledescription="carousel"
      >
        <section
          className={`card active ${animClass}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${idx + 1} от ${messages.length}`}
          key={idx}
          style={{ maxHeight: '65vh', overflowY: 'auto' }}
        >
          <MessageCard {...current} index={idx} total={messages.length} />
        </section>
      </div>

      {/* Навигация + индикатор */}
      <div className="controls" role="toolbar" aria-label="Carousel controls" style={{ gap: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button
          className="btn"
          onClick={prev}
          aria-label="Предишно"
          disabled={isFirst}
          aria-disabled={isFirst}
          title={isFirst ? 'Първо съобщение' : 'Назад'}
        >
          ◀ Предишно
        </button>

        {/* Индикатор за номер */}
        <span className="counter" aria-live="polite">
         <strong>{idx + 1}</strong> от <strong>{messages.length}</strong>
        </span>

        <button
          className="btn"
          onClick={next}
          aria-label="Следващо"
          disabled={isLast}
          aria-disabled={isLast}
          title={isLast ? 'Последно съобщение' : 'Напред'}
        >
          Следващо ▶
        </button>
      </div>
    </div>
  )
}
