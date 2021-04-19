import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import bgImage from '/repo/service/src/images/bg_dash.jpg';
import avatar from '/repo/service/src/images/avatar.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-shadow-cards'
import { ScrollView } from 'react-native-gesture-handler';



export default function Homepage(){
    
 return(
     <ScrollView>
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
    
   
   {/*login button*/}
   <TouchableOpacity style={{marginTop:30, marginLeft:220,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"red" }}>
       <Text style={{color:"white"}}>Login</Text>
   </TouchableOpacity>
   
   
   <TouchableOpacity style={{marginTop:-28, marginLeft:310,  borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"white" }}>
       <Text style={{color:"black"}}>Register</Text>
   </TouchableOpacity>
   
  
    {/*  සිතිවිලි  */}
  
    {/*  මතකද අමතකද පොඩි කාලේ
    කෙළිසෙල්ලම් වැලි පාරේ
    අත් අල්ලන් අයියා මග හමුවෙන්නන් ආයේ
    පාසලේදී විවේක කාලේ
    අම්මා කිව්වා අල්ලගන්න අයියගේ ම අතින්
    නොතේරුණාට කාරණාව
    චකිතය හිත යට මගේ තිබ්බා
    ඒ හින්දා ඇවිද්දා
    මං කල්පනාවෙන් දැක්කා
    අනුකම්පා කරලා හිස ඉම්බා
    වෙන්න ඇති සුළු වැරදි අතපසුවීම්
    ගෙදර හුරතලා මම 
    අම්මා මාව වඩන් අල්ලගත්තේ උඹේ අතින්
    එක ලේ ,අපි එක දම්වැලේ
    දින සති ගෙවී ගියා දුකසැප වෙරළේ
    අපි ආස කළේ වෙලාව ගෙවන්න වෙරළේ
    දෑසේ සතුටු කඳුළුම නිතර දෙවේලේ ඇයගේ    */}
     
   {/*avatar ,username, welcome note */}

    <View style = {styles.avatarContainer}>
    <Image source={avatar} style={styles.avatar}/>
    <Text style={styles.LogoText} >User Name </Text>
    <Text style={styles.regText} >Wellcome to Service X</Text>
    </View>
    

  {/*cards */}

    <Card style={{width:360, marginLeft:18,height:100, marginTop:40 }}>
    <Image  source={avatar} style={{width:80,height:80 , marginLeft:20 , marginTop:10}} />
    <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Mr.Thilan </Text>
    <Text style= {{fontSize:15 , fontWeight:"bold", marginLeft:130 } }> Electrician </Text>
    <TouchableOpacity style={{ marginTop:-32, marginLeft:250, borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Hire</Text>
   </TouchableOpacity>
    </Card>

    <Card style={{width:360, marginLeft:18,height:100, marginTop:40 }}>
    <Image  source={avatar} style={{width:80,height:80 , marginLeft:20 , marginTop:10}} />
    <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Mr.Thilan </Text>
    <Text style= {{fontSize:15 , fontWeight:"bold", marginLeft:130 } }> Electrician </Text>
    <TouchableOpacity style={{ marginTop:-32, marginLeft:250, borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Hire</Text>
   </TouchableOpacity>
    </Card>

    <Card style={{width:360, marginLeft:18,height:100, marginTop:40 }}>
    <Image  source={avatar} style={{width:80,height:80 , marginLeft:20 , marginTop:10}} />
    <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Mr.Thilan </Text>
    <Text style= {{fontSize:15 , fontWeight:"bold", marginLeft:130 } }> Electrician </Text>
    <TouchableOpacity style={{ marginTop:-32, marginLeft:250, borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Hire</Text>
   </TouchableOpacity>
    </Card>

    <Card style={{width:360, marginLeft:18,height:100, marginTop:40 }}>
    <Image  source={avatar} style={{width:80,height:80 , marginLeft:20 , marginTop:10}} />
    <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Mr.Thilan </Text>
    <Text style= {{fontSize:15 , fontWeight:"bold", marginLeft:130 } }> Electrician </Text>
    <TouchableOpacity style={{ marginTop:-32, marginLeft:250, borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Hire</Text>
   </TouchableOpacity>
    </Card>

    <Card style={{width:360, marginLeft:18,height:100, marginTop:40 }}>
    <Image  source={avatar} style={{width:80,height:80 , marginLeft:20 , marginTop:10}} />
    <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Mr.Thilan </Text>
    <Text style= {{fontSize:15 , fontWeight:"bold", marginLeft:130 } }> Electrician </Text>
    <TouchableOpacity style={{ marginTop:-32, marginLeft:250, borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Hire</Text>
   </TouchableOpacity>
    </Card>

    <Card style={{width:360, marginLeft:18,height:100, marginTop:40 }}>
    <Image  source={avatar} style={{width:80,height:80 , marginLeft:20 , marginTop:10}} />
    <Text style= {{fontSize:20 , fontWeight:"bold", marginLeft:130 ,marginTop:-60} }> Mr.Thilan </Text>
    <Text style= {{fontSize:15 , fontWeight:"bold", marginLeft:130 } }> Electrician </Text>
    <TouchableOpacity style={{ marginTop:-32, marginLeft:250, borderWidth:1,height:28
   ,width:"20%",justifyContent:"center"
   ,alignItems:"center",borderRadius:1,
   backgroundColor:"green" }}>
       <Text style={{color:"white"}}>Hire</Text>
   </TouchableOpacity>
    </Card>






    </ImageBackground>
    </ScrollView>
    
      
 )
 



}


const styles = StyleSheet.create({
    backgroundContainer: {
     width:null,
     height:null   
      
    },
    avatarContainer:{
        alignItems:'center',
        marginTop:20
      },
      avatar:{
          width:120,
          height:120
      },
    
    LogoText:{
      color:'white',
      fontSize:20,
      fontStyle:'normal',
      fontWeight:'bold',
      marginTop:20,
      opacity:20,
      alignItems:'center'
    },
    Card:{
        width:'90',
        height:'20%',
         justifyContent:'center'
    }
}); 