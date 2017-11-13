import React, {Component} from 'react'
import './StatisticsTable.scss'

import { CSSTransitionGroup } from 'react-transition-group'

const StatisticsTableHOC = (MasterComponent, DetailComponent = null) => (
  class StatisticsTable extends Component {
    constructor (props) {
      super(props)
      this.state = {
        showDetail: false,
        rowData: null
      }
      this.toggleDetail = this.toggleDetail.bind(this)
    }

    toggleDetail (row) {
      this.setState({showDetail: !this.state.showDetail, rowData: row})
    }

    render () {
      const {showDetail, rowData} = this.state
      return (
        <div className="container relative statistics-table">
          <div className="row">
            <div className="col">
              {DetailComponent
                ? <CSSTransitionGroup
                  transitionName="stats-transition"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}>
                  {!showDetail
                    ? <MasterComponent onRowClick={this.toggleDetail} {...this.props} key='master'/>
                    : <DetailComponent onReturnToMaster={this.toggleDetail} {...this.props} rowData={rowData} key='detail'/>
                  }
                </CSSTransitionGroup>
                : <MasterComponent {...this.props}/>
              }
            </div>
          </div>
        </div>
      )
    }
  }
)

export default StatisticsTableHOC
