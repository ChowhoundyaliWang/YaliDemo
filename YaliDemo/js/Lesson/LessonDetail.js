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
	TouchableOpacity,
	 ScrollView
} from 'react-native';

import Lesson from './Lesson';

const LessonData=require("../data.json")
const students=LessonData.students;

class LessonDetail extends Component {
	constructor(props){
		super(props);
		this.state={};
		Lesson:null;  //课堂对象详情页面
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
		<Text style={stylesPage.title}>课堂成员</Text>
    	</View>
    	<ScrollView style={{flex:1}}>
    	<View style={stylesPage.content}>
		<Text style={stylesPage.text}>{this.state.Lesson.students}</Text>
    	</View>
    	</ScrollView>
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

module.exports=LessonDetail;