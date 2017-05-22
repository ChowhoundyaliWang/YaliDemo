import React, { Component, PropTypes } from 'react';
import { 
	Navigator,
	Text, 
	TouchableHighlight,
	AppRegistry, 
	View 
} from 'react-native';

//class MyScene extends Component {这种定义的类是在不包含的时候用
//export default class MyScene extends Component {这种定义的方法是在包含此文件的时候用
export default class MyScene extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		onForward: PropTypes.func.isRequired,
		onBack: PropTypes.func.isRequired,
	}	
	render() {
		return (
			<View>
				<Text>Current Scene: { this.props.title }</Text>
				<TouchableHighlight onPress={this.props.onForward}>//单击事件回调
				<Text>Tap me to load the next scene</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.onBack}>
				<Text>Tap me to go back</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

module.exports=MyScene;

