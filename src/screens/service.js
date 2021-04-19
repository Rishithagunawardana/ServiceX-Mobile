import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/bg.jpg';
import avatar from '/repo/service/src/images/service_avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards'



export default function Service(){
    
    return(
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            
            <View style = {styles.avatarContainer}>
    <Image source={avatar} style={styles.avatar}/>
    <Text style={styles.LogoText}>Thilan Hettiarachchi  </Text>
    <Text style={styles.regText} >Electrician</Text>
    {/*ignore these 3 lines */}
    <Text style={styles.regText} ></Text>
    <Text style={styles.regText} ></Text>
    <Text style={styles.regText} ></Text>
    </View>

    
<View>
<Card style={{width:360, marginLeft:18,height:380,  marginTop:10  }}>
{/*item 1  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Provider </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

{/*item 2  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Area </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

{/*item 3  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Description </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>


{/*item 4  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Contacts  </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

{/*item 5  */}
<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:20, marginLeft:20} }> Other </Text>

<Text style= {{fontSize:20 , fontWeight:"bold" ,marginTop:-26, marginLeft:130} }> : </Text>

<Text style= {{fontSize:15 , fontWeight:"bold",marginTop:-22, marginLeft:180     } }> something </Text>

</Card>
</View>


<TouchableOpacity style={{ marginTop:20, marginLeft:75, borderWidth:1,height:38
,width:"60%",justifyContent:"center"
,alignItems:"center",borderRadius:1,
backgroundColor:"green" }}>
   <Text style={{color:"white"}}>Hire</Text>
</TouchableOpacity>


<TouchableOpacity style={{ marginTop:20, marginLeft:75, borderWidth:1,height:38
,width:"60%",justifyContent:"center"
,alignItems:"center",borderRadius:1,
backgroundColor:"red" }}>
   <Text style={{color:"white"}}>Back</Text>
</TouchableOpacity>



       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
     width:null,
     height:null   
      
    }, LogoText:{
        color:'black',
        fontSize:20,
        fontStyle:'normal',
        fontWeight:'bold',
        marginTop:-100,
        marginLeft:190,
        opacity:20,
        alignItems:'center'
      },
      regText:{
        color:'black',
        fontSize:15,
        fontStyle:'normal',
        
        marginTop:10,
        marginLeft:190,
        opacity:20,
        alignItems:'center'
      },
      backgroundContainer: {
        width:null,
        height:null   
         
       },
       avatarContainer:{
           marginLeft:26,
           marginTop:36
         },
         avatar:{
             width:120,
             height:120
         },
       
});