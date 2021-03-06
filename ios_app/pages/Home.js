import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import IndexSwiper from '../components/IndexSwiper';
import MainTitle from '../components/MainTitle';
import RecomCourseList from '../components/RecomCourseList';
import CourseList from '../components/CourseList';
import { filterFieldData } from '../utils/ext';
import courseService from '../services/CourseService';
import MyRefreshControl from '../components/MyRefreshControl';

const HomePage = props => {
  const [swiperData, setSwiperData] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [recomCourseData, setRecomCourseData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const load = () => {
    setRefreshing(true);
    courseService
      .getCourseDatas()
      .then(res => {
        setCourseData(res.courses);
        setFieldData(res.fields);
        setSwiperData(res.swipers);
        setRecomCourseData(res.recomCourses);
      })
      .finally(() => {
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
      });
  };
  const onPageRefresh = () => {
    load();
  };
  const renderMainTitle = (data, title) => {
    if (data) {
      return data && <MainTitle title={data && data.field_name} />;
    }
    return <MainTitle title={title} />;
  };
  const { navigation } = props;
  useEffect(() => {
    load();
  }, []);
  return (
    <ScrollView
      automaticallyAdjustContentInsets={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <MyRefreshControl
          refreshing={refreshing}
          onPageRefresh={onPageRefresh}
        />
      }
    >
      <IndexSwiper navigation={navigation} swiperData={swiperData} />
      {renderMainTitle(null, '推荐课程')}
      <RecomCourseList
        recomCourseData={recomCourseData}
        navigation={navigation}
      />
      {renderMainTitle(fieldData[0])}
      <CourseList
        courseData={filterFieldData(courseData, '0', true)}
        navigation={navigation}
      />
      {renderMainTitle(fieldData[1])}
      <CourseList
        courseData={filterFieldData(courseData, '1', true)}
        navigation={navigation}
      />
      {renderMainTitle(fieldData[2])}
      <CourseList
        courseData={filterFieldData(courseData, '2', true)}
        navigation={navigation}
      />
      {renderMainTitle(fieldData[3])}
      <CourseList
        courseData={filterFieldData(courseData, '3', true)}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default HomePage;
