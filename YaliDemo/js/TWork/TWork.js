/*
...
 */

import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';


class TWork extends Component {
  render() {
    return (
    	<View style={styles.container}>
			<Text>这是教师发布作业页面</Text>
    	</View>
    );
  }
}

var styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFFFFF'
	},
	
});

module.exports=TWork;