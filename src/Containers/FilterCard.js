import React, { useState } from 'react'

import CardBanner from '../Components/CardBanner';
import Card from '../Components/Card';
import { IconsData } from '../data/iconList';

export default function FilterCard() {
  const [navIndex, setNavIndex] = useState(0)

  const updateNavIndex = (i) => {
    setNavIndex(i)
  }

  return (
    <CardBanner
      title='Filter menus by your dietary requirements'
      buttonTitle='Check it out'
    >
      <div className='right-card-content mt-3'>
        <ul className='list-unstyled d-flex justify-content-between mb-0'>
          {IconsData.map((data, index) => (
            <li key={data.desc} className='text-center' onClick={() => updateNavIndex(index)}>
              <div className={`border rounded-circle border-fmGreen border-1 ${navIndex === index ? "bg-filter-active" : " "}`} style={{ width: 35, height: 35 }}>
                <data.Image stroke={`${navIndex === index ? "white" : " "}`} style={{ display: 'block', margin: '7px auto' }} />
              </div>
              <p className='text-fmGreen fw-bolder' style={{ fontSize: 10 }}>{data.desc}({data.cardsData.length})</p>
            </li>
          ))}
        </ul>
      </div>

      {IconsData[navIndex].cardsData.map((data, index) => (
        <Card
          title={data.title}
          subtitle={data.desc}
          key={index}
        >
          <data.Image />
          <span className='mx-3'>
            {data.loveCount}
          </span>
          <button type="button" className="btn bg-fmGreen text-white btn-sm">{data.buttonTitle}</button>
        </Card>
      ))}
    </CardBanner>
  )
}
