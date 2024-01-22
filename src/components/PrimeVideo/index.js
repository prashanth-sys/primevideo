// Write your code here
import {Component} from 'react'

import Slider from 'react-slick'

import MovieSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovie = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    console.log(actionMovie)
    const comedyMovie = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )
    console.log(comedyMovie)

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="krishna"
            className="prime-video"
          />
        </div>
        <div className="action-container">
          <Slider>
            {moviesList.map(movie => (
              <MovieSlider key={movie.id} movieDetails={movie} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
export default PrimeVideo
