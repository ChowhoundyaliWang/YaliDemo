import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,View,Text,Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_1=require('../img/lesson.png');
const TAB_NORMAL_2=require('../img/work.png');
const TAB_NORMAL_3=require('../img/info.png');
const TAB_NORMAL_4=require('../img/my_tabbar.png');

const TAB_PRESS_1=require('../img/lesson.png');
const TAB_PRESS_2=require('../img/work.png');
const TAB_PRESS_3=require('../img/info.png');
const TAB_PRESS_4=require('../img/my_tabbar.png');

import TLesson from'./TLesson/TLesson';
import TWork from './TWork/TWork';
import TInform from './TInform/TInform';
import TMy from './TMy/TMy';

export default class TeaIndex extends Component {
  constructor(){
    super();
    this.state={
      selectedTab:'Lesson',
    }
  }

  /*tab点击方法*/
  onPress(tabName){
    if(tabName){
      this.setState(
          {
            selectedTab:tabName,
          }
      );
    }
  }
  
  /**
   渲染每项
   **/
  renderTabView(title,tabName,TabContent,isBadge){
    var tabNomal;
    var tabPress;
    switch (tabName) {
      case 'Lesson':
        tabNomal=TAB_NORMAL_1;
        tabPress=TAB_PRESS_1;
        break;
      case 'Work':
        tabNomal=TAB_NORMAL_2;
        tabPress=TAB_PRESS_2;
        break;
      case 'Inform':
        tabNomal=TAB_NORMAL_3;
        tabPress=TAB_PRESS_3;
        break;
      case 'My':
        tabNomal=TAB_NORMAL_4;
        tabPress=TAB_PRESS_4;
        break;
      default:

    }
    
    return(
        <TabNavigatorItem
            title={title}
            renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
            renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
            selected={this.state.selectedTab===tabName}
            selectedTitleStyle={{color:'#80adf3'}}
            onPress={()=>this.onPress(tabName)}
           /* renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}*/
            >
          <View style={{flex:1}}>
           <TabContent></TabContent>
          </View>
        </TabNavigatorItem>
    );
  }

  /**
   自定义tabbar
   **/
  tabBarView(){
    return (
        <TabNavigator
            tabBarStyle={styles.tab}
            >
          {this.renderTabView('课堂','Lesson',TLesson,true)}
          {this.renderTabView('作业','Work',TWork,false)}
          {this.renderTabView('通知','Inform',TInform,false)}
          {this.renderTabView('我','My',TMy,false)}
        </TabNavigator>
    );
  }


  render() {
    var tabBarView=this.tabBarView();

    return (
        <View style={styles.container}>
          {tabBarView}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tab:{
    height: 54,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:24,
    height:24,
  }
});
module.exports=TeaIndex;