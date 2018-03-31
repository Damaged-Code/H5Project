import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import Login from './user/Login'
import ManageAction from './user/ManageAction'
import ManageList from './user/ManageList'

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
export default class User extends Component {
  render() {
    return (
      <div className="el-user">
        <header>
          <HeadTitle text="我的" />
        </header>
        <Login />
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
    )
  }
}
