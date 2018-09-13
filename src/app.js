import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.styl'

class App extends Component {
  config = {
    pages: [ 'pages/index/index' ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
