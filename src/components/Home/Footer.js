import React from 'react'
import { Text, View, StyleSheet, Image ,TextInput} from 'react-native'


function Footer() {
    return (
        <>
            <View style={{ flex: 1, marginTop: 60, backgroundColor: '#F7D1E0', flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                    <View >
                        <Image style={{ width: 200, height: 100, resizeMode: 'contain' }} source={{ uri: "https://templates.bwlthemes.com/blood_donation/images/logo.png" }} />

                    </View>
                </View>
                <View style={{ flex: 2, marginTop: 10 }}>
                    <Text style={{fontWeight:'bold'}}>We are working all over the world, organizing blood donation
                    campaign to grow awareness among the people to donate blood.</Text>

                </View>

            </View>

            <View style={{flex:1,flexDirection:'row',backgroundColor:'#FC1C75',justifyContent:'center'}}>
               <Text style={{color:'white',fontWeight:'bold'}}>Deploy By Muhammad Zubair Minhas</Text>

            </View>
        </>
    )

}

export default Footer