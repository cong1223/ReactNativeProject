import React from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import { directToPage } from '../../utils/ext';

const SwiperItem = props => {
  const { data, styles, navigation } = props;
  const toDetailPage = () => {
    console.log('1111');
    directToPage(navigation, 'Detail', {
      courseId: data.course_id
    });
  };

  return (
    <TouchableWithoutFeedback style={styles.swiperSize} onPress={toDetailPage}>
      <Image style={styles.swiperSize} source={{ url: data.img }} />
    </TouchableWithoutFeedback>
  );
};

export default SwiperItem;
