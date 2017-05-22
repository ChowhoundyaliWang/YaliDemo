/*
...
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

/*import Navigation from "../common/Navigation";*/
import SMyDetail from "./SMyDetail";

class StuMy extends Component {
	_pressPush(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'SMyDetail',
         component : SMyDetail,
       });
     }
   }
  render() {
  	console.log(this.props)
    return (
    	<View style={styles.container}>
			<View style={styles.photoContainer}>
				<TouchableWithoutFeedback>
					<Image source={require('../../img/photo.png')} style={styles.photo}/>
				</TouchableWithoutFeedback>
				<Text style={styles.student}>叮当 学生</Text>
				<Text style={styles.student}>学号：1304241111</Text>
			</View>
			
			<ScrollView style={styles.scrollContainer}>
				<TouchableOpacity onPress={this._pressPush.bind(this)}><Text style={styles.scrollText}>个人信息</Text></TouchableOpacity>
				<TouchableOpacity><Text style={styles.scrollText}>我的课堂</Text></TouchableOpacity>
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
	student:{
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

module.exports=StuMy;