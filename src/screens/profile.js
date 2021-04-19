import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/proflelarge.jpg';
import avatar from '/repo/service/src/images/avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards'
import { ScrollView } from 'react-native-gesture-handler';
import Edit from '/repo/service/src/images/edit.png';


export default function Profile(){
    
 return(
      <View>
   
     <Image source={bgImage} style={{ width:400, height:290 }}/>
     <Image source={avatar} style={{ width:130, height:130 , marginLeft:15, marginTop:-80}}/>
     <Image source={Edit} style={{ width:60, height:60 , marginLeft:105, marginTop:-45}}/>
     <Text style={{fontSize:30, marginTop:-250 , marginLeft:109, fontWeight:'bold' }} > User Name </Text>
      
    
<Card style={{width:360, marginLeft:18,height:380,  marginTop:220  }}>
{/*item 1  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Provider </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

<TouchableOpacity style={{marginTop:-25, marginLeft:275,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>change </Text>
   </TouchableOpacity>

{/*item 2  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Area </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

<TouchableOpacity style={{marginTop:-25, marginLeft:275,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>change </Text>
   </TouchableOpacity>



{/*item 3  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Description </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

<TouchableOpacity style={{marginTop:-25, marginLeft:275,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>change </Text>
   </TouchableOpacity>


{/*item 4  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Contacts  </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

<TouchableOpacity style={{marginTop:-25, marginLeft:275,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>change </Text>
   </TouchableOpacity>

{/*item 5  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Other </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

<TouchableOpacity style={{marginTop:-25, marginLeft:275,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>change </Text>
   </TouchableOpacity>


   <TouchableOpacity style={{marginTop:25, marginLeft:50,  borderWidth:1,height:28
   ,width:"60%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Password change </Text>
   </TouchableOpacity>

</Card>
     

      
      
      
      </View>

 )
}


const styles = StyleSheet.create({
    backgroundContainer: {
     width:null,
     height:null   
      
    }
});

