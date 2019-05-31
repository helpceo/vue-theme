import axios from 'axios';

let time = new Date()
let config = {
    baseURL:"/api/v1",
    params: {
        time:time.getTime()
      },
}
//创建一个请求实例,可以创建多个实例
let http = axios.create(config);

//添加请求头的cookie
// http.defaults.headers.common["Authorization"] = AUTH_TOKEN;

//添加一个请求拦截器
http.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作

  return config;
},function(err){
  return Promise.reject(err);
});

//添加一个响应拦截器
http.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理

  return res;
},function(err){
  return Promise.reject(err);
})

export default http;