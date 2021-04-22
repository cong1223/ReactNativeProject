import BaseService from './abstract/BaseService';

/**
 * 日志相关
 */
class CourseService extends BaseService {
  getCourseDatas() {
    return this.get(this.API.getCourseDatas);
  }

  getCourses(fieldId = 'all') {
    return this.get(this.API.getCourses + fieldId);
  }

  getCourseFields() {
    return this.get(this.API.getCourseFields);
  }
}

export default new CourseService();
