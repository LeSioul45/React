import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getMovieDetails } from '../../helpers/fetch'
import './Details.css'

class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    details: {
      Poster: 'http://fabienloaec.com/wp-content/themes/trend/assets/img/empty/424x500.png',
    },
  }

  componentDidMount = async () => {
    const { imdbID } = this.props.match.params
    const details = await getMovieDetails(imdbID)

    return this.setState({ details })
  }

  render = () => {
    const { Title, Released, Plot, Genre, Poster, Director, Actors, imdbRating } = this.state.details

    return (
      <div className="Details">
        <img className="poster" src={Poster} alt="poster" />
        <div className="meta">
          <h3 className="title">{Title}</h3>
          <small className="date">released on {Released}</small>
          <span className="genre">Kind: {Genre}</span>
          <p className="director">Directed by: {Director}</p>
          <p className="actors">Actors: {Actors}</p>
          <p className="plot">Plot: {Plot}</p>
          <span className="rating">Rating: {imdbRating} / 10</span>
        </div>
      </div>
    )
  }
}

export default Details
