/*
...
 */

import React,{Component} from 'react';
import{
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Touch,
  Navigator
} from 'react-native';

import EditView from "./EditView";
import LoginButton from "./LoginButton";


import StuIndex from '../StuIndex';
import TeaIndex from '../TeaIndex';
import TLesson from '../TLesson/TLesson'




class LoadInner extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:80}}>
          <EditView name='输入用户名' onChangeText={(text)=>{
            this.setState({
              username:text
            });
          }}/>
          <EditView name='输入密码' onChangeText={(text)=>{
            this.setState({
              password:text
            });
          }}/>
          <LoginButton name='登录入口' onPressCallback={() => this.onPressCallback()}/>
        </View>
      </View>
      
    );
  }


  onPressCallback(){
    const url = 'http://10.176.128.255:3000/login';
    const username = this.state.username;
    const password = this.state.password;
    const data = `username=${username}&password=${password}`;

    fetch(url,{
      method:'post',
      headers:{
         "Content-type": "application/x-www-form-urlencoded"
      },
      body:data
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      const data = json.data;
      if (json.code && json.code === 1) {
        if(json.teacher === 1){
          console.log(this)
          console.log('teacher')
          //跳转到老师页面
          this.props.navigator.push({
            component:TLesson,
            title:'fjksf',
            passProps:{
              a:1
            }
          });
        }else if(json.teacher === 0){
          //跳转到学生页面
        }else{
          alert('调用出错')
        }
      }
    })
    .catch( e => console.log(e))
  }

 
}


class Load extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
               <LoadInner navigator={navigator}></LoadInner>
        }
      />
      
    );
  }
}

var styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FFFFFF',
		padding:30
	}
});

module.exports=Load;