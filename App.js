/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
// import Sig_up from './src/components/Sign_up'
import Navigation from './src/config/Navigation'
import { GlobalProvider } from "./src/config/store/Context"


const App=  () => {
  return (
    <>
    <GlobalProvider>
      <StatusBar barStyle="dark-content" />
      
      {/* <Sig_up /> */}
      <Navigation/>
      </GlobalProvider>
     
      
           
         
          
         
      
     
    </>
  );
};

const styles = StyleSheet.create({
 
  View:{
    flex:1,
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center'

  },
  Text:{
    color:'red',
    fontSize:30
  
  },
  Icon:{
    color:'red',
    borderWidth:3,
    borderRadius:20,
    backgroundColor:'yellow'
  }
})
 

export default App;
