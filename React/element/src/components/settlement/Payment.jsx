import React, { Component } from 'react'
import Svg from '../Svg'

export default class extends Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <div>
              1
              <p>
                <span>送达时间</span>
              </p>
              <p>
                <span>蜂鸟专送</span>
              </p>
            </div>
            <div>
              2
              <div>
                <section>1</section>
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
