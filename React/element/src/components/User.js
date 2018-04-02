import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import Login from './user/Login'
import ManageAction from './user/ManageAction'
import ManageList from './user/ManageList'
import Footer from './home/Footer'
import { LocalStorage } from '../utils/storage'

const localStorage = new LocalStorage()
const manageAction = [
  {
    icon: 'icon-jinbi',
    text: '钱包',
  },
  {
    icon: 'icon-jinbi',
    text: '钱包',
  },
  {
    icon: 'icon-jinbi',
    text: '钱包',
  },
]
const manageList = [
  [{ icon: 'icon-diannao', text: '我的地址', direction: 'icon-jiantouyou' }],
  [
    { icon: 'icon-diannao', text: '我的地址', direction: 'icon-jiantouyou' },
    { icon: 'icon-diannao', text: '我的地址', direction: 'icon-jiantouyou' },
  ],
  [{ icon: 'icon-diannao', text: '我的地址', direction: 'icon-jiantouyou' }],
]
let userInfo = {
  photo: 'icon-yonghuguanli',
  name: '',
  icon: 'icon-shouji',
  desc: '',
  direction: 'icon-jiantouyou',
}
export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasUser: false,
    }
  }
  componentWillMount() {
    if (localStorage.get('user')) {
      let info = localStorage.get('user'),
        userStr = info.username.split('')
      userInfo.name = userInfo.desc =
        userStr[0] + '***' + userStr[userStr.length - 1]
      this.setState({
        hasUser: true,
      })
    }
  }
  render() {
    return (
      <div className="el-user-main">
        <div className="el-user">
          <header>
            <HeadTitle text="我的" />
          </header>
          {this.state.hasUser ? <Login user={userInfo} /> : <Login />}
          <section className="manage-action">
            {manageAction.map((box, index) => {
              return <ManageAction box={box} key={index} />
            })}
          </section>
          <main className="main">
            {manageList.map((tag, index) => {
              return (
                <section className="list" key={index}>
                  {tag.map((list, index) => {
                    return <ManageList key={index} list={list} />
                  })}
                </section>
              )
            })}
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}
