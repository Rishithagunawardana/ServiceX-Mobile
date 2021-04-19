import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/bg_services.jpg';
import avatar from '/repo/service/src/images/service_avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards'
import {Picker} from 'react-native-dropdown-picker'
import { BackgroundImage } from 'react-native-elements/dist/config';
import { ScrollView } from 'react-native-gesture-handler';




const {width:WIDTH} = Dimensions.get('window');
export default function ShowAdded(){
    
    return(
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <ScrollView>
         
       <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Added Services </Text>

      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>


      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>
      
      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>
      
      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>
      
      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>
      
      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>
      
      <Card style={{width:350, marginLeft:18,height:100, marginTop:30 }}>
      <Text style={{fontSize:20 , fontWeight:'bold', marginTop:40, marginLeft:20 }}>Service Data  </Text>

        <TouchableOpacity style={{marginTop:-30, marginLeft:190,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>View</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:270,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Delete</Text>
   </TouchableOpacity>
       
      </Card>
      
    


      </ScrollView>
      </ImageBackground>



    )
    }

const styles = StyleSheet.create({
    backgroundContainer: {
        width:400,
        height:1550
    
    }
})
