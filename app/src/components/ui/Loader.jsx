import React from 'react'

const DELAYS = ['0s', '0.2s', '0.4s', '0.6s', '0.8s']

export default function Loader() {
  return (
    <div className="loader-container" role="status" aria-label="Loading">
      {DELAYS.map((delay, i) => (
        <span
          key={i}
          className="loader-circle"
          style={{ animationDelay: delay }}
        />
      ))}
    </div>
  )
}
