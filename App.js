
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/register';
import Homepage from './src/screens/homepage';
import Service from './src/screens/service';
import Provider from './src/screens/provider';
import Profile from './src/screens/profile';
import ServiceUpload from './src/screens/serviceupload';
import ShowAdded from './src/screens/showadded';


export default function App() {
return(     


  <View> 
    <Service/>
  </View>
)


};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  }
});
