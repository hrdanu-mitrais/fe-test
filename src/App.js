
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';

import FilterCard from './Containers/FilterCard';
import SearchCard from './Containers/SearchCard';
import NextFeaturesCard from './Containers/NextFeaturesCard';

import useScreenDetection from './utils/useScreenDetection'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const { isMobile } = useScreenDetection();

  function carouselContent() {
    return (
      <div id="cardCarousel" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#cardCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <FilterCard />
          </div>
          <div className="carousel-item">
            <SearchCard />
          </div>
          <div className="carousel-item">
            <NextFeaturesCard />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <header>
        <Navigation />
        <Banner />
      </header>
      <main>
        <div className="container">
          {isMobile ? carouselContent() : (
            <div className='row'>
              <div className='col col-md mb-2'>
                <FilterCard />
              </div>
              <div className='col col-md mb-2'>
                <SearchCard />
              </div>
              <div className='col col-md mb-2'>
                <NextFeaturesCard />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
