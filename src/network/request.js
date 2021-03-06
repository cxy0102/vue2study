/**
 * @Dsc: 注释
 * @Author wjz
 * @Date 2021/7/29 15:01
 */
import axios from 'axios'

export  function request(config) {
  const  instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout:5000
  })

  instance.interceptors.request.use(config=>{
    return config
  },error => {})

  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{

  })

  return instance(config)
}
