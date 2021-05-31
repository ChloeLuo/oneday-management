import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/index'
import NotFound from './pages/notFound'

class ReactMap extends React.Component {

  // updateHandle() {
  //   console.log("每次router变化后触发")
  // }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/404" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default ReactMap;