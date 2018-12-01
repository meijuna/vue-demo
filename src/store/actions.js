/*
通过 mutation 间接更新 state 对象的多个方法的对象
*/
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS
} from './mutation-types.js'

import {
	reqAddress,
	reqFoodCategorys,
	reqShops
} from '../api'

import {} from './mutation-types.js'
export default{
	//异步获取地址
	async getAddress ({commit, state}) {
		//发送异步ajax请求  //维度 + 精度 
		const geohash = state.latitude + ',' + state.longitude  //参数
		const result = await reqAddress(geohash) 
		//提交一个mutation
		if (result.code === 0) {
			const address = result.data
			commit(RECEIVE_ADDRESS, {address})
		}
	},
	//异步获取食品分类
	async getCategorys ({commit}) {
		//发送异步ajax请求
		const result = await reqFoodCategorys()
		//提交一个mutation
		if (result.code === 0) {
			const categorys = result.data
			commit(RECEIVE_CATEGORYS, {categorys})
		}
		
	},
	//异步获取地址
	async getShop ({commit, state}) {
		//发送异步ajax请求
		const { longitude, latitude } = state 
		const result = await reqShops(longitude, latitude)
		//提交一个mutation
		if (result.code === 0) {
			const shops = result.data
			commit(RECEIVE_SHOPS, {shops})
		}
		
	}
	//异步获取商家列表
}