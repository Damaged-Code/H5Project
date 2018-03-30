import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class ShopList extends Component {
  static propTypes = {
    shopList: propTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {
      shopList: this.props.shopList || []
    }
  }

  render() {
    return (
      <section className="shop-list">
        <Link to="/">
          <section>
            <div>
              <div>
                <img
                  src="https://fuss10.elemecdn.com/9/ec/1f13f62196de7301242a6cebbc8e0png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
                  alt=""
                />
              </div>
              <div>
                <section>1</section>
                <section>2</section>
                <section>3</section>
              </div>
            </div>
            <div>
              <section>1</section>
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
                  alt=""
                />
              </span>
              <section>2</section>
            </div>
          </section>
        </Link>
      </section>
    )
  }
}
