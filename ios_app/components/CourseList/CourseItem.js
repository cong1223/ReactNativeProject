import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';

const CourseItem = props => {
  const { data, styles, navigation, index } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', { courseId: data.id })}
    >
      <View style={[styles.courseItem, index === 0 && styles.courseItemFirst]}>
        <View style={styles.imgView}>
          <Image style={styles.imgView} source={{ url: data.img }} />
        </View>
        <View style={styles.infoView}>
          <Text numberOfLines={2} style={styles.courseName}>
            {data.course_name}
          </Text>
          <Text style={styles.price}>
            {data.price == 0 ? '免费' : `￥${data.price}.00`}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CourseItem;
