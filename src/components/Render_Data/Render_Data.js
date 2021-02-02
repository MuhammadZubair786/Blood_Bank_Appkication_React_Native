import React, { useState, useEffect, useContext } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, Button ,StyleSheet} from 'react-native'
import database from '@react-native-firebase/database'
import { GlobalContext } from '../../config/store/Context';
import Footer from '../Home/Footer'



function Render_Data({ navigation }) {

    const [data, setdata] = useState([])
    const [Reg, setReg] = useState([])

    const { Donation_User } = useContext(GlobalContext)

    const {User} = useContext(GlobalContext)


    // console.log(User)


    useEffect(() => {
        database().ref('users').once('value', (snapshot) => {
            // setdata(snapshot.val())
            const data11 = snapshot.toJSON()
            data_key = Object.keys(snapshot.val())
            // console.log(data_key)
            // console.log(data11)
            // console.log("Object",Object.values(data11))
            const value = Object.values(data11)
            // if(data11[data_key])

            // const key_value = {
            //     Key : Object.keys(snapshot.val()),
            //     Value : Object.values(data11)
            // }

            setReg(Object.values(data11))


            // console.log("Email :", data11[data_key]['Email'])

        })
    }, [])

    const show_data = () => {
        {
            Reg.map((v, i) => {
                console.log(v.key)
                if (v.Blood_Group == ' ' || v.Blood_Group == '') {
                    return false
                }
                else {
                    // console.log(v.Register_User)
                    if (v.Register_User == 'Donation') {
                        const data = {
                            Name: v.Name,
                            Email: v.Email,
                            Password: v.Password,
                            Address: v.Address,
                            Blood_Group: v.Blood_Group,
                            City: v.City,
                            Contact: v.Contact,
                            Register_User: v.Register_User
                        }


                        let data_key;

                        database()
                            .ref()
                            .child('users')
                            .orderByChild('Email')
                            .equalTo(v.Email)
                            .once('value')
                            .then(snapshot => {
                                const data11 = snapshot.toJSON()

                                // console.log("User Data in HOME")


                                data_key = Object.keys(snapshot.val())
                                
                                database().ref(`Donation/`).child(`${data_key}`).set(data)
                                navigation.navigate('Dontaion')






                            })
                    }






                }


            })
        }

        // console.log(Reg)
        // console.log("Data :",data[0].Blood_Group)
        // console.log("Data : ",data[1].Blood_Group)
    }

    const check_user = () =>{
        // console.log("Ji")
        // console.log(User[0].Email)
        
        database()
        .ref()
        .child('users')
        .orderByChild('Email')
        .equalTo(User[0].Email)
        .once('value')
        .then(snapshot => {
            const data11 = snapshot.toJSON()

            console.log("DATA",data11)
            data_key = Object.keys(snapshot.val())
            console.log(data11[data_key].Register_User)

            navigation.navigate('Specfic_User',{
                User_Type  : data11[data_key].Register_User ,
                Blood_Group : data11[data_key].Blood_Group
            })




            // data_key = Object.keys(snapshot.val())
        })

    }



    const search_data = () =>{

        navigation.navigate('Search')

    }
    const get_data = () => {
        {
            Reg.map((v, i) => {
                console.log(v.key)
                if (v.Blood_Group == ' ' || v.Blood_Group == '') {
                    return false
                }
                else {
                    // console.log(v.Register_User)
                    if (v.Register_User == 'Get') {
                        const data = {
                            Name: v.Name,
                            Email: v.Email,
                            Password: v.Password,
                            Address: v.Address,
                            Blood_Group: v.Blood_Group,
                            City: v.City,
                            Contact: v.Contact,
                            Register_User: v.Register_User
                        }


                        let data_key;

                        database()
                            .ref()
                            .child('users')
                            .orderByChild('Email')
                            .equalTo(v.Email)
                            .once('value')
                            .then(snapshot => {
                                const data11 = snapshot.toJSON()

                                console.log("User Data in HOME")


                                data_key = Object.keys(snapshot.val())
                                console.log("Key : ", data_key)

                                console.log("User Donation :", data)
                                // database().ref(`Donation`).push(data)
                                database().ref(`Get/`).child(`${data_key}`).set(data)
                                navigation.navigate('Get_Data')






                            })
                    }






                    // console.log(v.Register_User)
                    // if(v.Register_User == 'Donation'){
                    //     const data = {
                    //        Name : v.Name,
                    //        Email : v.Email,
                    //        Password : v.Password,
                    //        Address: v.Address,
                    //        Blood_Group: v.Blood_Group,
                    //        City: v.City,
                    //        Contact:v.Contact,
                    //        Register_User:v.Register_User



                    //     }
                    //     // console.log("User Donation :",data)
                    //     Donation_User(data)
                    //     navigation.navigate('Dontaion')
                    //     // database().ref('Donation/').push(data)

                    // }

                    // if(v.Register_User == 'get'){
                    //     const data = {
                    //        Name : v.Name,
                    //        Email : v.Email,
                    //        Password : v.Password,
                    //        Address: v.Address,
                    //        Blood_Group: v.Blood_Group,
                    //        City: v.City,
                    //        Contact:v.Contact,
                    //        Register_User:v.Register_User



                    //     }
                    //     console.log("User Get Blood :",data)
                    //     database().ref('Get_Blood/').push(data)

                    // }


                    // setdata(Reg[i])
                    // {data.map((v,i)=>{
                    //     return(
                    //         <View>
                    //             <Text>{v.Name}</Text>
                    //         </View>
                    //     )

                    // })

                    // }
                }


            })
        }

        // console.log(Reg)
        // console.log("Data :",data[0].Blood_Group)
        // console.log("Data : ",data[1].Blood_Group)
    }







    return (
        <View>
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
                <View>

                <TouchableOpacity style={styles.tchAble} onPress={()=>{check_user()}}>
                        <Text style={{ color: 'white', fontSize: 20 }}>According To User Requriment</Text>
                    </TouchableOpacity>

                
                    <TouchableOpacity style={styles.tchAble2} onPress={()=>{search_data()}}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Serach Specfic Data</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tchAble2} onPress={()=>{show_data()}}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Register User For Blood Dontaion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tchAble2} onPress={()=>{get_data()}}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Register User For Requried Blood</Text>
                    </TouchableOpacity>



                   

                    {/* {console.log(data)} */}



                    {/* {Reg.map((v, i) => {
                        return (
                            <Text key={i}>
                                {v.Name}
                            </Text>)
                    })} */}
                </View >
                <View style={{marginTop:'20%'}}>
                <Footer />
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
        marginTop:60


    },
    tchAble2: {
        backgroundColor: '#F9146E',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 30,
        marginLeft:'5%',
        marginTop:30


    },
    IconView: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap'

    }
})

export default Render_Data