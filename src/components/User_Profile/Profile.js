import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { GlobalContext } from '../../config/store/Context'
import database from '@react-native-firebase/database'


const Profile = ({ navigation }) => {

    const { User } = useContext(GlobalContext)
    console.log(User)

    const [data, setdata] = useState([])


    useEffect(() => {

        const data = User[0].Email;
        database()
            .ref()
            .child('users')
            .orderByChild('Email')
            .equalTo(data)
            .once('value')
            .then(snapshot => {


                const data11 = snapshot.toJSON()
                const value = Object.values(data11)

                setdata(Object.values(data11))




            }


            )

    }, [])

    console.log("User :", data)
    return (
        <>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ScrollView>
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
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'red', fontWeight: 'bold' }}>
                            User Profile
                    </Text>
                    </View>

                    <View style={{ marginLeft: 15, marginRight: 10 }} >
                        <View style={{ marginTop: '8%', padding: '2%', backgroundColor: '#F2EDE4' }} >
                            <View style={{ flexDirection: 'row' }}>

                                <Image source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png' }} style={{ width: 100, height: 100, marginLeft: '30%' }} />


                            </View>
                            {data.map((v, i) => {
                                return (
                                    <View key={i}>
                                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                                            <Text style={{ fontSize: 25, color: '#464646', fontWeight: 'bold' }} > Name : {v.Name}</Text>

                                        </View>
                                        {v.Blood_Group == ' ' || v.Blood_Group == ''
                                            ?
                                            false
                                            :
                                            <View>
                                                <View style={{ alignItems: 'center',paddingTop:'2%'}}>
                                                    <Text style={{ fontSize: 20, color: '#464646', fontWeight: 'bold' }}>Blood Group : {v.Blood_Group}
                                                    </Text>
                                                </View>
                                                <View style={{ alignItems: 'center',paddingTop:'2%'}}>
                                                    <Text style={{ fontSize: 20, color: '#464646',fontWeight: 'bold' }}>City : {v.City}
                                                    </Text>
                                                </View>

                                                <View style={{ alignItems: 'center',paddingTop:'2%'}}>
                                                    <Text style={{ fontSize: 20, color: '#464646', fontWeight: 'bold' }}>Mobile No : {v.Contact}
                                                    </Text>
                                                </View>
                                                <View style={{ alignItems: 'center',paddingTop:'2%'}}>
                                                    <Text style={{ fontSize: 20, color: '#464646', fontWeight: 'bold' }}>Address : {v.Address}
                                                    </Text>
                                                </View>
                                                <View style={{ alignItems: 'center',paddingTop:'2%'}}>
                                                    <Text style={{ fontSize: 20, color: '#464646', fontWeight: 'bold' }}>Registration Type: {v.Register_User}
                                                    </Text>
                                                </View>


                                            </View>

                                        }







                                        <View style={{ alignItems: 'center',paddingTop:'2%'}}>
                                            <Text style={{ fontSize: 20, color: '#464646', fontWeight: 'bold' }}>Email : {v.Email}
                                            </Text>
                                        </View>
                                    </View>

                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Profile