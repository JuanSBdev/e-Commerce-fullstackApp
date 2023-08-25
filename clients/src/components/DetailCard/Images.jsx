import React from 'react'
import Styles from './Images.module.css'
 let img = 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/09/iphone-14-pro-2806889.jpg?tf=3840x'
export default function DetailCard(props) {
  return (
    <div className={Styles.wrapper}>
        <div className={Styles.img_column}>
          <img src={props.img1} alt='image product' />
          <img src={props.img1} alt='image product' />
          <img src={props.img1} alt='image product' />
        </div>
        <div className={Styles.img_main}>
          <img src={props.img_main} alt='image product' />
        </div>
    </div>
  )
}
