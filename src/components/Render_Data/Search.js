import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import database from '@react-native-firebase/database'
import RNPickerSelect from 'react-native-picker-select';

const Search = ({ route, navigation }) => {

    const [Blood_Group, setBlood_Group] = useState()
    const [Register_User, setRegister_User] = useState()
    const [data, setdata] = useState([])
    const [dataA, setdataA] = useState([])
    const [data_A, setdata_A] = useState([])
    const [dataB, setdataB] = useState([])
    const [data_B, setdata_B] = useState([])
    const [dataAB, setdataAB] = useState([])

    const search_data = () => {


        if (Blood_Group == '' || Blood_Group == undefined || Blood_Group == null) {
            alert("Please Select Blood Group")
        }

        else if (Register_User == '' || Register_User == undefined || Register_User == null) {
            alert("Please Select For You Register")
        }
        else {

            // setdata([])
            // setdataA([])
            // setdata_A([])

            console.log(Blood_Group, Register_User)
            if (Register_User == 'Donation') {
                if (Blood_Group == 'O') {
                    console.log("hi", Blood_Group)
                    database().ref('Get').once('value', (snapshot) => {

                        const data11 = snapshot.toJSON()
                        setdataB([])
                        setdata_B([])
                        setdataA([])
                        setdata_A([])

                        console.log(data11)

                        // if()


                        setdata(Object.values(data11))
                        // User_Data.push(Object.values(data11))


                    })

                }
                else if (Blood_Group == 'A' || Blood_Group == 'A+') {
                    // let User_Data = []



                    database()
                        .ref()
                        .child('Get')
                        .orderByChild('Blood_Group')
                        .equalTo('A+')
                        .once('value')
                        .then(snapshot => {
                            const data11 = snapshot.toJSON()
                            setdata_B([])
                            setdata([])


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
                            setdataB([])
                            setdata([])



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
                        // setdataAB([])



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
                            setdata_A([])
                            setdata([])


                            if (data11 == null) {
                                return false
                            }
                            else {
                               

                                const value = Object.values(data11)
                                console.log("Blood Group B+ :", Object.values(data11))
                                // setdata(arr=>[...arr,Object.values(data11)])

                                setdata_B(Object.values(data11))

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
                            setdataA([])
                            setdata([])



                            if (data11 == null) {
                                return false
                            }
                            else {
                             
                                const value = Object.values(data11)
                                console.log("Blood Group B :", Object.values(data11))

                                setdata_B(Object.values(data11))

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
            if (Register_User == 'Get') {
                if (Blood_Group == 'O') {
                    console.log("hi", Blood_Group)
                    database().ref('Donation').once('value', (snapshot) => {

                        const data11 = snapshot.toJSON()
                        setdataB([])
                        setdata_B([])
                        setdataA([])
                        setdata_A([])

                        console.log(data11)

                        // if()


                        setdata(Object.values(data11))
                        // User_Data.push(Object.values(data11))


                    })

                }
                else if (Blood_Group == 'A' || Blood_Group == 'A+') {
                    // let User_Data = []



                    database()
                        .ref()
                        .child('Donation')
                        .orderByChild('Blood_Group')
                        .equalTo('A+')
                        .once('value')
                        .then(snapshot => {
                            const data11 = snapshot.toJSON()
                            setdata_B([])
                            setdata([])


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
                            setdataB([])
                            setdata([])


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
                            setdata_A([])
                            setdata([])


                            if (data11 == null) {
                                return false
                            }
                            else {
                               

                                const value = Object.values(data11)
                                console.log("Blood Group B+ :", Object.values(data11))
                                // setdata(arr=>[...arr,Object.values(data11)])

                                setdata_B(Object.values(data11))

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
                            setdataA([])
                            setdata([])



                            if (data11 == null) {
                                return false
                            }
                            else {
                             
                                const value = Object.values(data11)
                                console.log("Blood Group B :", Object.values(data11))

                                setdata_B(Object.values(data11))

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
                    <View style={styles.body} >
                        <View>
                            <Text style={{ marginTop: 10, justifyContent: 'center', textAlign: 'center', color: 'black', fontSize: 30, marginBottom: 20, fontWeight: 'bold' }}>Register User</Text>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>
                                Select Blood Group
               </Text>
                        </View>
                        <View style={{ borderColor: 'gray', width: '90%', fontSize: 10, height: 50, borderWidth: 2, borderRadius: 50 }}>


                            <RNPickerSelect

                                selectedValue={Blood_Group}
                                onValueChange={(value) =>
                                    setBlood_Group(value)

                                }
                                items={[
                                    { label: "O", value: "O" },
                                    { label: "A", value: "A+" },
                                    { label: "B+", value: "B+" },
                                    { label: "A-", value: "A-" },
                                    { label: "B", value: "B-" },
                                    { label: "AB", value: "AB" },
                                ]}
                            />
                            <Text style={{ marginTop: -40, fontSize: 20, marginLeft: 20 }}>{Blood_Group}</Text>
                        </View>
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>
                                Select Register
                            </Text>
                        </View>
                        <View style={{ borderColor: 'gray', width: '90%', fontSize: 10, height: 50, borderWidth: 2, borderRadius: 50 }}>
                            <RNPickerSelect

                                selectedValue={Register_User}
                                onValueChange={(value) =>
                                    setRegister_User(value)

                                }
                                items={[
                                    { label: "Donation", value: "Donation" },
                                    { label: "Get", value: "Get" },

                                ]}
                            />
                            <Text style={{ marginTop: -40, fontSize: 20, marginLeft: 20 }}>{Register_User}</Text>

                        </View>

                        <TouchableOpacity style={styles.tchAble2} onPress={() => { search_data() }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Search Data</Text>
                        </TouchableOpacity>

                    </View>
                    {
                        Register_User == 'Donation' 
                        ?
                        <View>
                            <Text style={{ marginTop: 10, justifyContent: 'center', textAlign: 'center', color: 'black', fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Register User For Get Blood</Text>
                        </View>

                        :
                        <View>
                            <Text style={{ marginTop: 10, justifyContent: 'center', textAlign: 'center', color: 'black', fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>Register User For Dontation Blood</Text>
                        </View>

                    }

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


                    {dataB.map((v, i) => {
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
                    {data_B.map((v, i) => {
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
    tchAble2: {
        backgroundColor: '#F9146E',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 30,
        marginLeft: '5%',
        marginTop: 30


    },

})

export default Search