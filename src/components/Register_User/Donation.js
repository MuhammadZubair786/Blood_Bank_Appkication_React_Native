import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Image, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database'
import { GlobalContext } from '../../config/store/Context';
import RNPickerSelect from 'react-native-picker-select';




const Sig_Up = ({navigation}) => {

  const selectedItem = {
    title: 'Selected item title',
    description: 'Secondary long descriptive text ...',
  };

  const { User } = useContext(GlobalContext)
  const { addCart } = useContext(GlobalContext)
  // console.log("Donation User :",User[0].Name)


  const [blood_Group, setblood_Group] = useState()

  const [Name, setName] = useState(User[0].Name)
  const [Register_User, setRegister_User] = useState()
  const [Contact, setContact] = useState()
  const [Address, setAddress] = useState()
  const [city, setcity] = useState()









  const sig_Up = () => {






    if (Name == '' || Name == undefined) {
      alert("Please Enter Your Name")
    }

    else if (blood_Group == '' || blood_Group == undefined || blood_Group == null) {
      alert("Please Select Blood Group")
    }

    else if (Contact == '' || Contact == undefined) {
      alert("Please Enter Contact Number")
    }

    else if (city == '' || city == undefined || city == null) {
      alert("Please Select City")
    }

    else if (Address == '' || Address == undefined) {
      alert("Please Enter Your Address")
    }
    else if (Register_User == '' || Register_User == undefined || Register_User == null) {
      alert("Please Select For You Register")
    }

    else {
      // console.log("Data :",User,Name,Contact,city,Address,blood_Group,Register_User)
      console.log(User[0].Key)
      const key = User[0].Key

      const data = {
        Name: Name,
        Email: User[0].Email,
        Password: User[0].Password,
        Contact: Contact,
        City: city,
        Address: Address,
        Blood_Group: blood_Group,
        Register_User: Register_User
      }

      console.log("User Full Data :", data)

      database().ref(`users/${key}`).set(data)

      

      addCart(data)
      setName('')
      setblood_Group('')
      setcity('')
      setAddress('')
      setContact('')
      setRegister_User('')
      alert("Successfully Data Register")


    }




  }




  return (
    <>

      <View style={styles.Main}>


        <View style={styles.body} >

          <Text style={{ marginTop: 10, justifyContent: 'center', textAlign: 'center', color: 'black', fontSize: 30, marginBottom: 20, fontWeight: 'bold' }}>Register User</Text>

          <TextInput style={styles.textinp} placeholder='Enter Your Name' value={Name} onChangeText={(e) => setName(e)} />


          <View style={{ borderColor: 'gray', width: '90%', fontSize: 10, height: 50, borderWidth: 2, borderRadius: 50 }}>

            {/* <Picker
              selectedValue={blood_Group}
              style={{ height: 50, width: "100%", color: 'black',fontSize:30,fontWeight:'bold' ,textAlign:'center'}}
              onValueChange={(itemValue, itemIndex) =>
                setblood_Group(itemValue)
              }>
              <Picker.Item label="Blood Group" value="null" />
              <Picker.Item label="O" value="O" />
              <Picker.Item label="A" value="A" />
              <Picker.Item label="B" value="B" />
              <Picker.Item label="AB" value="AB" />
            
          
            </Picker> */}
            <RNPickerSelect
            
              selectedValue={blood_Group}
              onValueChange={(value) =>
                setblood_Group(value)

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
            <Text style={{ marginTop: -40, fontSize: 20, marginLeft: 20 }}>{blood_Group}</Text>
          </View>


          <TextInput style={styles.textinp2} placeholder='Enter Your Contact' value={Contact} onChangeText={(e) => setContact(e)} />

          <View style={{ borderColor: 'gray', width: '90%', fontSize: 30, borderWidth: 2, borderRadius: 50, height: 50 }}>
            {/* <Picker
              selectedValue={city}
              style={{ height: 50, width: "100%", color: 'black',fontSize:30,fontWeight:'bold' ,textAlign:'center'}}
              onValueChange={(itemValue, itemIndex) =>
                setcity(itemValue)
              }>
              <Picker.Item label="Select City" value="null" />
              <Picker.Item label="Islamabad" value="Islamabad" />
              <Picker.Item label="Karachi" value="Karachi" />
              <Picker.Item label="Hyderabad" value="Hyderabad" />
              <Picker.Item label="Lahore" value="Lahore" />
              <Picker.Item label="Sargodha" value="Sargodha" />

            
          
            </Picker> */}

            <RNPickerSelect
             
              selectedValue={city}
              onValueChange={(value) =>
                setcity(value)

              }
              items={[
                { label: "Islamabad", value: "Islamabad" },
                { label: "Karachi", value: "Karachi" },
                { label: "Hyderabad", value: "Hyderabad" },
                { label: "Lahore", value: "Lahore" },
                { label: "Sargodha", value: "Sargodha" },

              ]}
            />
            <Text style={{ marginTop: -40, fontSize: 20, marginLeft: 20 }}>{city}</Text>

          </View>



          <TextInput style={styles.textinp2} placeholder='Enter Your Address' value={Address} onChangeText={(e) => setAddress(e)} />

          <View style={{ borderColor: 'gray', width: '90%', fontSize: 30, borderWidth: 2, borderRadius: 50,height:50 }}>
            {/* <Picker
              selectedValue={Register_User}
              style={{ height: 50, width: "100%", color: 'black',fontSize:30,fontWeight:'bold' ,textAlign:'center'}}
              onValueChange={(itemValue, itemIndex) =>
                setRegister_User(itemValue)
              }>
              <Picker.Item label="Register As User" value="null" />
              <Picker.Item label="Donation" value="Donation" />
              <Picker.Item label="Get " value="Get" />
            
            
          
            </Picker> */}

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

          <TouchableOpacity style={styles.tchAble} >
            <Text style={{ color: 'white', fontSize: 20 }} onPress={() => { sig_Up() }}>Register Data</Text>
          </TouchableOpacity>



          < View style={styles.IconView}>


          </View>

        </View>

      </View>








    </>
  );
};

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
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: 'gray'

  },
  textinp2: {
    marginTop: 15,
    width: '90%',
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: 'gray'

  },
  tchAble: {
    backgroundColor: '#F9146E',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop: 15


  },
  IconView: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap'

  }
})


export default Sig_Up;
