import React, { Component } from 'react'
import MainTitle from './MainTitle'
import Fetch from 'node-fetch'
import AnnouncementContent from './AnnouncementContent'
import CSSModules from 'react-css-modules'
import styles from '../../App.css'

class Announcement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      AnnouncementList: [],
      getDataState: false
    }
  }
  componentWillMount() {
    console.log(this)
    /* let api = 'http://localhost:3007/announcementList'
    ;(async () => {
      const res = await Fetch(api)
      const json = await res.json()
      this.setState({
        AnnouncementList: json.data.list,
        getDataState: true
      })
    })() */
  }
  render() {
    return (
      <div styleName="announcement">
        <MainTitle
          title="公告"
          picUrl="https://security.ele.me/images/f1_textbg.png"
        />
        <div>我是公告啦</div>
        {this.state.getDataState ? (
          <AnnouncementContent AnnouncementList={this.state.AnnouncementList} />
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default CSSModules(Announcement, styles)
