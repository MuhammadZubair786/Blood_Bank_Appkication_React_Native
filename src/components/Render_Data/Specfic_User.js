import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import database from '@react-native-firebase/database'



const Specfic_User = ({ route, navigation }) => {

    const { User_Type, Blood_Group } = route.params;

    console.log(Blood_Group)

    // const []
    const [data, setdata] = useState([])
    const [dataA, setdataA] = useState([])
    const [data_A, setdata_A] = useState([])
    const [dataAB, setdataAB] = useState([])


    // const [dataB,setdataB] = useState([])
    // const [data_B,setdata_B] = useState([])





    // console.log("Registration User and blood Group :  ", User_Type, Blood_Group)



    useEffect(() => {

        let User_Data = []
        if (User_Type == 'Donation') {
            if (Blood_Group == 'O') {
                console.log("hi", Blood_Group)
                database().ref('Get').once('value', (snapshot) => {

                    const data11 = snapshot.toJSON()

                    console.log(data11)

                    // if()


                    setdata(Object.values(data11))
                    // User_Data.push(Object.values(data11))


                })

            }
            else if (Blood_Group == 'A' || Blood_Group == 'A+') {
                let User_Data = []

                database()
                    .ref()
                    .child('Get')
                    .orderByChild('Blood_Group')
                    .equalTo('A+')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group A+ :", Object.values(data11))
                            // setdata(arr=>[...arr,Object.values(data11)])

                            setdata_A(Object.values(data11))

                        }


                    })



                database()
                    .ref()
                    .child('Get')
                    .orderByChild('Blood_Group')
                    .equalTo('A')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group A :", Object.values(data11))

                            setdataA(Object.values(data11))

                        }

                    })

                database()
                    .ref()
                    .child('Get')
                    .orderByChild('Blood_Group')
                    .equalTo('AB')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group AB :", Object.values(data11))

                            setdataAB(Object.values(data11))

                        }

                    })

            }

            else if (Blood_Group == 'B' || Blood_Group == 'B+') {


                database()
                    .ref()
                    .child('Get')
                    .orderByChild('Blood_Group')
                    .equalTo('B+')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group B+ :", Object.values(data11))
                            // setdata(arr=>[...arr,Object.values(data11)])

                            setdata_A(Object.values(data11))

                        }


                    })



                database()
                    .ref()
                    .child('Get')
                    .orderByChild('Blood_Group')
                    .equalTo('B')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group B :", Object.values(data11))

                            setdataA(Object.values(data11))

                        }

                    })

                database()
                    .ref()
                    .child('Get')
                    .orderByChild('Blood_Group')
                    .equalTo('AB')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group AB :", Object.values(data11))

                            setdataAB(Object.values(data11))

                        }

                    })

            }





        }

        if (User_Type == 'Get') {
            console.log("kdkGood")
            if (Blood_Group == 'O') {
                console.log("hi", Blood_Group)
                database().ref('Donation').once('value', (snapshot) => {

                    const data11 = snapshot.toJSON()

                    console.log(data11)

                    // if()


                    setdata(Object.values(data11))
                    // User_Data.push(Object.values(data11))


                })

            }
            else if (Blood_Group == 'A' || Blood_Group == 'A+') {
                let User_Data = []

                database()
                    .ref()
                    .child('Donation')
                    .orderByChild('Blood_Group')
                    .equalTo('A+')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group A+ :", Object.values(data11))
                            // setdata(arr=>[...arr,Object.values(data11)])

                            setdata_A(Object.values(data11))

                        }


                    })



                database()
                    .ref()
                    .child('Donation')
                    .orderByChild('Blood_Group')
                    .equalTo('A')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group A :", Object.values(data11))

                            setdataA(Object.values(data11))

                        }

                    })

                database()
                    .ref()
                    .child('Donation')
                    .orderByChild('Blood_Group')
                    .equalTo('AB')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group AB :", Object.values(data11))

                            setdataAB(Object.values(data11))

                        }

                    })

            }

            else if (Blood_Group == 'B' || Blood_Group == 'B+') {


                database()
                    .ref()
                    .child('Donation')
                    .orderByChild('Blood_Group')
                    .equalTo('B+')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group B+ :", Object.values(data11))
                            // setdata(arr=>[...arr,Object.values(data11)])

                            setdata_A(Object.values(data11))

                        }


                    })



                database()
                    .ref()
                    .child('Donation')
                    .orderByChild('Blood_Group')
                    .equalTo('B')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group B :", Object.values(data11))

                            setdataA(Object.values(data11))

                        }

                    })

                database()
                    .ref()
                    .child('Donation')
                    .orderByChild('Blood_Group')
                    .equalTo('AB')
                    .once('value')
                    .then(snapshot => {
                        const data11 = snapshot.toJSON()

                        if (data11 == null) {
                            return false
                        }
                        else {
                            const value = Object.values(data11)
                            console.log("Blood Group AB :", Object.values(data11))

                            setdataAB(Object.values(data11))

                        }

                    })

            }



        }
    }

        , [])

    // console.log(data_A)

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

                {User_Type == 'Donation' ?
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'red', fontWeight: 'bold' }}>
                            You Donate Blood That User
            </Text>
                    </View>
                    :
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'red', fontWeight: 'bold' }}>
                            You Recepit Blood That User
                        </Text>
                    </View>
                }

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'red', fontWeight: 'bold' }}>
                        User Blood Group : {Blood_Group}
                        </Text>
                </View>


                {data.map((v, i) => {
                    return (
                        <View style={{ marginLeft: 10, marginRight: 10 }} key={i}>
                            <View style={{ marginTop: '8%', padding: '2%', borderWidth: 2, borderColor: '#C2C1C0', backgroundColor: '#F2EDE4', borderRadius: 20 }} >
                                <View style={{ flexDirection: 'row' }}>

                                    <Image source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png' }} style={{ width: 50, height: 70, borderRadius: 30 }} />
                                    <Text style={{ fontSize: 30, marginLeft: '2%', color: 'black' }} >{v.Name}</Text>

                                </View>
                                <View style={{ borderWidth: 2, borderRadius: 10, marginTop: '3%', marginLeft: '2%', width: '95%', borderColor: '#C2C1C0' }}>
                                    <Image source={{ uri: "https://www.google.com/maps/d/thumbnail?mid=18PkfYSNyzSRgnSdq5lqQ5TeBLjQ" }} style={{ height: 150 }} />
                                </View>
                                <View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Blood Group : {v.Blood_Group}
                                        </Text>
                                    </View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile No : {v.Contact}
                                        </Text>
                                    </View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address : {v.Address}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
                }


                {dataA.map((v, i) => {
                    return (
                        <View style={{ marginLeft: 10, marginRight: 10 }} key={i}>
                            <View style={{ marginTop: '8%', padding: '2%', borderWidth: 2, borderColor: '#C2C1C0', backgroundColor: '#F2EDE4', borderRadius: 20 }} >
                                <View style={{ flexDirection: 'row' }}>

                                    <Image source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png' }} style={{ width: 50, height: 70, borderRadius: 30 }} />
                                    <Text style={{ fontSize: 30, marginLeft: '2%', color: 'black' }} >{v.Name}</Text>

                                </View>
                                <View style={{ borderWidth: 2, borderRadius: 10, marginTop: '3%', marginLeft: '2%', width: '95%', borderColor: '#C2C1C0' }}>
                                    <Image source={{ uri: "https://www.google.com/maps/d/thumbnail?mid=18PkfYSNyzSRgnSdq5lqQ5TeBLjQ" }} style={{ height: 150 }} />
                                </View>
                                <View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Blood Group : {v.Blood_Group}
                                        </Text>
                                    </View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile No : {v.Contact}
                                        </Text>
                                    </View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address : {v.Address}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
                }
                {data_A.map((v, i) => {
                    return (
                        <View style={{ marginLeft: 10, marginRight: 10 }} key={i}>
                            <View style={{ marginTop: '8%', padding: '2%', borderWidth: 2, borderColor: '#C2C1C0', backgroundColor: '#F2EDE4', borderRadius: 20 }} >
                                <View style={{ flexDirection: 'row' }}>

                                    <Image source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png' }} style={{ width: 50, height: 70, borderRadius: 30 }} />
                                    <Text style={{ fontSize: 30, marginLeft: '2%', color: 'black' }} >{v.Name}</Text>

                                </View>
                                <View style={{ borderWidth: 2, borderRadius: 10, marginTop: '3%', marginLeft: '2%', width: '95%', borderColor: '#C2C1C0' }}>
                                    <Image source={{ uri: "https://www.google.com/maps/d/thumbnail?mid=18PkfYSNyzSRgnSdq5lqQ5TeBLjQ" }} style={{ height: 150 }} />
                                </View>
                                <View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Blood Group : {v.Blood_Group}
                                        </Text>
                                    </View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile No : {v.Contact}
                                        </Text>
                                    </View>
                                    <View style={{ padding: '1%', marginLeft: '5%' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address : {v.Address}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
                }





                <Text>

                </Text>
            </ScrollView>
        </View>
    )
}

export default Specfic_User