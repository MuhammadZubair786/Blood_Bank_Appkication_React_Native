import React, { useState, useContext } from 'react';
import { SafeAreaView, Picker, StyleSheet, Image, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database'
import { GlobalContext } from '../../config/store/Context';
// import RNPickerSelect from 'react-native-picker-select';

import Donation from './Donation'




const Register = ({navigation}) => {

  return(
      <>
       <View style={{ flex: 0, flexDirection: 'row', backgroundColor: '#F9277A' }}>
       <View style={{ flex: 1, color: 'white' }}>
    <TouchableOpacity onPress={() => { navigation.openDrawer(); }} >

        <Image source={require('../../Images/men.png')} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
    </TouchableOpacity>
</View>
<View style={{ flex: 5, marginTop: 5 }}>
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Welcome Blood Bank Application</Text>


</View>

</View>
          <Donation/>
      </>
  )






};

const styles = StyleSheet.create({

  Main: {
    backgroundColor: 'red',
    flex: 1
  },
  header: {
    backgroundColor: '#F9277A',
    flex: 1
  },
  body: {
    backgroundColor: 'white',
    flex: 10,
    alignItems: 'center',

  },
  text: {
    color: 'white',
    fontSize: 25,
    marginTop: '1%',
    paddingLeft: '2%',
    fontFamily: 'Arial'

    // justifyContent:'center',
    // textAlign:'center',
    // alignItems:'center'
  },
  textinp: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: 'gray'

  },
  textinp2: {
    marginTop:15,
    width: '90%',
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: 'gray'

  },
  tchAble: {
    backgroundColor: '#F9146E',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop:15


  },
  IconView: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap'

  }
})


export default Register;
