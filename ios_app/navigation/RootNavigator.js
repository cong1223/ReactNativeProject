import React from 'react';
// 引入三个创建底部导航tab需要的依赖
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// 引入icon库
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/Home';
import ListPage from '../pages/List';
import Logo from '../components/Logo';
import DetailPage from '../pages/Detail';

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case '首页':
              iconName = 'ios-home';
              break;
            case '列表':
              iconName = 'ios-list';
              break;
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: '#23b8ff',
        inactiveTintColor: '#999'
      }}
    >
      <Tab.Screen name="首页" component={HomePage} />
      <Tab.Screen name="列表" component={ListPage} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{
            headerTitle: () => <Logo />
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{
            headerTitle: () => <Logo />,
            headerBackTitle: '返回'
          }}
        />
        {/*配置更多其他的页面*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;
