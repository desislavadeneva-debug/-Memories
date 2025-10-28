import React from 'react'

function initials(name='') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0]?.toUpperCase())
    .join('') || '?'
}

export default function MessageCard({ name, role = 'Developer', message, date, index, total, colors = {}, avatarUrl }) {
  const styleVars = { ...colors } // allow CSS vars like --accent per slide
  return (
    <article style={styleVars}>
      <header className="author">
        <div className="avatar" aria-hidden>
          {avatarUrl ? <img src={avatarUrl} alt="" /> : initials(name)}
        </div>
        <div className="meta">
          <div className="name">{name || 'Анонимен'}</div>
          <div className="role">{role}</div>
        </div>
        <span className="sr-only">{`Слайд ${index+1} от ${total}`}</span>
      </header>

      <div className="message">
        {message}
      </div>

      <footer className="footer">
        <span>{date || ''}</span>
        <span>#{String(index + 1).padStart(2, '0')}</span>
      </footer>
    </article>
  )
}
