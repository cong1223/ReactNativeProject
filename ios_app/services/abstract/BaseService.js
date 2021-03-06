import { API } from '../../utils/config';
export default class BaseService {
  constructor() {
    this.API = API;
  }

  // TODO: 可针对具体的公司业务做一些返回值的筛选
  output() {}

  /** * GET 请求 */
  get(url, params) {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key =>
        paramsArray.push(key + '=' + params[key])
      );
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }

    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          //看后台需求决定配置参数,例如我们后台要求将appId放在这里请求
          // appId: '1234345656'
        }
      })
        .then(response => response.json())
        //把response转为json
        .then(responseJson => {
          // 拿到上面的转好的json
          // 打印返回结果
          if (responseJson.ret_code == 0) {
            // 0为请求成功
            resolve(responseJson.result);
          } else {
            reject(responseJson);
            //可以处理返回的错误信息
          }
        })
        .catch(e => {
          reject(e);
          // Alert.alert('提示信息', '请检查您的网络是否已经连接');
        });
    });
  }
  /** * POST 请求，经测试用FormData传递数据也可以 */
  static post(url, params, success, fail, error) {
    // new Request();
    console.log(url, params);
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        //媒体格式类型key/value格式
        // 'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'multipart/form-data'
      },
      body: params //JSON.stringify(params)
    })
      .then(response => response.json())
      //把response转为json
      .then(responseJson => {
        // 拿到上面的转好的json
        console.log(responseJson);
        // 打印返回结果
        if (responseJson.status == 0) {
          // 0为请求成功
          success && success(responseJson.entity);
        } else {
          fail && fail(responseJson.entity);
          //可以处理返回的错误信息
        }
      })
      .catch(e => {
        console.log(e);
        error && error(error);
        // Alert.alert("e", e);
        // Alert.alert('提示信息', '请检查您的网络是否已经连接');
      });
  }

  /** * POST 请求，经测试用FormData传递数据也可以 Json格式 */
  static postJson(url, params, success, fail, error) {
    console.log(url, params);
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        //媒体格式类型key/value格式
        // 'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      //把response转为json
      .then(responseJson => {
        // 拿到上面的转好的json
        console.log(responseJson);
        // 打印返回结果
        if (responseJson.status == 0) {
          // 0为请求成功
          success && success(responseJson.entity);
        } else {
          fail && fail(responseJson.entity);
          //可以处理返回的错误信息
        }
      })
      .catch(e => {
        console.log(e);
        error && error(error);
        // Alert.alert('错误提示', '请检查您的网络是否已经连接');
      });
  }

  /** * @images uri数组 * @param FormData格式,没有参数的话传null */
  static uploadFile(url, images, params, success, fail, error) {
    console.log(url, images);
    let formData = new FormData();
    if (params) {
      formData = params;
    }
    for (var i = 0; i < images.length; i++) {
      var uri = images[i];
      var date = new Date();
      var name = date.getTime() + '.png';
      //用时间戳保证名字的唯一性
      let file = { uri: uri, type: 'multipart/form-data', name: name };
      formData.append('file', file);
    }
    console.log(url, formData);
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        //媒体格式类型key/value格式
        'Content-Type': 'multipart/form-data'
        // customerId: customerId,
        // appId: appId
      },
      body: formData
    })
      .then(response => response.json())
      //把response转为json
      .then(responseJson => {
        // 拿到上面的转好的json
        console.log(responseJson);
        // 打印返回结果
        if (responseJson.status == 0) {
          // 0为请求成功
          success && success(responseJson.data);
        } else {
          fail && fail();
          //可以处理返回的错误信息
        }
      })
      .catch(e => {
        console.log(e);
        error && error(error);
      });
  }
}
