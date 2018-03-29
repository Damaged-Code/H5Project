import React, { Component } from 'react'
import propTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../../styles/AnnouncementContent.css'

class AnnouncementContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AnnouncementList: []
    }
  }
  componentDidMount() {
    console.log(this.props)
    /* this.props.AnnouncementList.map(list => {
      let date = new Date(list.createdAt).toDateString(),
        year = date.split(' ')[3],
        month = date.split(' ')[1],
        day = date.split(' ')[2]
      list.day = day
      list.month = month
    }) */
  }
  render() {
    return (
      <div styleName="content">
        <ul>
          <li>
            <div styleName="con-blue">
              <span styleName="cursor-pointer">1</span>
              <span styleName="cursor-pointer">2</span>
            </div>
            <div styleName="con-text cursor-pointer">
              <h2>1</h2>
              <p>2</p>
            </div>
            <div styleName="con-goto-detail cursor-pointer">
              <img src="https://security.ele.me/images/e1_goto.png" alt="" />
              <img src="https://security.ele.me/images/e1_goto-b.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
AnnouncementContent.propTypes = {
  AnnouncementList: propTypes.array
}
export default CSSModules(AnnouncementContent, styles, { allowMultiple: true })
