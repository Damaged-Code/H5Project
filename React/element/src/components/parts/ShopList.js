import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Rate } from 'element-react'

export default class ShopList extends Component {
  static propTypes = {
    shopList: propTypes.array,
  }
  constructor(props) {
    super(props)
    this.state = {
      shopList: this.props.shopList || [],
    }
  }
  componentDidMount() {}
  render() {
    return (
      <section className="shop-list">
        {this.props.shopList.map((tag, index) => {
          return (
            <Link
              to={{
                pathname: '/shopInfo',
                query: {
                  tag: tag,
                  foods: this.props.foods,
                },
              }}
              key={index}
            >
              <section className="shop-list-content">
                <div className="shop-list-up">
                  <div className="shop-img">
                    <img src={tag.image_path} alt="" />
                  </div>
                  <div className="shop-desc">
                    <section>
                      <h3>
                        <i content="品牌">品牌</i>
                        <span>{tag.name}</span>
                      </h3>
                      <ul>
                        <li content="票" />
                      </ul>
                    </section>
                    <section>
                      <div className="rate">
                        <Rate
                          disabled={true}
                          value={tag.rating}
                          showText={true}
                        />
                        <span className="sale">
                          月售:{tag.recent_order_num}
                        </span>
                      </div>
                    </section>
                    <section>
                      <div>
                        <span>起送:￥{tag.float_minimum_order_amount}</span>
                        <span>配送:￥{tag.float_delivery_fee}</span>
                      </div>
                      <div>
                        <span>时间:{tag.order_lead_time}</span>
                        <span>距离:{tag.distance}m</span>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="shop-list-down">
                  <section>
                    <span>
                      <img
                        src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"
                        alt=""
                      />
                      <span>人气好店</span>
                    </span>
                  </section>
                  <span>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
                      alt=""
                    />
                  </span>
                  <section>
                    <div>
                      <div>
                        <span>
                          <span
                            style={{ backgroundColor: 'rgb(112, 188, 70)' }}
                          >
                            首
                          </span>
                        </span>

                        <span> 新用户立减 (不与其他活动共享)</span>
                      </div>
                      <div>
                        <span>
                          <span
                            style={{ backgroundColor: 'rgb(240, 115, 115)' }}
                          >
                            减
                          </span>
                        </span>
                        <span>新用户下单立减 17 元</span>
                      </div>
                    </div>
                    <div>
                      <span>21个活动</span>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                        alt=""
                      />
                    </div>
                  </section>
                </div>
              </section>
            </Link>
          )
        })}
      </section>
    )
  }
}
