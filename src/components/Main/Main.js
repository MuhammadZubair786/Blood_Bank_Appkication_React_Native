import React, { useContext } from 'react'
import { Text, View, Button, Image, TouchableOpacity,ScrollView } from 'react-native'
import { GlobalContext } from '../../config/store/Context';
import Slid_carousel from './Slid_carousel'
import Footer from '../Home/Footer'


function Header({ navigation }) {

    const { User } = useContext(GlobalContext)

    // console.log("Main Screen :", User)

    return (
        < View style={{ flex: 1 }}>
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

             < Slid_carousel/>

             <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    OUR SPONSORS

            </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -10, color: '#F9277A' }}>
                        _____<Text style={{ borderWidth: 1, borderColor: '#F9277A', borderRadius: 50 }}><Image source={require("../../Images/bld.png")} style={{ width: 100, height: 60, resizeMode: 'contain', borderWidth: 1, borderColor: '#F9277A', borderRadius: 50 }} /></Text>_____

            </Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
                    The sponsors who give their valuable amount to fulfill our mission
            </Text>

            </View>

            < View >
                       
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={require("../../Images/l1.jpg")}
                            style={{ width: 300, height: 150 ,resizeMode:'contain'}}
                            
                        />
                       
                        </View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={require("../../Images/l2.jpg")}
                            style={{ width: 300, height: 150,resizeMode:'contain' }}
                            
                        />
                       
                        </View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={require("../../Images/l3.jpg")}
                            style={{ width: 300, height: 150 ,resizeMode:'contain'}}
                            
                        />
                       
                        </View>
                    </View>

                    <Footer/>

            {/* <View style={{flex:1}}>
           <Button title={'Show'} onPress={()=>{navigation.openDrawer();}}></Button>
           </View> */}

</ScrollView>
        </ View>

    )

}

export default Header