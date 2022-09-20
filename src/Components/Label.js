import React from 'react'

import shareLoc from '../assets/images/tag.png'

export default function Label({ children }) {
  return (
    <span className="badge badge-pill text-fmGreen bg-fmSecondaryPink">
      <img src={shareLoc} alt="label" />
      {children}
    </span>
  )
}
