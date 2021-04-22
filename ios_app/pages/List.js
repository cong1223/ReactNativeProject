import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import courseService from '../services/CourseService';

const ListPage = () => {
  const [fieldData, setFieldData] = useState([]);
  const [courses, setCourses] = useState([]);
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
        console.log('===getCourses===', res);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCourseFields();
    getCourses();
  }, []);
  return (
    <View>
      <Text>List Page</Text>
    </View>
  );
};

export default ListPage;
