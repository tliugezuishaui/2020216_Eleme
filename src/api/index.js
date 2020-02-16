/*
包含n个接口请求函数的模块
函数的返回值：promise对象
*/

// 引入ajax
import ajax from './ajax';

// 配置接口
// 1、根据经纬度获取位置详情(因为暴露多个接口,不能使用export default)
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食物分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/shops', { longitude, latitude})
