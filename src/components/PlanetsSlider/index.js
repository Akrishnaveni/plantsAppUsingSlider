import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetSlider
