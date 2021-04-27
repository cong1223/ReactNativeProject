import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import AniImage from '../AniImage';

const CourseItem = props => {
  const { data, styles, navigation } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', { courseId: data.id })}
    >
      <View style={styles.courseItem}>
        <View style={styles.imgView}>
          <AniImage styles={styles.imgView} url={data.course_img} />
        </View>
        <View style={styles.courseName}>
          <Text style={styles.courseNameText}>{data.course_name}</Text>
        </View>
        <View style={styles.teacherInfo}>
          <AniImage styles={styles.teacherImg} url={data.teacher_img} />
          <Text style={styles.teacherName}>{data.teacher_name}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceNum}>￥{data.price}.00</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CourseItem;
