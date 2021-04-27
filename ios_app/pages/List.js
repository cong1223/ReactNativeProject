import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import ListTab from '../components/ListTab';
import courseService from '../services/CourseService';
import commonStyles from '../styles/commonStyles';
import CourseList from '../components/CourseList';
import useCallbackState from '../hooks/useCallbackState';
import MyRefreshControl from '../components/MyRefreshControl';
import PageLoading from '../components/PageLoading';

const ListPage = props => {
  const { navigation } = props;
  const [fieldData, setFieldData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [curIndex, setCurIndex] = useState(0);
  const [curField, setCurField] = useCallbackState('all');
  const [courseData, setCourseData] = useState({});
  const [refreshing, setRefreshing] = useCallbackState(false);
  const [pageLoadingShow, setPageLoadingShow] = useState(false);
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
  const getCourses = (field, isRefresh = false) => {
    if (!isRefresh) {
      setPageLoadingShow(true);
    }
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
          setPageLoadingShow(false);
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
    if (refreshing) {
      return;
    }
    setRefreshing(true, () => {
      getCourses(curField, true);
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <MyRefreshControl
            refreshing={refreshing}
            onPageRefresh={onPageRefresh}
          />
        }
      >
        {pageLoadingShow ? (
          <PageLoading />
        ) : (
          <CourseList
            courseData={courseData[curField] || []}
            navigation={navigation}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default ListPage;
