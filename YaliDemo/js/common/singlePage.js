/*
实现功能：封装Header,在头部显示标题和返回按钮

包含组件：

外部传入:
navigator  点击按钮返回上一级页面
initObj(backName,barTitle)   返回按钮的名称、标题
 */

import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	WebView
} from 'react-native';

import Header from './header';

class SinglePage extends Component{
	render(){
		return(
			<View styles={styles.header}>
				<Header 
					navigator={this.props.navigator}
					initObj={{
						backName:this.props.backName,
						barTitle:this.props.title
					}}
				/>
				<WebView
					startInLoadingState={true}
					contentInset={{top:-44,bottom:-120}}
					source={{url:this.props.url}}
				/>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	header:{
		flex:1,
		backgroundColor:"white"
	}
});

module.exports=SinglePage;