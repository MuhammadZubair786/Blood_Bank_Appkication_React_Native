import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native'



function Help() {
    return (

        <View style={{ marginTop: 10, flex: 1 }}>
            <ScrollView>

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        WE ARE HELPING PEOPLE FROM 40 YEARS
            </Text>
                    <Text style={{ fontSize: 18 }}>
                        You can give blood at any of our blood donation venues all over the world.
                        We have total sixty thousands donor centers and visit thousands of other
                        venues on various occasions.
            </Text>
                </View>

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity style={{ backgroundColor: '#F9277A', marginTop: 20, width: '80%', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>REQUEST APPOINTMENT</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        DONATION PROCESS

            </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -10, color: '#F9277A' }}>
                        _____<Text style={{ borderWidth: 1, borderColor: '#F9277A', borderRadius: 50 }}><Image source={require("../../Images/bld.png")} style={{ width: 100, height: 60, resizeMode: 'contain', borderWidth: 1, borderColor: '#F9277A', borderRadius: 50 }} /></Text>_____

            </Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
                        The donation process from the time you arrive center until the time you leave
            </Text>

            </View>


                    < View >
                        <Text  style={{ fontSize: 20,marginTop: 20 ,fontWeight:'bold'}}>1. REGISTRATION</Text>
                        <Text style={{marginLeft:25,color:'#F9277A',fontWeight:'bold'}}>--------------------------</Text>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={{ uri: 'https://templates.bwlthemes.com/blood_donation/images/process_1.jpg' }}
                            style={{ width: 300, height: 150 }}
                            
                        />
                        <Text style={{textAlign:'center',justifyContent:'center',marginTop:10 }}>
                        You need to complete a very simple registration form. Which contains 
                        all required contact information to enter in the donation process.
                        </Text>
                        </View>
                    </View>


                    < View >
                        <Text  style={{ fontSize: 20,marginTop: 20 ,fontWeight:'bold'}}>2. SCREENING</Text>
                        <Text style={{marginLeft:25,color:'#F9277A',fontWeight:'bold'}}>--------------------------</Text>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFYWNXdkYBqCZhTvZq6X5IuzjHBuIqW04JQ&usqp=CAU' }}
                            style={{ width: 300, height: 150 }}
                            
                        />
                        <Text style={{textAlign:'center',justifyContent:'center',marginTop:10 }}>
                        A drop of blood from your finger will take for simple test to ensure that your blood
                         iron levels are proper enough for donation process.
                        </Text>
                        </View>
                    </View>


                    < View >
                        <Text  style={{ fontSize: 20,marginTop: 20 ,fontWeight:'bold'}}>3. DONATION</Text>
                        <Text style={{marginLeft:25,color:'#F9277A',fontWeight:'bold'}}>--------------------------</Text>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftJU394SNrQD6_yGYK-WTwMZqFAbRtjWwGw&usqp=CAU' }}
                            style={{ width: 300, height: 150 }}
                            
                        />
                        <Text style={{textAlign:'center',justifyContent:'center',marginTop:10 }}>
                        After ensuring and passed screening test successfully you will be directed to a donor bed for donation.
                         It will take only 6-10 minutes.
                        </Text>
                        </View>
                    </View>


                    < View >
                        <Text  style={{ fontSize: 20,marginTop: 20 ,fontWeight:'bold'}}>4. REFRESHMENT</Text>
                        <Text style={{marginLeft:25,color:'#F9277A',fontWeight:'bold'}}>--------------------------</Text>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image source={{ uri: 'https://templates.bwlthemes.com/blood_donation/images/process_4.jpg' }}
                            style={{ width: 300, height: 150 }}
                            
                        />
                        <Text style={{textAlign:'center',justifyContent:'center',marginTop:10 }}>
                        You can also stay in sitting room until you feel strong enough to leave our center.
                         You will receive awesome drink from us in donation zone.
                        </Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    DONATION CAMPAIGNS

            </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: -10, color: '#F9277A' }}>
                        _____<Text style={{ borderWidth: 1, borderColor: '#F9277A', borderRadius: 50 }}><Image source={require("../../Images/bld.png")} style={{ width: 100, height: 60, resizeMode: 'contain', borderWidth: 1, borderColor: '#F9277A', borderRadius: 50 }} /></Text>_____

            </Text>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
                    Campaigns to encourage new donors to join and existing to continue to give blood
            </Text>

        

            </View>

            <View style={{flex:1,flexDirection:'row',marginTop:40}}>
                <View style={{flex:1}}>
                <Image source={{ uri: 'https://templates.bwlthemes.com/blood_donation/images/event_1.jpg' }}
                            style={{ width: '100%', height: '100%' }}
                            
                        />
                </View>
                <View style={{flex:1}}>
                <Text style={{ fontSize: 15,marginTop: 0,fontWeight:'bold'}}>WORLD BLOOD DONORS DAY</Text>
                <Text style={{color:'#F9277A',fontWeight:'bold'}}>-------------------------------------</Text>
                <Text  style={{ fontSize: 15,marginTop: 10}}>Every year, on 14 June, countries around the world celebrate World Blood 
                    Donor Day.</Text>
                    
                    </View>
            </View>


            <View style={{flex:1,flexDirection:'row',marginTop:40,alignItems:'center'}}>
               
                <View style={{flex:1}}>
                <Text style={{ fontSize: 15,marginTop: 0,fontWeight:'bold'}}>O- BLOOD DONORS NEEDED</Text>
                <Text style={{color:'#F9277A',fontWeight:'bold'}}>-------------------------------------</Text>
               
                <Text  style={{ fontSize: 15,marginTop: 10}}>Every year, on 14 June, countries around the world celebrate World Blood 
                    Donor Day. </Text>
                    
                    </View>
                    <View style={{flex:1}}>
                <Image source={{ uri: 'https://templates.bwlthemes.com/blood_donation/images/event_2.jpg' }}
                            style={{ width: '100%', height: '100%' }}
                            
                        />
                </View>
            </View>
            

               




            </ScrollView>

        </View>

    )

}

export default Help