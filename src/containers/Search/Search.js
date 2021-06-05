import React, { Component } from 'react'

import Movie from '../../components/Movie'
import SearchInput from '../../components/SearchInput'
import { getMovies } from '../../helpers/fetch'

import './Search.css'

class Search extends Component {
  state = { data: [] }

  _renderLoading = () => {
    let loading = []

    for (let index = 10; index; index--) {
      loading.push(<div key={index} className="isLoading" />)
    }

    return loading
  }

  _submitQuery = async query => {
    await this.setState({ data: [] })

    const { Search } = await getMovies(query)

    return this.setState({ data: Search })
  }

  render = () => {
    const { data } = this.state

    return (
      <div className="Search">
        <div className="input">
          <SearchInput onSubmit={this._submitQuery} />
        </div>
        <div className="content">
          {!data.length
            ? this._renderLoading()
            : data.map((movie, index) => (
            <Movie key={index} {...movie} />
          ))}
        </div>
      </div>
    )
  }
}

export default Search
