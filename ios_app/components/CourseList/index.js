import React from 'react';
import { View, Text } from 'react-native';
import CourseItem from './CourseItem';
import styles from './styles';

const CourseList = props => {
  const { courseData, navigation } = props;
  return (
    <View style={styles.courseBord}>
      {courseData.map((item, index) => {
        return (
          <CourseItem
            data={item}
            styles={styles}
            key={index}
            navigation={navigation}
            index={index}
          />
        );
      })}
    </View>
  );
};

export default CourseList;
