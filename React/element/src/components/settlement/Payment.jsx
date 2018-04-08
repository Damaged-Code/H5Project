import React, { Component } from 'react'
import Svg from '../Svg'
import { TimeSelect } from 'element-react'

export default class extends Component {
  constructor(props) {
    super(props)
    let date = new Date(),
      year = date.getFullYear(),
      mouth = date.getMonth(),
      day = date.getDay(),
      hour = date.getHours(),
      minutes = date.getMinutes()

    this.state = {
      startDate: new Date(year, mouth, day, hour, 0),
    }
  }
  handleStartUpdate(startDate) {
    this.setState({ startDate })
  }
  render() {
    return (
      <div className="payment checkout-section key-card">
        <section>
          <div className="delivery">
            <div className="delivery-left">
              <p className="delivery-time">
                <span>送达时间</span>
              </p>
              <p className="delivery-extra">
                <span>蜂鸟专送</span>
              </p>
            </div>

            <div className="right">
              <div>
                <section>
                  <TimeSelect
                    start="08:30"
                    step="00:15"
                    end="18:30"
                    placeholder="选择时间"
                    value={this.state.startDate}
                    onChange={this.handleStartUpdate.bind(this)}
                  />
                </section>
                <Svg icon="icon-jiantouyou" />
              </div>
            </div>
          </div>
        </section>
        <section>2</section>
      </div>
    )
  }
}
