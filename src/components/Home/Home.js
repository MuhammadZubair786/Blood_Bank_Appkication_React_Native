import React, { useContext, useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import { GlobalContext } from '../../config/store/Context';
import database from '@react-native-firebase/database'
import Slid_carousel from "./Slid_carousel";
import Help from './Help'
import Footer from './Footer'





const Home = ({ route, navigation }) => {

  const { Email_data, param } = route.params;
  const [data1, setdata] = useState()
  const { addCart } = useContext(GlobalContext)

  const { User } = useContext(GlobalContext)


  useEffect(() => {

    const data = Email_data;
    database()
      .ref()
      .child('users')
      .orderByChild('Email')
      .equalTo(data)
      .once('value')
      .then(snapshot => {
        const data11 = snapshot.toJSON()

        // console.log("User Data in HOME")


        data_key = Object.keys(snapshot.val())
        // console.log("Key : ", data_key)
        // console.log("Email :", data11[data_key]['Email'])
        // console.log("Name :", data11[data_key]['Name'])
        // console.log("Password : ", data11[data_key]['Password'])
        // console.log("Blood Group : ",data11[data_key]['Blood_Group'])

        const user_Data = {
          Key:data_key,
          Name: data11[data_key]['Name'],
          Email: data11[data_key]['Email'],
          Password: data11[data_key]['Password'],
          Blood_Group:data11[data_key]['Blood_Group']


        }

        // console.log("user_Data ", user_Data)

        addCart(user_Data)
      });
  }, [])


  return (


    <View style={{ flex: 1, }}>
      <ScrollView>


        <Slid_carousel />
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity style={{ backgroundColor: '#F9277A', marginTop: 20, width: '80%', justifyContent: 'center' }} onPress={()=>{ navigation.navigate('DrawerScreen') }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>Go To Main Page</Text>
          </TouchableOpacity>
        </View>
        <Help />
        <Footer />

        {/* <Button title={'call me'} onPress={()=>{ navigation.navigate('DrawerScreen') }}></Button> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    display: 'flex',

  }
})


export default Home

