/*
实现功能：定义多个属性，在项目中会使用的一些功能。包括屏幕尺寸、loading组件、GET请求方法
包含组件：
外部传入:GET请求方法需要从外部传入url、请求成功的回调方法、请求失败的回调方法
 */

import React,{Component} from 'react';
import{
	AppRegistry,
} from 'react-native';

var Util={

	//基于fetch的get方法  只负责下载数据，下载后的处理操作在回调方法中实现
	//successCallback 数据下载成功的回调方法，在组件中实现
	//failCallback 数据下载失败的回调方法，在组件中实现
	postJson(url,data,callback){
		var fetchOptions={
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':''
			},
			body:data
		};

		fetch(url,fetchOptions)
		.then((response)=>response.text())
		.then((responseText)=>{
			callback(JSON.prase(responseText));
			//callback(responseText);
		}).done();
	}

	// loading 效果
	loading:<ActivityIndicator style={{marginTop:200}}/>
}

module.exports=Util;