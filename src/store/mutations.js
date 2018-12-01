/*
直接更新state 的多个方法对象
*/

import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS
} from './mutation-types.js'

export default{             //传递的包含数据的对象
	[RECEIVE_ADDRESS] (state, {address}) {
		state.address = address
	},
	[RECEIVE_CATEGORYS] (state, {categorys}) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS] (state, {shops}) {
		state.shops = shops
	},
}