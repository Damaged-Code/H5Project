import React, { Component } from 'react'

let list = ['包子', '粥', '寿司', '沙拉', '凉皮', '绿茶', '披萨', '汉堡']

export default class SearchHistory extends Component {
  render() {
    return (
      <div className="search-history">
        <div>
          <section className="search-list">
            <header>热门搜索</header>
            <section className="list">
              {list.map((val, index) => <button key={index}>{val}</button>)}
            </section>
          </section>
        </div>
      </div>
    )
  }
}
