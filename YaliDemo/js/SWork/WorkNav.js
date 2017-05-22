
import React,{Component} from 'react';
import{
	AppRegistry,
	Navigator
} from 'react-native';

import Work from './Work';

class WorkNav extends Component {
  render() {
    const defaultName='Work';
    const defaultComponent=Work;
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

module.exports=WorkNav;