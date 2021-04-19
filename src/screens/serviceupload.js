import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/bg.jpg';
import avatar from '/repo/service/src/images/service_avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards'
import {Picker} from 'react-native-dropdown-picker'




const {width:WIDTH} = Dimensions.get('window');
export default function ServiceUpload(){
    
    return(
    <View>
         <Text style= {{fontSize:24 , fontWeight:"bold", marginLeft:10 ,marginTop:35} }> Upload A Service </Text>     
        


         <Text style= {{fontSize:16 , fontWeight:"bold", marginLeft:15 ,marginTop:75} }> Upload A Service </Text> 
     <TextInput style = {{ width:WIDTH - 55,
    height: 50,
    marginTop:12,
    alignContent:'center',
    borderRadius:2,
    fontSize:16,
    paddingLeft:35,
    backgroundColor:'lightblue',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25}} 
      placeholder={'  Service'}
      placeholderTextColor={'black'}
      underlineColorAndroid='transparent'/>



<Text style= {{fontSize:16 , fontWeight:"bold", marginLeft:15 ,marginTop:35} }> Description </Text> 
     <TextInput style = {{ width:WIDTH - 55,
    height: 100,
    marginTop:12,
    alignContent:'center',
    borderRadius:2,
    fontSize:15,
    paddingLeft:35,
    backgroundColor:'lightblue',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25}} 
      placeholder={'  Service Description'}
      placeholderTextColor={'black'}
      underlineColorAndroid='transparent'/>



<Text style= {{fontSize:16 , fontWeight:"bold", marginLeft:15 ,marginTop:35} }> Area </Text> 
     <TextInput style = {{ width:WIDTH - 55,
    height: 50,
    marginTop:12,
    alignContent:'center',
    borderRadius:2,
    fontSize:16,
    paddingLeft:35,
    backgroundColor:'lightblue',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25}} 
      placeholder={'  Area'}
      placeholderTextColor={'black'}
      underlineColorAndroid='transparent'/>



<Text style= {{fontSize:16 , fontWeight:"bold", marginLeft:15 ,marginTop:75} }> Upload  </Text> 
  
<TouchableOpacity style={{marginTop:25, marginLeft:25,  borderWidth:1,height:38
   ,width:"60%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"#b2beb5"}}>
       <Text style={{color:"black"}}>Upload</Text>
   </TouchableOpacity>


    </View>

    )


}
const styles = StyleSheet.create({
    backgroundContainer: {
     width:null,
     height:null   
    }
})