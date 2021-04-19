import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import IndexSwiper from '../components/IndexSwiper';
import courseService from '../services/CourseService';

const HomePage = props => {
  const [swiperData, setSwiperData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [recomCourseData, setRecomCourseData] = useState([]);
  const { navigation } = props;
  useEffect(() => {
    courseService.getCourseDatas().then(res => {
      setCourseData(res.courses);
      setFieldData(res.fields);
      setSwiperData(res.swipers);
      setRecomCourseData(res.recomCourses);
    });
  }, []);
  return (
    <ScrollView
      automaticallyAdjustContentInsets={false}
      showsVerticalScrollIndicator={false}
    >
      <IndexSwiper navigation={navigation} swiperData={swiperData} />
    </ScrollView>
  );
};

export default HomePage;
