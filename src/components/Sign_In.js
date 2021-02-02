import React ,{useState,useContext}from 'react';
import { SafeAreaView, StyleSheet, Image, ScrollView, Alert,View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import g_logo from '../Images/g_logo.png'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import database from '@react-native-firebase/database'
import {GlobalContext} from '../config/store/Context';


const Sig_In = (props) => {

    // let {User} = useContext(store)
    const { addCart } = useContext(GlobalContext)
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()


    onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken)

        // Create a Google credential with the token
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }


   

    const sig_in = () => {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (Email == '' || Email == undefined) {
            alert("Please Enter Email")
      
          }
          else if (!re.test(Email)) {
            alert("Please Enter Valid Email")
      
          }
          else if (Password == '' || Password == undefined) {
            alert("Please Enter Password")
          }
          else {
      
        
        auth()
            .signInWithEmailAndPassword(Email, Password)
            .then(() => {

              
                
           
                alert("Successfully User  Sig In")
                setEmail('')
                setPassword('')
                setTimeout(() => {  props.navigation.navigate('Home',{
                    Email_data:Email,
                   
                  })}, 1000)

               
            })
            .catch(error => {

                if (error.code === 'auth/user-not-found') {
                    
                    Alert.alert("In_Correct Email", " There is no user record corresponding to this identifier");
                }
                if (error.code === 'auth/wrong-password') {
                    Alert.alert("In_Correct Password", " The password is invalid or the user does not have a password!");
                   
                }

                // if (error.code === 'auth/invalid-email') {
                //     console.log('That email address is invalid!');
                // }

                console.error(error);
            });
    }}


    return (
        <>

            <View style={styles.Main}>


                <View style={styles.body} >

                    <Text style={{ marginTop: 50, justifyContent: 'center', textAlign: 'center', color: 'black', fontSize: 30, marginBottom: 20, fontWeight: 'bold' }}>Sign In</Text>




                    <TextInput style={styles.textinp} placeholder='Enter Your Email' value={Email} onChangeText={(e) => setEmail(e)} />
                    <TextInput style={styles.textinp} placeholder='Enter Your Password' value={Password} onChangeText={(e) => setPassword(e)} />


                    <TouchableOpacity style={styles.tchAble} onPress={() => { sig_in() }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 20, fontSize: 18, color: 'gray', fontFamily: 'custom-font' }}>Donot an Account ? <Text style={{ textDecorationLine: 'underline' }} onPress={() => { props.navigation.navigate('Sign_Up') }}> SignUp</Text></Text>

                    < View style={styles.IconView}>
                        <TouchableOpacity >
                            <FontAwesome5 name={"facebook"} size={55} color={'blue'} />
                        </TouchableOpacity>
                        {/* <FontAwesome5 name={"google"} size={50} /> */}

                        <TouchableOpacity onPress={() => { onGoogleButtonPress() }}>
                            <Image style={{ width: 100, height: 65, resizeMode: 'contain', paddingTop: 20 }} source={require('../Images/g_logo.png')} />
                        </TouchableOpacity>
                    </ View>

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
        textAlign: 'center',
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


    },
    IconView: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap'

    }
})


export default Sig_In;
