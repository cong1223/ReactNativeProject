import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ListTab from '../components/ListTab';
import courseService from '../services/CourseService';
import commonStyles from '../styles/commonStyles';

const ListPage = () => {
  const [fieldData, setFieldData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [curField, setCurField] = useState('all');
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
  const onTabClick = (field, index) => {
    setCurIndex(index);
    setCurField(field);
  };
  useEffect(() => {
    getCourseFields();
    getCourses();
  }, []);
  return (
    <View style={commonStyles.container}>
      <ListTab
        fieldData={fieldData}
        curIndex={curIndex}
        onTabClick={onTabClick}
      />
    </View>
  );
};

export default ListPage;
