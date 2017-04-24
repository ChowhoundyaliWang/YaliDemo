/*
实现功能：封装导航器初始化设置

包含组件：Navigator

外部传入:
component 需要展示的组件
route对象  必须添加component属性：如果需要传值可以添加passProps属性

 */

import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator
} from 'react-native';

class  Navigation extends Component{
	render(){
		//1、创建路由对象,约定格式
		const rootRoute={
			component:this.props.component,
			passProps:{
					
			}
		}

		return(
			<Navigator
				initialRoute={rootRoute}
				configureScene={(route)=>{
        return Navigator.SceneConfigs.FadeAndroid;
      }}
      			renderScene={(route,navigator)=>{
        			const Component=route.component;
       				 if (route.component) {
          				return (
          					<View style={{flex:1}}>
          						<Component navigator={navigator}
          						route={route}
          						{...route.passProps}/>
          					</View>
          				)
       				}
      			}
      			}
			/>
		);
	}
}

module.exports=Navigation;