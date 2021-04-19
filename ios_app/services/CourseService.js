import BaseService from './abstract/BaseService';

/**
 * 日志相关
 */
class CourseService extends BaseService {
  getCourseDatas() {
    return this.get(this.API.getCourseDatas);
  }

  getCourses() {
    return this.get(this.API.getCourses);
  }

  getCourseFields(filed = 'all') {
    return this.get(this.API.getCourseFields, { filed });
  }
}

export default new CourseService();
