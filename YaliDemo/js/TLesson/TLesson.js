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
  ScrollView
} from 'react-native';

 

class TLesson extends Component {
   render(){
    return (
       <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>我的课堂</Text>
            <View style={styles.separator}></View>
          </View>
          <View style={styles.info}>
            <Image style={styles.img} source={require('../../img/photo.png')}/>
              <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={2}>计算机组成原理</Text>
                <Text style={styles.class}>每周一3、4节课在03-118教室，每周三5,6节课在03-316教室,每周一3、4节课在03-118教室，每周三5,6节课在03-316教室，每周一3、4节课在03-118教室，每周三5,6节课在03-316教室</Text>
              </View>
          </View>
           <ScrollView>
          <View style={styles.content}>
                <Text>《计算机组成原理》系统地介绍了计算机的基本组成原理和内部工作机制。《计算机组成原理》共分8章，主要内容分成两个部分：第1、2章介绍了计算机的基础知识；第3～8章介绍了计算机的各子系统（包括运算器、存储器、控制器、外部设备和输入输出子系统等）的基本组成原理、设计方法、相互关系以及各子系统互相连接构成整机系统的技术。</Text>
                <Text>根据教育部“高等学校计算机科学与技术专业规范”组织编写，与美国ACM和IEEEComputingCurricula2005同步
《计算机组成原理》特色。《计算机组成原理》以冯·诺依曼计算机模型为出发点，介绍单机系统范围内计算机的组织结构和工作原理。主要特色如下：内容覆盖了教育部“高等学校计算机科学与技术专业规范”对本课程所列知识体系中的全部核心单元及部分选修单元。既强调计算机的基本概念和基础知识，又注重与实际应用相结合，并注意反映当代的最新技术。按照横向方式组织课程实例，而不拘泥于某一种具体的机型，以减少局限性。注意由浅入深、循序渐进，概念讲解清楚、通俗易懂。
配套学习资源齐全，形成了比较完整的教材教学体系。</Text>
                <Text>
                  《面向21世纪课程教材•普通高等教育"十一五"国家级规划教材:计算机组成原理(第2版)》内容简介：为了紧跟国际上计算机技术的新发展，《面向21世纪课程教材•普通高等教育"十一五"国家级规划教材:计算机组成原理(第2版)》对第1版各章节的内容进行了补充和修改，并增加了例题分析，以加深对各知识点的理解和掌握。《面向21世纪课程教材•普通高等教育"十一五"国家级规划教材:计算机组成原理(第2版)》通过对一台实际计算机的剖析，使读者更深入地理解总线是如何将计算机各大部件互连成整机的。
                </Text>
          </View>
            </ScrollView>
       </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f7f7f7',
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
  },
  info:{
     flexDirection:'row',
     alignItems:'center',
     backgroundColor:'#FFFFFF',
    borderBottomWidth:1,
    borderBottomColor:'#CCCCCC',
    padding:15
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
  class:{
    marginTop:10,
    fontSize:12
  },
  content:{
    flex:1,
    margin:15
  },
  contentText:{
    fontSize:12
  }
})

module.exports=TLesson;