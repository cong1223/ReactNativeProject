import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/Home';
import ListPage from '../pages/List';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor, size }) => (
          <Ionicons name="ios-home" color={tintColor} size={size} />
        )
      })
    },
    Find: {
      screen: ListPage,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '列表',
        tabBarIcon: ({ focused, tintColor, size }) => (
          <Ionicons name="ios-list" color={tintColor} size={size} />
        )
      })
    }
  },
  {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'initialRoute', // 按 back 键是否跳转到第一个 Tab， none 为不跳转，默认为 initialRoute 的行为。
    lazy: true, //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦
    tabBarOptions: {
      activeTintColor: '#23b8ff', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
        backgroundColor: '#fff' // TabBar 背景色
      },
      labelStyle: {
        fontSize: 12 // 文字大小
      }
    }
  }
);
