/*
用户登录界面
教师登录
学生登录
 */

import React, {
  Component
} from 'react';
import {
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


class LoadInner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      type:"login"
    }
  }

  render() {
      if(this.state.type == 'login'){
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
      }else if(this.state.type == 'teacher'){
          return (
              <TeaIndex></TeaIndex>
          )
      }else if(this.state.type == 'student'){
           return (
              <StuIndex></StuIndex>
          )
      }

  }


  onPressCallback() {
    const url = 'http://10.176.128.255:3000/login';
    // const url = 'http://127.0.0.1:3000/login';

    const username = this.state.username;
    const password = this.state.password;
    const data = `username=${username}&password=${password}`;

    
   



    fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: data
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        const data = json.data;
        if (json.code && json.code === 1) {
          if (json.teacher === 1) {
              //跳转到老师页面
             this.setState({
                type:'teacher'
              })
          } else if (json.teacher === 0) {
            //跳转到学生页面
            this.setState({
                type:'student'
              })
          } else {
            alert('调用出错')
          }
        }
      })
      .catch(e => console.log(e))
  }


}



class Load extends Component {

  render() {
    return (
        < Navigator
            initialRoute = {
                {component: LoadInner}   //将根界面压栈
            }
            renderScene = {
                (route, navigator) =>{
                    const Component = route.component;
                    return <Component navigator={navigator}></Component>
                }

            }
      />

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30
  }
});

// module.exports = Load;
export default Load;
