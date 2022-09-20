import React from 'react'

import CardBanner from '../Components/CardBanner';
import burger from '../assets/images/burger.jpg'

import { ReactComponent as Tenant1 } from '../assets/images/tenant-1.svg';
import { ReactComponent as Tenant2 } from '../assets/images/tenant-2.svg';
import { ReactComponent as Tenant3 } from '../assets/images/tenant-3.svg';
import { IconsData } from '../data/iconList';

export default function FilterCards() {
  return (
    <CardBanner
      title='Search across all Australian delivery & booking providers'
      buttonTitle='Check it out'
    >
      <div className="card mt-3 me-3">
        <div className="d-flex py-3 px-2">
          <div style={{ width: 75 }}>
            <img src={burger} className='w-100 h-100' alt="burger" />
          </div>

          <div className="card-body">
            <h5 className="card-title">Bar Luca</h5>
            <p className="card-text"><small className="text-muted">Sydney CBD.</small></p>
            <p className="card-text"><small className="text-muted">88% Positive</small></p>
          </div>
        </div>

        <ul className='bg-fmGreenLight list-unstyled d-flex gap-2 m-0 pb-0 scroll-pill'>
          {IconsData.map((data, index) => (
            <li key={index} className='border badge rounded-pill border-fmGreen border-1 d-flex align-items-center' >
              <data.Image />
              <span className='text-fmGreen fw-bolder mx-1'>{data.desc}({data.cardsData.length})</span>
            </li>
          ))}
        </ul>

        <div className='p-2'>
          <h5 className='text-fmPink pt-2'>Available on</h5>
          <section className='d-flex gap-2 py-2'>
            <Tenant1 />
            <Tenant3 />
            <Tenant2 />
          </section>
        </div>
      </div>
    </CardBanner>
  )
}
