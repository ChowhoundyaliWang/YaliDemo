/*
教师个人信息界面
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


class TMy extends Component {
  render() {
    return (
    	<View style={styles.container}>
			<View style={styles.photoContainer}>
				<TouchableWithoutFeedback>
					<Image source={require('../../img/photo.png')} style={styles.photo}/>
				</TouchableWithoutFeedback>
				<Text style={styles.teacher}>大熊 教师</Text>
				<Text style={styles.teacher}>教职工号：666888</Text>
			</View>
			
			<ScrollView style={styles.scrollContainer}>
				<TouchableOpacity><Text style={styles.scrollText}>个人信息</Text></TouchableOpacity>
				<TouchableOpacity><Text style={styles.scrollText}>关于</Text></TouchableOpacity>
				<TouchableOpacity><Text style={styles.scrollText}>退出登录</Text></TouchableOpacity>
			</ScrollView>
    	</View>
    );
  }
}

var styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFFFFF'
	},
	photoContainer:{
		height:184,
		alignItems:'center',
		justifyContent:'center',
		borderBottomWidth:1,
		borderColor:'#CCCCCC'

	},
	photo:{
		width:64,
		height:64,
		borderRadius:32,
		marginTop:30
	},
	teacher:{
		fontSize:15,
		marginTop:10
	},
	scrollContainer:{
		flex:1,
		marginBottom:20
	},
	scrollText:{
		fontSize:15,
		marginTop:40,
		textAlign:'center'
	}
});

module.exports=TMy;