import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Timer extends Component {
  render () {
    console.log('prop', this.props.time)
    return (
      <View style="margin: 10px 0;">
        <View style="color: blue;">{this.props.title}</View>
        <View>timer/time</View>
        <View>{this.props.time}</View>
        <View>timer/time.toString()</View>
        <View>{this.props.time.toString()}</View>
      </View>
    )
  }
}
