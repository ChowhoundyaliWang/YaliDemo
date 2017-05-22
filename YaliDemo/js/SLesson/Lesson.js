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

const LessonData=require("../data.json")
const lessons=LessonData.lessons;
 

class Lesson extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow});
    this.state = {
      dataSource: ds.cloneWithRows(lessons)
    }
  }
 

  _renderRow(lesson){
    return(
        <View style={styles.row}>
          <Image style={styles.img} source={{uri:lesson.book}}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={2}>{lesson.lessonName}</Text>
            <Text style={styles.teacher}>{lesson.teacher} 老师</Text>
            <Text style={styles.info}>{lesson.info}</Text>
          </View>
        </View>
      );
  }

  _renderHeader(){
    return(
      <View style={styles.header}>
        <Text style={styles.headerText}>课堂</Text>
        <View style={styles.separator}></View>
      </View>
    );
  }

  _renderSeparator(sectionID:number,rowID:number){
      return(
        <View  key={sectionID+rowID}></View>
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
    backgroundColor:'#f7f7f7',
    marginBottom:20
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:14,
    padding:15,
    backgroundColor:'#FFFFFF',
    shadowColor:'#CCCCCC',
    shadowOffset:{h:10,w:10},
    shadowRadius:6,
    shadowOpacity:0.6
  },
  img:{
    width:66,
    height:82
  },
  rightContainer:{
    marginLeft:10,
    flex:1
  },
  title:{
    fontSize:14
  },
  teacher:{
    marginTop:7,
    fontSize:12
  },
  info:{
    marginTop:7,
    fontSize:12
  },
  btn:{
    marginTop:7,
    width:66,
    height:18,
    backgroundColor:'#80adf3',
    borderColor:'#CCCCCC',
    borderRadius:4
  },
  btnText:{
    fontSize:12,
    textAlign:'center',
    color:"#F5FCFF"
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

module.exports=Lesson;