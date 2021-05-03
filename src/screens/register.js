import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from './repo/ServiceX/src/images/bg.jpg';
import avatar from './repo/ServiceX/src/images/avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';



const {width:WIDTH} = Dimensions.get('window');
export default function Register(){

   
    
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style = {styles.avatarContainer}>
      <Image source={avatar} style={styles.avatar}/>
      <Text style={styles.LogoText} >SERVICE X</Text>
      <Text style={styles.regText} >Register Here</Text>
      </View>

        
    {/*Name*/}
    <View  style = {styles.nameinputContainer}>
      <Icon name={'ios-person-outline'} size={28} color={'rgba(255,255,255,0.7)'}
       style = {styles.nameinputicon}/>
      <TextInput style = {styles.nameinput} 
      placeholder={'  Name'}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'/>
    </View>
      

   
    {/*tel*/}
    <View  style = {styles.telinputContainer}>
      <Icon name={'call'} size={28} color={'rgba(255,255,255,0.7)'}
       style = {styles.telinputicon}/>
      <TextInput style = {styles.telinput} 
      placeholder={'  Phone No'}
      numberInputProps ={true}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'/>
    </View>


    {/*Email*/}
    <View  style = {styles.inputContainer}>
      <Icon name={'mail'} size={28} color={'rgba(255,255,255,0.7)'}
       style = {styles.inputicon}/>
      <TextInput style = {styles.input} 
      placeholder={'  Email'}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'/>
    </View>
      
    {/*password*/}
    <View  style = {styles.passinputContainer}>
      <Icon name={'lock-closed-outline'} size={28} color={'rgba(255,255,255,0.7)'}
       style = {styles.inputiconpass}/>
      <TextInput style = {styles.inputpass} 
      placeholder={'  Password'}
      secureTextEntry={true}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'/>



   
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
  telinputicon:{
    top:23,
    left:40

  },


  
 passinputContainer:{
    marginTop:-8
  },
  
 telinputContainer:{
    marginTop:5
  },

  inputContainer:{
    marginTop:-65
  },
  nameinputContainer:{
    marginTop:-10
  },

  avatarContainer:{
    alignItems:'center',
    marginTop:90
  },
  avatar:{
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
  telinput:{
    width:WIDTH - 55,
    height: 45,
    marginTop:-12,
    alignContent:'center',
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  nameinput:{
    width:WIDTH - 55,
    height: 45,
    marginTop:5,
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
  nameinputicon:{

    top:42,
    left:40
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
    marginTop:90,
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
    marginTop:-110,
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
    marginTop:78,
    color:'#000000',
    fontSize:9,
    textAlign:'center',
  }
 
});
