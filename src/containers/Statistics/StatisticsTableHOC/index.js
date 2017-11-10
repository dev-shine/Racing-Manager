import React, {Component} from 'react'
import './StatisticsTable.scss'

const StatisticsTableHOC = (WrappedComponent) => (
  class StatisticsTable extends Component {
    render () {
      return (
        <div className="container relative statistics-table">
          <div className="row">
            <div className="col">
              <WrappedComponent {...this.props} />
            </div>
          </div>
        </div>
      )
    }
  }
)

export default StatisticsTableHOC
