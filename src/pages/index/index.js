import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Timer from '../../components/timer'

import './index.styl'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    time: new Date()
  }

  componentDidMount () {
    setInterval(() => this.tick(), 1000)
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  render () {
    return (
      <View className="index">
        <View>index/time</View>
        <View>{this.state.time}</View>
        <View>index/time.toString()</View>
        <View>{this.state.time.toString()}</View>
        <Timer title="Timer time passed as Date" time={this.state.time} />
        <Timer title="Timer time passed as String" time={this.state.time.toString()} />
      </View>
    )
  }
}
