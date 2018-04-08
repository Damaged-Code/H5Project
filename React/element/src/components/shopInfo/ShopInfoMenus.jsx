import React, { Component } from 'react'
import { LocalStorage } from '../../utils/storage'
import { Link } from 'react-router-dom'
import Svg from '../Svg'
import { MessageBox } from 'element-react'

const localStorage = new LocalStorage()
export default class ShopInfoMenus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasUser: false,
    }
  }
  componentWillMount() {
    if (localStorage.get('user')) {
      this.setState({
        hasUser: true,
      })
    }
  }
  componentDidMount() {
    let allPrice = this.refs.allPrice,
      foodsNum = this.refs.foodsNum,
      all_price = 0,
      foods_num = 0,
      settlement = this.refs.settlement,
      link = this.refs.link,
      foods = []
    if (localStorage.get('shopCart')) {
      foods = localStorage.get('shopCart')
      for (let [index, tag] of foods.entries()) {
        all_price += tag.countPrice
        foods_num += tag.num
      }
      allPrice.innerText = all_price
      foodsNum.setAttribute('data-num', foods_num)
      settlement.innerText = '去结算'
      link.style.pointerEvents = 'auto'
    }
  }
  shopCart = e => {
    let tag = e.target,
      food = JSON.parse(tag.getAttribute('data-food')),
      shopId = parseInt(tag.getAttribute('data-id')),
      foods = [],
      flag = true,
      num = 0,
      allPrice = this.refs.allPrice,
      foodsNum = this.refs.foodsNum,
      all_price = 0,
      foods_num = 0,
      link = this.refs.link,
      settlement = this.refs.settlement

    if (this.state.hasUser) {
      if (localStorage.get('shopCart')) {
        link.style.pointerEvents = 'auto'
        foods = localStorage.get('shopCart')
        for (let [index, tag] of foods.entries()) {
          if (tag.name == food.name.trim()) {
            flag = false
            foods[index].num++
            foods[index].countPrice = foods[index].num * foods[index].price
          }
          all_price += tag.countPrice
          foods_num += tag.num
        }
        //console.log(all_price, foods_num)
        allPrice.innerText = all_price
        allPrice.style.color = 'white'
        foodsNum.setAttribute('data-num', foods_num)
        settlement.innerText = '去结算'
        if (flag) {
          this.pushInfo(e)
        } else {
          localStorage.set('shopCart', foods)
        }
      } else {
        this.pushInfo(e)
        num++
        foodsNum.setAttribute('data-num', num)
        allPrice.innerText = num * food.activity.fixed_price
        link.style.pointerEvents = 'auto'
        settlement.innerText = '去结算'
        allPrice.style.color = 'white'
      }
    } else {
      MessageBox.alert('请登录', '提醒')
      return false
    }
  }
  pushInfo(e) {
    let tag = e.target,
      food = JSON.parse(tag.getAttribute('data-food')),
      shopId = parseInt(tag.getAttribute('data-id')),
      foods = [],
      num = 0
    num++
    if (localStorage.get('shopCart')) {
      foods = localStorage.get('shopCart')
    }
    foods.push({
      shopId: shopId,
      name: food.name.trim(),
      price: food.activity.fixed_price,
      num: num,
      countPrice: num * food.activity.fixed_price,
      image_path: food.image_path,
      original_price: food.original_price,
      ps: this.props.ps,
      shopName: this.props.shopName,
    })
    localStorage.set('shopCart', foods)
  }
  render() {
    return (
      <div className="shop-info-menus">
        <div className="menus-content">
          <main className="menus-main">
            <ul className="menus-list">
              {this.props.menus.map((list, index) => {
                return (
                  <li
                    className="list"
                    key={index}
                    className={index === 0 ? 'menus-list-active list' : 'list'}
                  >
                    {list.id == 'rexiao' ? (
                      <img
                        src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?imageMogr/format/webp/thumbnail/26x/"
                        alt=""
                      />
                    ) : (
                      ''
                    )}
                    {list.id == 'youhui' ? (
                      <img
                        src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?imageMogr/format/webp/thumbnail/26x/"
                        alt=""
                      />
                    ) : (
                      ''
                    )}
                    <span>{list.name}</span>
                  </li>
                )
              })}
            </ul>
            <section className="menus">
              <div className="menus-main">
                {this.props.menus.map((menu, index) => {
                  return (
                    <dl key={index}>
                      <dt>
                        <div>
                          <strong>{menu.name}</strong>
                          <span>{menu.description}</span>
                        </div>
                      </dt>
                      {menu.foods.map((food, index) => {
                        return (
                          <dd key={index}>
                            <div className="menus-info">
                              <div className="menus-show">
                                <span>
                                  <span>新品</span>
                                </span>
                                <img src={food.image_path} alt="" />
                              </div>
                              <section className="food-desc">
                                <p className="name">{food.name}</p>
                                <p className="desc">{food.description}</p>
                                <p className="rate">
                                  <span>月售 {food.month_sales} 份</span>
                                  <span>好评率 {food.satisfy_rate}%</span>
                                </p>
                                <div className="sale">
                                  <span>
                                    <span>
                                      <span>5.9 折</span>
                                    </span>
                                    <span>
                                      <span>每单限 2 份优惠</span>
                                    </span>
                                  </span>
                                </div>
                                <strong>
                                  <span> {food.activity.fixed_price}</span>
                                  <del>¥{food.original_price}</del>
                                </strong>
                                <div
                                  className="buy"
                                  onClick={this.shopCart}
                                  data-food={JSON.stringify(food)}
                                  data-id={this.props.shopId}
                                >
                                  <span>
                                    <Svg icon="icon-tianjia2" />
                                  </span>
                                </div>
                              </section>
                            </div>
                          </dd>
                        )
                      })}
                    </dl>
                  )
                })}
              </div>
            </section>
          </main>
        </div>
        <div className="menus-footer">
          <footer>
            <div className="up">
              <section>
                满 60 减 15，满 100 减 20，满 130 减 25，满 160 减 30
              </section>
            </div>
            <div className="down">
              <span className="shopCart" data-num="0" ref="foodsNum" />
              <div className="ps">
                <p className="price">
                  <span ref="allPrice">¥0</span>
                </p>
                <p className="ps-price">配送费 ¥{this.props.ps}</p>
              </div>
              <div
                className="check-out"
                ref="link"
                style={{ pointerEvents: 'none' }}
              >
                <Link to="/settlement">
                  <span ref="settlement" style={{ color: 'white' }}>
                    ¥{this.props.qs} 起送
                  </span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
