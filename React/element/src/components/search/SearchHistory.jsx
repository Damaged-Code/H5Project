import React, { Component } from 'react'

export default class SearchHistory extends Component {
  render() {
    return (
      <div className="search-history">
        <div>
          <section className="search-list">
            <header>热门搜索</header>
            <section className="list">
              <button>包子</button>
            </section>
          </section>
        </div>
      </div>
    )
  }
}
