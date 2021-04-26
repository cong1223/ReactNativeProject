import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import ListTab from '../components/ListTab';
import courseService from '../services/CourseService';
import commonStyles from '../styles/commonStyles';
import CourseList from '../components/CourseList';
import useCallbackState from '../hooks/useCallbackState';
import MyRefreshControl from '../components/MyRefreshControl';

const ListPage = props => {
  const { navigation } = props;
  const [fieldData, setFieldData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [curField, setCurField] = useCallbackState('all');
  const [courseData, setCourseData] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const getCourseFields = () => {
    courseService
      .getCourseFields()
      .then(res => {
        if (res && res.length) {
          setFieldData([{ field_name: '全部课程', field: 'all' }].concat(res));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  const getCourses = field => {
    setRefreshing(true);
    courseService
      .getCourses(field)
      .then(res => {
        setCourseData(
          Object.assign(
            {
              [field]: res
            },
            courseData
          )
        );
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
      });
  };
  const onTabClick = (field, index) => {
    setRefreshing(false);
    setCurIndex(index);
    setCurField(field, data => {
      if (!courseData[data]) {
        getCourses(data);
      }
    });
  };
  const onPageRefresh = () => {
    if (refreshing) return;
    getCourses(curField);
  };
  useEffect(() => {
    getCourseFields();
    getCourses(curField);
  }, []);
  return (
    <View style={commonStyles.container}>
      <ListTab
        fieldData={fieldData}
        curIndex={curIndex}
        onTabClick={onTabClick}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <MyRefreshControl
            refreshing={refreshing}
            onPageRefresh={onPageRefresh}
          />
        }
      >
        {courseData[curField] && (
          <CourseList
            courseData={courseData[curField]}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default ListPage;
