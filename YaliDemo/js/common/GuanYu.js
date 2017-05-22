/*
个人信息界面关于本系统详细内容介绍
 */

mport React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

 

class GuanYu extends Component {
	//构造函数
	constructor(props){
		super(props);
		this.state={ text:''};
	}
   render(){
    return (
       <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>关于</Text>
            <View style={styles.separator}></View>
          </View>
          <View style={styles.content}>
           		<Text style={styles.tip}></Text>
          </View>
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
  content:{
    padding:15
  },
  tip:{
	marginLeft:5,
	marginTop:5,
	marginBottom:5,
	fontSize:14px,
	color:'#333333'
  }
})

module.exports=GuanYu;