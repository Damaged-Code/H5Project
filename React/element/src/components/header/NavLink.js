import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const linkList = [
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  },
  {
    imgUrl:
      'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
    text: '美食'
  }
]
export default class NavLink extends Component {
  render() {
    return (
      <nav className="nav-link">
        <div className="link">
          {linkList.map((link, index) => {
            return (
              <Link key={index} to="/">
                <img src={link.imgUrl} alt="" />
                <p>{link.text}</p>
              </Link>
            )
          })}
          <div className="lint-btn" />
        </div>
      </nav>
    )
  }
}
