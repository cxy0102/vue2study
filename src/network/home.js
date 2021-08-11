/**
 * @Dsc: 注释
 * @Author wjz
 * @Date 2021/7/29 15:01
 */
import {request} from "./request";

export  function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
