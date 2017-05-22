/*
教师个人信息具体界面
 */

import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native';


export default class TMyDetail extends Component{
	constructor(props){
		super(props);
		this.state={};
	}

	_pressPop(){
		const {navigator}=this.props;
    	if(navigator){
      		navigator.pop();
    	}
	}

  render() {
    return (
    	<View style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
				<View style={stylesPage.header}> 
					<TouchableOpacity style={stylesPage.btn} onPress={this._pressPop.bind(this)}>
					<Text style={stylesPage.btnText}>返回</Text>
					</TouchableOpacity>
					<Text style={stylesPage.title}>个人信息</Text>
    			</View>
				<Text style={styles.scrollText}>姓名：大熊</Text>
				<Text style={styles.scrollText}>教职工号：111111</Text>
				<Text style={styles.scrollText}>指导课程：计算机组成原理</Text>
			</ScrollView>
    	</View>
    );
  }
}

var styles=StyleSheet.create({
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
	container:{
		flex:1,
		backgroundColor:'#FFFFFF'
	},
	scrollContainer:{
		flex:1,
		margin:30
	},
	scrollText:{
		fontSize:15,
		marginTop:40,
		textAlign:'center'
	}
});

module.exports=TMyDetail;