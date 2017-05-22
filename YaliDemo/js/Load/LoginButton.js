
import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToolbarAndroid
} from 'react-native';


class LoginButton extends Component {
  constructor(props){
    super(props);
    this.state={text:''};
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressCallback} style={styles.loginTextView}>
        <Text style={styles.loginText}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }

  
}

var styles=StyleSheet.create({
  loginText:{
    color: '#ffffff',
    fontWeight: 'bold',
    width:100,
  },
  loginTextView: {
    marginTop: 10,
    height:50,
    backgroundColor: '#80adf3',
    borderRadius:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
});

module.exports=LoginButton;
