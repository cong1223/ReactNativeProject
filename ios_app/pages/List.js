import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, ScrollView } from 'react-native';
import ListTab from '../components/ListTab';
import courseService from '../services/CourseService';
import commonStyles from '../styles/commonStyles';
import CourseList from '../components/CourseList';
import useCallbackState from '../hooks/useCallbackState';

const ListPage = props => {
  const { navigation } = props;
  const [fieldData, setFieldData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [curField, setCurField] = useCallbackState('all');
  const [courseData, setCourseData] = useState({});
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
      });
  };
  const onTabClick = (field, index) => {
    setCurIndex(index);
    setCurField(field, data => {
      if (!courseData[data]) {
        getCourses(data);
      }
    });
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
