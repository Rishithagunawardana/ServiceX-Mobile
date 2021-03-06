import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/bg.jpg';
import Logo from '/repo/service/src/images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';




const {width:WIDTH} = Dimensions.get('window');
export default function Login(){
 
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style = {styles.LogoContainer}>
      <Image source={Logo} style={styles.Logo}/>
      <Text style={styles.LogoText} >SERVICE X</Text>
      </View>

    {/*username*/}
    <View  style = {styles.inputContainer}>
      <Icon name={'ios-person-outline'} size={28} color={'rgba(255,255,255,0.7)'}
       style = {styles.inputicon}/>
      <TextInput style = {styles.input} 
      placeholder={'  Email'}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'/>
    </View>
      
    {/*password*/}
    <View  style = {styles.inputContainer}>
      <Icon name={'lock-closed-outline'} size={28} color={'rgba(255,255,255,0.7)'}
       style = {styles.inputiconpass}/>
      <TextInput style = {styles.inputpass} 
      placeholder={'  Password'}
      secureTextEntry={true}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'/>



    
  {/*Login  button*/}
    <TouchableOpacity style = {styles.loginbtn}>
    <Text style = {styles.logintext}> Login </Text>
      </TouchableOpacity>
    
  {/*signup  button*/}
  <TouchableOpacity  style = {styles.signupbtn}>
    <Text style = {styles.signuptext}> Signup Now! </Text>
      </TouchableOpacity>


      <Text style = {styles.credit}>Idea Seekrs All Rights Reserved!  </Text>
     </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
   
  
  },

  inputiconpass:{
    position:'absolute',
    top:39,
    left:40

  },
  inputContainer:{
    marginTop:10
  },
  LogoContainer:{
    alignItems:'center',
    marginTop:90
  },
  Logo:{
      width:120,
      height:120
  },
  LogoText:{
    color:'white',
    fontSize:30,
    fontStyle:'normal',
    fontWeight:'bold',
    marginTop:40,
    opacity:20,
    alignItems:'center'
  },
  input:{
    width:WIDTH - 55,
    height: 45,
    marginTop:82,
    alignContent:'center',
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inputpass:{
    width:WIDTH - 55,
    height: 45,
    marginTop:32,
    alignContent:'center',
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
 

  inputicon:{
    position:'absolute',
    top:89,
    left:40
  },
  loginbtn:{
    justifyContent:'center',
    width:WIDTH - 55,
    height: 45,
    marginTop:40,
    marginLeft:48,
    alignContent:'center',
    borderRadius:25,
    backgroundColor:'#000080',
    width:WIDTH -102
  },
  logintext:{
     marginTop:5,
    color:'#b2beb5',
    fontSize:16,
    textAlign:'center',
    
  },
  signupbtn:{
    justifyContent:'center',
    width:WIDTH - 55,
    height: 45,
    marginTop:30,
    marginLeft:48,
    alignContent:'center',
    borderRadius:25,
    backgroundColor:'#0288d1',
    width:WIDTH -102
  },
  signuptext:{
    marginTop:5,
    color:'#ffff',
    fontSize:16,
    textAlign:'center',
  },

  credit:{
    marginTop:40,
    color:'#000000',
    fontSize:9,
    textAlign:'center',
  }
 
});
