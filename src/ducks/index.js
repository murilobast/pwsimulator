import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import ui from './ui'
import api from './api'
import http from './http'
import chest from './chest'
import promise from './promise'

const rootReducer = combineReducers({
	ui,
	api,
	http,
	chest,
	routing,
	promise
})

export default rootReducer
