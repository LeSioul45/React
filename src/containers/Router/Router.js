import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Search from '../../containers/Search'
import Details from '../../containers/Details'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/movie/:imdbID" component={Details} />
    </Switch>
  </BrowserRouter>
)

export default Router
