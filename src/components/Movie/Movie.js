import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as Icon from 'react-feather'

import './Movie.css'

class Movie extends Component {
  static propTypes = {
    Title: PropTypes.string.isRequired,
    Year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Poster: PropTypes.string,
    imdbID: PropTypes.string.isRequired,
  }

  static defaultProps = {
    Title: 'SANS TITRE',
    Year: 0,
    Poster: 'http://fabienloaec.com/wp-content/themes/trend/assets/img/empty/424x500.png',
  }

  state = { isFavorite: false }

  _toggleFavorite = () => this.setState({ isFavorite: !this.state.isFavorite })

  render = () => {
    const { Title, Year, Poster, imdbID } = this.props
    const { isFavorite } = this.state

    return (
      <Link className="Movie" to={`/movie/${imdbID}`}>
        <img className="poster" src={Poster} alt="poster" />
        <div className="meta">
          <h3 className="title">{Title}</h3>
          <span className="year">{Year}</span>
          <button className="favorite" onClick={this._toggleFavorite} type="button">
            {isFavorite ? <Icon.CheckCircle /> : <Icon.PlusCircle />}
          </button>
        </div>
      </Link>
    )
  }
}

export default Movie
