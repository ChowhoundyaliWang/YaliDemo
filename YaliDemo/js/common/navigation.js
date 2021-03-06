/*
实现功能：封装导航器初始化设置

包含组件：Navigator
 */
import React,{Component} from 'react';
import{
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  ToolbarAndroid,
  Navigator
} from 'react-native';

export default class Navigation extends Component{
  constructor(props){
    super(props);
    const defaultName='';
    const defaultcomponent=this.props.component;
  }

  render() {
    return (
      <Navigator 
       initialRoute={{name:defaultName,component:defaultcomponent}}
       configureScene = {(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route,navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator} />
        }}
        />
    );
  }

  
}

module.exports=Navigation;