import React, { useRef } from 'react';
import { Animated } from 'react-native';

const AniImage = props => {
  const { url, styles } = props;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const imgAnimation = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1]
  });
  return (
    <Animated.Image
      onLoadEnd={() => {
        Animated.timing(animatedValue, {
          toValue: 100,
          duration: 500,
          useNativeDriver: true // 原生端动画驱动, 避免丢帧
        }).start();
      }}
      source={{ url }}
      style={[styles, { opacity: imgAnimation }]}
    />
  );
};

export default AniImage;
