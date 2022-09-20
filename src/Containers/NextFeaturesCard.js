import React, { useState } from 'react'

import CardBanner from '../Components/CardBanner';
import Tab from '../Components/Tab'
import Label from '../Components/Label';
import Card from '../Components/Card';
import { ReactComponent as ShareLoc } from '../assets/images/shareLoc.svg';
import { NextFeatureTabList } from '../data/nextFeature'

export default function NextFeaturesCard() {
  const [navIndex, setNavIndex] = useState(1)

  const updateNavIndex = (i) => {
    setNavIndex(i)
  }

  return (
    <CardBanner
      title='Manage your restaurant bucket list & share with friends'
      buttonTitle='Coming VERY SOON'
      newFeature={true}
    >
      <div className='d-flex mb-3' style={{ minWidth: 300, marginTop: '12px' }}>
        <h5 className='me-2 mb-0'>My restaurants</h5>
        <section className='d-flex justify-content-center align-items-center gap-1'>
          <ShareLoc />
          <p className='fw-bolder mb-0'>Share my list</p>
        </section>
      </div>

      <Tab list={NextFeatureTabList} updateNavIndex={updateNavIndex} />

      <div className="d-flex py-3 gap-2">
        {NextFeatureTabList[navIndex].label.map((label) => (
          <Label key={label}>
            {label}
          </Label>
        ))}
      </div>

      {
        NextFeatureTabList[navIndex].location.map((data) => (
          <Card
            title={data.name}
            subtitle={`${data.place} • ${data.category} • ${data.priceRange}`}
          >
            <section className='d-flex gap-2'>
              {data.label.map((label) => (
                <Label key={label}>
                  {label}
                </Label>
              ))}
            </section>
          </Card>
        ))
      }
    </CardBanner >
  )
}
