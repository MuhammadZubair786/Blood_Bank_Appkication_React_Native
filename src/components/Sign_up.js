import React, { useState, useContext } from 'react';
import { SafeAreaView, Picker, StyleSheet, Image, ScrollView, View, Text, StatusBar, TextInput, TouchableOpacity, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import database from '@react-native-firebase/database'
import { GlobalContext } from '../config/store/Context';
import RNPickerSelect from 'react-native-picker-select';


GoogleSignin.configure({
  webClientId: '866510131905-svimc8m9dj9g2ehabcm67bo3js4d5enf.apps.googleusercontent.com',
});


const Sig_Up = (props) => {

  const { User } = useContext(GlobalContext)


  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()


  


  onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken)

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }





  const sig_Up = () => {


    // get Specfic Value 
    //   const data = 'z@gmail.com';
    // database()
    // .ref()
    // .child('users')
    // .orderByChild('Email')
    // .equalTo(data)
    // .once('value')
    // .then(snapShot => {
    //   let matchingProducts = [];
    //   snapShot.forEach(child => {
    //     matchingProducts = [child.val(), ...matchingProducts];
    //   });
    //   console.log("matchingProducts",matchingProducts);
    //   return matchingProducts;
    // });

    // console.log(User)

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (Name == '' || Name == undefined) {
      alert("Please Enter Your Name")
    }

    else if (Email == '' || Email == undefined) {
      alert("Please Enter Email")

    }

    else if (!re.test(Email)) {
      alert("Please Enter Valid Email")

    }
    else if (Password == '' || Password == undefined) {
      alert("Please Enter Password")
    }
    else {

      





      // console.log("Email : & Password :", Email, Password)
      auth()
        .createUserWithEmailAndPassword(Email, Password, Name)
        .then((data) => {
          // console.log(data);



          let user = {
            Name: Name,
            Email: Email,
            Password: Password,
            Blood_Group: ' '
          }
          const send_data = database().ref("users/").push(user)
          alert("Successfully Sig Up")
          setEmail('')
          setName('')
          setPassword('')
          setTimeout(() => { props.navigation.navigate('Sign_In') }, 3000)



        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }

          console.error(error);

        });
    }


  }

  

  return (
    <>

      <View style={styles.Main}>


        <View style={styles.body} >

          <Text style={{ marginTop: 50, justifyContent: 'center', textAlign: 'center', color: 'black', fontSize: 30, marginBottom: 20, fontWeight: 'bold' }}>Sign Up</Text>

          <TextInput style={styles.textinp} placeholder='Enter Your Name' value={Name} onChangeText={(e) => setName(e)} />

          <TextInput style={styles.textinp} placeholder='Enter Your Email' value={Email} onChangeText={(e) => setEmail(e)} />
          <TextInput style={styles.textinp} placeholder='Enter Your Password' value={Password} onChangeText={(e) => setPassword(e)} />
        

         

         

          <TouchableOpacity style={styles.tchAble} >
            <Text style={{ color: 'white', fontSize: 20 }} onPress={() => { sig_Up() }}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 20, fontSize: 18, color: 'gray', fontFamily: 'custom-font' }}>Already Registered ?<Text style={{ textDecorationLine: 'underline' }} onPress={() => { props.navigation.navigate('Sign_In') }}> SignIn</Text></Text>
         
          
            
          < View style={styles.IconView}>
                        <TouchableOpacity >
                            <FontAwesome5 name={"facebook"} size={55} color={'blue'} />
                        </TouchableOpacity>
                        {/* <FontAwesome5 name={"google"} size={50} /> */}

                        <TouchableOpacity onPress={() => { onGoogleButtonPress() }}>
                            <Image style={{ width: 100, height: 65, resizeMode: 'contain', paddingTop: 20 }} source={require('../Images/g_logo.png')} />
                        </TouchableOpacity>
                    

          
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
  tchAble: {
    backgroundColor: '#F9146E',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 50,
    marginTop:15


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
