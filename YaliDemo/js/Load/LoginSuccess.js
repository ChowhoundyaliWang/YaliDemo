


import React,{Component} from 'react';
import{
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  ToolbarAndroid,
  Navigator
} from 'react-native';


class LoginSuccess extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  //回到第一个页面去
  onJump(){
    const {navigator}=this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onJump.bind(this)}>
          <Text>登录成功，点击返回登录页面</Text>
        </TouchableOpacity>      
      </View>
    );
  }

  
}

module.exports=LoginSuccess;