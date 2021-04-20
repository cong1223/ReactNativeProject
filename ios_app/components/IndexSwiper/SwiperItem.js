import React from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';

const SwiperItem = props => {
  const { data, styles, navigation } = props;

  return (
    <TouchableWithoutFeedback
      style={styles.swiperSize}
      onPress={() => navigation.navigate('Detail')}
    >
      <Image style={styles.swiperSize} source={{ url: data.img }} />
    </TouchableWithoutFeedback>
  );
};

export default SwiperItem;
