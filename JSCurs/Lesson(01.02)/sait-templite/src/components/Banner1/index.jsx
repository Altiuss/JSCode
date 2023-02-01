import React from 'react'
import s from './index.module.css'
import Butonn from '../Button'

export default function Banner1() {
  return (
    <div className={s.banner}>
    <div>
        <h2>Turn Emails into Revenue</h2>
        <p>Win new customers with the #1 email marketing and automations brand* 
        that recommends ways to get more opens, clicks, and sales.</p>
        <Butonn>sign up</Butonn>
        </div>
    </div>
  )
}
