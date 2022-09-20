import React, { useState } from 'react'

import { ReactComponent as Logo } from '../assets/images/logo.svg';
// import { ReactComponent as MapPin } from '../assets/images/map-pin.svg';

export default function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-fmGreen">
      <div className="container-fluid d-flex justify-content-between">
        <Logo />
        {/* <section className="navbar-text mx-2 d-none d-sm-none d-md-block">
          <MapPin />
          <small className='text-white fs-6 fw-bolder mx-2'>
            Sydney CBD, NSW
          </small>
        </section> */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {/* <li className="nav-item text-white text-uppercase fs-6 fw-bolder mx-lg-2">
              for restaurants
            </li> */}
            <li className="nav-item text-white fs-6 fw-bolder mx-lg-2">
              Login
            </li>
            <li className="nav-item text-white fs-6 fw-bolder mx-lg-2">
              Sign up
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

