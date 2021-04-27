import React from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import AniImage from '../AniImage';

const SwiperItem = props => {
  const { data, styles, navigation } = props;

  return (
    <TouchableWithoutFeedback
      style={styles.swiperSize}
      onPress={() => navigation.navigate('Detail')}
    >
      <AniImage styles={styles.swiperSize} url={data.img} />
    </TouchableWithoutFeedback>
  );
};

export default SwiperItem;
