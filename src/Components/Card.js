import React from 'react'

export default function Card(props) {
  return (
    <div className="card mb-3 me-3">
      <div className="card-body">
        <p className="card-title">{props.title}</p>
        <p className="card-subtitle mb-2 text-muted">{props.subtitle}</p>
        {props.children}
      </div>
    </div>
  )
}
