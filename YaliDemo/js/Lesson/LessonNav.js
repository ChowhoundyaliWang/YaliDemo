import React,{Component} from 'react';
import{
	AppRegistry,
	Navigator
} from 'react-native';

import Lesson from './Lesson';

class LessonNav extends Component {
  render() {
    const defaultName='Lesson';
    const defaultComponent=Lesson;
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

module.exports=LessonNav;