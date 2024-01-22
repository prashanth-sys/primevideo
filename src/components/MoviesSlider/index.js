// Write your code here

const MoviesSlider = props => {
  const {movieDetails} = props
  const {thumbnailUrl} = movieDetails
  return (
    <div>
      <h1 className="heading">Action Movies</h1>
      <img src={thumbnailUrl} alt="krishna" />
    </div>
  )
}
export default MoviesSlider
