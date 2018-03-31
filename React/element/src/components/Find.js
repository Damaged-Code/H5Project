import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import Advert from './parts/Advert'
import AdvertsBox from './parts/AdvertsBox'
import Main from './find/Main'

const boxes = [
  [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/3/cc/a45d2b9d7d09bbc49b40d4e626093jpeg.jpeg?imageMogr/format/webp/',
      text: ['百万红包', '星航银行联盟卡'],

      path: '/',
    },
  ],
  [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/',
      text: ['百万红包', '星航银行联盟卡'],
      path: '/',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/',
      text: ['百万红包', '星航银行联盟卡'],
      path: '/',
    },
  ],
  [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/',
      text: ['百万红包', '星航银行联盟卡'],
      path: '/',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/',
      text: ['百万红包', '星航银行联盟卡'],
      path: '/',
    },
  ],
]
export default class Find extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="el-find">
        <HeadTitle text="发现" />
        <Advert imgUrl="https://fuss10.elemecdn.com/5/2f/94338b99657d5c2a3de1ba17cb660jpeg.jpeg" />
        <section className="adverts-box">
          {boxes.map((box, index) => {
            return <AdvertsBox box={box} key={index} />
          })}
        </section>
        <Main />
      </div>
    )
  }
}
