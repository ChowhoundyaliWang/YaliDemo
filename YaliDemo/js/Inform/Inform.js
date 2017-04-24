/*
...
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';

const informData=require("../data.json")
const informs=informData.informs;
 
import InformPage from './InformPage';
/*
设置ListView数据源：
将dataSource对象设置为state属性，ListView会根据数据源进行渲染
 */

class Inform extends Component {
  //初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
  //通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow});
    this.state = {
      //设置dataSource时，不直接使用提供的原始数据，使用cloneWithRows对数据源进行复制
      //使用复制后的数据源实例化ListView,优势：当原始数据发生变化时，ListView组件的dataSource不会改变
      dataSource: ds.cloneWithRows(informs)
    };
  }

  _pressPush(){
    //推出下一级页面
    const {navigator}=this.props;
   if(navigator){
    navigator.push({
      name:'InformPage',
      component:InformPage
    })
   }
  }


  _renderRow(inform){
    return(
      <TouchableOpacity onPress={this._pressPush.bind(this)}>
        <View style={styles.row}>
          <Text style={styles.inform}>{inform.title}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.fabu}>{inform.teacher}老师</Text>
			<Text style={styles.fabu}>发布于 {inform.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      );
  }

  _renderHeader(){
    return(
      <View style={styles.header}>
        <Text style={styles.headerText}>通知</Text>
        <View style={styles.separator}></View>
      </View>
    );
  }

  _renderSeparator(sectionID:number,rowID:number){
      return(
        <View style={styles.separator}  key={sectionID+rowID}></View>
      );
  }

   render(){
    return (
        <ListView
        style={styles.listView}
          dataSource={this.state.dataSource} //配置数据源
         renderRow={this._renderRow.bind(this)}
         renderHeader={this._renderHeader.bind(this)}
         renderSeparator={this._renderSeparator.bind(this)}
         initialListSize={10}
        />
    );
  }

}

const styles=StyleSheet.create({
  listView:{
    flex:1,
    backgroundColor:'#FFFFFF',
    marginBottom:20
  },

  row:{
    padding:8,
    backgroundColor:'#FFFFFF'
  },
  inform:{
    fontSize:14
  },
  bottomContainer:{
    flexDirection:'row'
  },
  fabu:{
  	fontSize:12,
    paddingRight:4,
    marginTop:5
  },

  header:{
    height:44,
    backgroundColor:'#80adf3'
  },
  headerText:{
    fontSize:20,
    flex:1,
    color:"#F5FCFF",
    fontWeight:"bold",
    textAlign:'center',
    lineHeight:34
  },
 
  separator:{
    height:1,
    backgroundColor:'#CCCCCC'
  }
})

module.exports=Inform;