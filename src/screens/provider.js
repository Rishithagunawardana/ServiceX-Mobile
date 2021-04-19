import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/bg.jpg';
import avatar from '/repo/service/src/images/service_avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards'
import { ScrollView } from 'react-native-gesture-handler';
import Upload from '/repo/service/src/images/upload.png';
import Service from '/repo/service/src/images/sser.png';
import Profile from '/repo/service/src/images/profile.png';

export default function Provider(){

    return(
        <ScrollView>
        <View>

        <Text style= {{fontSize:24 , fontWeight:"bold", marginLeft:10 ,marginTop:25} }> Service Provider </Text>
      


    <Card style={{width:360,backgroundColor:"lightblue", marginLeft:18,height:120, marginTop:30 }}>
      
      <TouchableOpacity>
           <Image  source={Service} style={{width:80,height:80 , marginLeft:30 , marginTop:30}} />
          <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Show Added Services   </Text>
      
     </TouchableOpacity>
      </Card>


      <Card style={{width:360,backgroundColor:"lightblue", marginLeft:18,height:120, marginTop:40 }}>
      
      <TouchableOpacity>
           <Image  source={Upload} style={{width:80,height:80 , marginLeft:250 , marginTop:20}} />
          <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:60 ,marginTop:-50} }> Upload Service </Text>
      
     </TouchableOpacity>
      </Card>


      <Card style={{width:360,backgroundColor:"lightblue", marginLeft:18,height:120, marginTop:40 }}>
      
      <TouchableOpacity>
           <Image  source={Profile} style={{width:80,height:80 , marginLeft:30 , marginTop:20}} />
          <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:160 ,marginTop:-50} }> Profile </Text>
      
     </TouchableOpacity>
      </Card>



        </View>
    



        </ScrollView>
)

}


const styles = StyleSheet.create({
    backgroundContainer: {
     width:null,
     height:null   
      
    }
});