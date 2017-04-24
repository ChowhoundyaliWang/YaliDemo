import React,{Component} from 'react';
import{
	AppRegistry,
	Navigator
} from 'react-native';

import Inform from './Inform';

class InfromNav extends Component {
  render() {
    const defaultName='Inform';
    const defaultComponent=Inform;
    return (
     <Navigator
    
      initialRoute={{name:defaultName,component:defaultComponent}}
    
      configureScene={(route)=>{
        return Navigator.SceneConfigs.FadeAndroid;
      }}
      
      renderScene={(route,navigator)=>{
        const Component=route.component;
        if (route.component) {
          return <Component navigator={navigator}/>
        }
      }}
     />
    );
  }
}

module.exports=InfromNav;