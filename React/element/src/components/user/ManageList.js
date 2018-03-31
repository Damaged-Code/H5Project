import React, { Component } from 'react'
import Svg from '../Svg'

export default class ManageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.list || {
        icon: 'icon-diannao',
        text: '123',
        direction: 'icon-jiantouyou',
      },
    }
  }

  render() {
    return (
      <section className="manage-list">
        <div className="content">
          <aside>
            <Svg icon={this.state.list.icon} />
          </aside>
          <div>
            {this.state.list.text}
            <span>
              <Svg icon={this.state.list.direction} />
            </span>
          </div>
        </div>
      </section>
    )
  }
}
