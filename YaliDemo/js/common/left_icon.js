import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';


class Icon extends Component{
	render(){
		return(
			<View>
				<View style={styles.go}></View>
			</View>
		);
	}
}

const styles=StyleSheet.create({
	go:{
		width:15,
		height:15,
		borderWidth:2,
		borderButtonWidth:2,
		borderColor:'#fff',
		marginLeft:10,
		transform:[{rotate:"45deg"}] //将一个矩形框旋转了45°
	}
});

module.exports=Icon;