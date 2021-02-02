import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native'
import database from '@react-native-firebase/database'
import { GlobalContext } from '../../config/store/Context';


const Donation = ({ navigation }) => {

    const [data, setdata] = useState([])
    // const {  Donation_User} = useContext(GlobalContext)
    // console.log("Fo",Donation_User)

    const {User} = useContext(GlobalContext)
    // console.log("User :",User[0].Email)

    useEffect(() => {
        database().ref('Get').once('value', (snapshot) => {

            const data11 = snapshot.toJSON()
            const value = Object.values(data11)

            setdata(Object.values(data11))
        })
    }, [])

    // console.log(data[1])



    return (


        <View style={{ flex: 1 ,flexDirection:'column'}}>
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
            <View style={{alignItems:'center',marginTop:20}}>
                    <Text style={{textAlign:'center',fontSize:20,color:'red',fontWeight:'bold'}}>
                    Register User For Requried Blood
                    </Text>
                </View>
            {data.map((v, i) => {
                return (
                   
                        <View  style={{marginLeft:10,marginRight:10}} key={i}>
                            <View style={{marginTop:'8%',padding:'2%',borderWidth:2,borderColor:'#C2C1C0',backgroundColor:'#F2EDE4',borderRadius:20}} >
                                <View style={{flexDirection:'row'}}>

                            <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'}} style={{ width: 50, height: 70 ,borderRadius:30}} />
                            <Text style={{fontSize:30,marginLeft:'2%',color:'black'}} >{v.Name}</Text>
                           
                           </View>
                            <View style={{borderWidth:2,borderRadius:10,marginTop:'3%',marginLeft:'2%',width: '95%',borderColor:'#C2C1C0'}}>
                            <Image source={{uri:"https://www.google.com/maps/d/thumbnail?mid=18PkfYSNyzSRgnSdq5lqQ5TeBLjQ"}} style={{ height: 150 }}/>
                            </View>
                            <View>
                            <View style={{padding:'1%',marginLeft:'5%'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Blood Group : {v.Blood_Group}
                                </Text>
                            </View>
                            <View style={{padding:'1%',marginLeft:'5%'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Mobile No : {v.Contact}
                                </Text>
                            </View>
                            <View style={{padding:'1%',marginLeft:'5%'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Address : {v.Address}
                                </Text>
                            </View>

                            {User[0].Email == v.Email
                                ?
                            <TouchableOpacity style={styles.tchAble} >
                        <Text style={{ color: 'white', fontSize: 20 }}>Yes, I Requried Blood </Text>
                    </TouchableOpacity>
                    :
                   false
            }
                                <Text >
                                </Text>
                          
                              
                            </View>
                            </View>
                            </View>
                       
                   
                )
            })}
            <View>
                <Text></Text>
                </View>
                <View>
                <Text></Text>
                </View>
            </ScrollView>
        </View>
    )



}


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
        textAlign: 'center',
        marginBottom: 20,
        borderRadius: 50,
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: 'gray'

    },
    tchAble: {
        backgroundColor: '#F9146E',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 30,
        marginLeft:'5%',
        marginTop:20


    },
    IconView: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap'

    }
})

export default Donation