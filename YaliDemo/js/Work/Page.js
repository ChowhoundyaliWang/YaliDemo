/*
作业详情单页
头部返回作业界面按钮 btn(返回上一级界面)+title(作业详情)
 */

import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableOpacity
} from 'react-native';

import Work from './Work';

class Page extends Component {
	constructor(props){
		super(props);
		this.state={};
	}

	_pressPop(){
		//返回上一级页面
		const {navigator}=this.props;
		if(navigator){
			navigator.pop();
		}
	}

  render() {
    return (
    	<View style={{flex:1}}>
    			<View style={stylesPage.header}> 
		<TouchableOpacity style={stylesPage.btn} onPress={this._pressPop.bind(this)}>
			<Text style={stylesPage.btnText}>返回</Text>
		</TouchableOpacity>
		<Text style={stylesPage.title}>作业详情</Text>
    	</View>
    	<View style={stylesPage.content}>
		<Text style={stylesPage.text}>一个基本的超市管理系统，包括下面7个子系统：仓库管理系统、采购管理系统、财务管理系统、人事管理系统、销售管理系统、登陆系统，信息管理系统。基本流程是：一个具有相对权限的人登录相应的系统板块，了解相应的信息。比如：采购员输入用户名及密码登录采购系统，查看需要采购的产品和供应商信息，完成采购任务。</Text>
    	</View>

    	</View>
    );
  }
}

const stylesPage=StyleSheet.create({
	header:{
		flexDirection:'row',
		height:44,
		borderBottomWidth:1,
		borderColor:'#CCCCCC'
	},
	btn:{
		height:44,
		width:44,
		marginLeft:10
	},
	btnText:{
		fontSize:14,
		lineHeight:32
	},
	title:{
		textAlign:'center',
		fontSize:20,
		lineHeight:34,
		marginLeft:100,
		fontWeight:'bold'
	},
	content:{
		flex:1,
		margin:14
	},
	text:{
		fontSize:14
	}
});

module.exports=Page;