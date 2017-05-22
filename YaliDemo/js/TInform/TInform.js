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
  TouchableOpacity,
  TextInput
} from 'react-native';

 

class TLesson extends Component {
	//构造函数
	constructor(props){
		super(props);
		this.state={ text:''};
	}
   render(){
    return (
       <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>发布通知</Text>
            <View style={styles.separator}></View>
          </View>
          <View style={styles.publish}>
           		<TextInput 
           		style={styles.input}
           		returnKeyType="send"
           		multiline={true}
				numbersOfLines={10}
				underlineColorAndroid='transparent'
           		onChangeText={(text)=>this.setState({text})}
           		>
           		</TextInput>
           		<Text style={styles.tip}>已输入{this.state.text.length}个文字</Text>
              <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={this.send.bind(this)}><Text style={styles.textColor}>发布</Text></TouchableOpacity>
              </View>
          </View>
       </View>
    );
  }

  send(){
  	alert("发布成功！")
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
  publish:{
    padding:15
  },
  input:{
  	height:200,
	 borderWidth:1,
	 margin:5,
	 padding:5,
	 borderColor:'#CCCCCC',
	 borderRadius:4,
   backgroundColor:'#FFFFFF'
  },
  tip:{
	marginLeft:5,
	marginTop:5,
	marginBottom:5,
	fontWeight:"bold"
  },
  btn:{
	width:80,
	marginLeft:5,
	marginRight:5,
	backgroundColor:'#80adf3',
	height:40,
	justifyContent:'center',
	alignItems:'center',
	borderRadius:4
  },
  textColor:{
  	color:'#FFFFFF'
  },
  btnView:{
    justifyContent:'flex-end',
    alignItems:'center'
  }
})

module.exports=TLesson;