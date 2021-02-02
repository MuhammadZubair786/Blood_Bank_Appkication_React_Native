import React, { useContext } from 'react'
import { Text, View, Button, Image, TouchableOpacity } from 'react-native'
import { GlobalContext } from '../../config/store/Context';
import Slid_carousel from './Slid_carousel'


function Header({ navigation }) {

    // const { User } = useContext(GlobalContext)

    // console.log("Main Screen :",User)

    return (
        <>
            < View style={{ flex: 1 }}>

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

                {/* < Slid_carousel/> */}



            </ View>

            <View style={{ flex: 1 }}>
                <Button title={'Show'} onPress={() => { navigation.openDrawer(); }}></Button>
            </View>
        </>


    )

}

export default Header