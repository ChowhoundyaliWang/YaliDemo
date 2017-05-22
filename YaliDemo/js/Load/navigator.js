import React,{Component} from 'react';
import{
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  ToolbarAndroid,
  Navigator
} from 'react-native';

import Main from './main';

class navigator extends Component {
  constructor(props){
    super(props);
    
  }


  render() {
    let defaultName='Main';
    let defaultComponent=Main;
    return (
      <Navigator 
       initialRoute={{name:defaultName,component:defaultComponent}}
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

module.exports=navigator;