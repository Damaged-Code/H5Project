import React, { Component } from 'react'
import Title from '../parts/Title'
import Svg from '../Svg'
import Present from '../parts/Present'

const presents = [
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/',
    name: '7 元饿了么红包',
    Price: '210 金币 ',
    salePrice: '7',
    type: '限时优惠',
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/',
    name: '7 元饿了么红包',
    Price: '210 金币 ',
    salePrice: '7',
    type: '限时优惠',
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/c5/f595b52bc6b50c9899398dccffd42jpeg.jpeg?imageMogr/format/webp/',
    name: '7 元饿了么红包',
    Price: '210 金币 ',
    salePrice: '7',
    type: '限时优惠',
  },
]
export default class Main extends Component {
  render() {
    return (
      <main className="main">
        <header className="head-title">
          <span className="left" />
          <Svg icon="icon-5" />
          <Title text="推荐商家" />
          <span className="right" />
        </header>
        <section className="present-box">
          {presents.map((tag, index) => {
            return <Present presents={tag} key={index} />
          })}
        </section>
        <footer className="more">
          <Title text="查看更多" />
          <Svg icon="icon-jiantouyou" />
        </footer>
        <div className="bottom" />
      </main>
    )
  }
}
