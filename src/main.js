import {marquee} from "./marquee.js";
import  {tab}  from "./tab.js";

marquee()
tab()

import './style/index.css'
import './style/index.less'

// 引入图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src= pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

// 字体图标
import './assets/fonts/iconfont.css'

const fn = () => {
    console.log('高级语法');
}

console.log(fn);