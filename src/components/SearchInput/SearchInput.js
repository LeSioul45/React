import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SearchInput.css'

class SearchInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = { value: '' }

  _handleChange = ({ target: { value } }) => this.setState({ value })

  render = () => {
    const { onSubmit } = this.props
    const { value } = this.state

    return (
      <div className="SearchInput">
        <input className="query" onChange={this._handleChange} value={value} />
        <button type="button" className="submit" onClick={() => onSubmit(value)}>
          SEARCH
        </button>
      </div>
    )
  }
}

export default SearchInput
