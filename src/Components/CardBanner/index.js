import React from 'react'

import './cardBanner.scss'

export default function CardBanner(props) {
  const buttonBg = props?.newFeature ? 'bg-fmPink' : 'bg-fmGreen';

  return (
    <div className="card card-wrapper">
      <div className="row g-md-1">
        <div className="col">
          <section className='d-flex align-items-start justify-content-center h-100 flex-column p-2'>
            <h5>{props.title}</h5>
            <button type="button" className={`btn text-white btn-sm ${buttonBg} fw-bolder`}>{props.buttonTitle}</button>
          </section>
        </div >
        <div className='col right-card-wrapper'>
          {props.children}
        </div>
      </div>
    </div>
  )
}
