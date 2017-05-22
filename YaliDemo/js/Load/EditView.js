import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToolbarAndroid
} from 'react-native';



class EditView extends Component {
  constructor(props){
    super(props);
    this.state={text:''};
  }

  render() {
    return (
      <View style={styles.TextInputView}>
      <TextInput style={styles.TextInput}
      underlineColorAndroid='transparent'
      placeholder={this.props.name}
      onChangeText={
        (text)=>{
          this.setState({text});
          this.props.onChangeText(text);
        }
      }
      />
      </View>
    );
  }

  
}

var styles=StyleSheet.create({
TextInputView: {
    marginTop: 10,
    height:50,
    backgroundColor: '#ffffff',
    borderRadius:5,
    borderWidth:0.3,
    borderColor:'#333333',
    flexDirection: 'column',
    justifyContent: 'center',
  },

TextInput: {
    backgroundColor: '#ffffff',
    height:45,
    margin:18,
  }
});

module.exports=EditView;