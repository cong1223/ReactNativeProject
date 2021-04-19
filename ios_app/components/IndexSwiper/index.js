import React, { memo } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import SwiperItem from './SwiperItem';

const IndexSwiper = memo(props => {
  const { swiperData, navigation } = props;
  const swiperHeight = styles.swiperSize.height;
  return (
    <View height={swiperHeight}>
      <Swiper
        height={swiperHeight}
        autoplay={true}
        loop={true}
        paginationStyle={styles.pagination}
      >
        {swiperData.map((item, index) => {
          return (
            <SwiperItem
              data={item}
              key={index}
              navigation={navigation}
              styles={styles}
            />
          );
        })}
      </Swiper>
    </View>
  );
});

export default IndexSwiper;
