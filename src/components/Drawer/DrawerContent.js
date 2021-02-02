import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalContext } from '../../config/store/Context';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'

export function DrawerContent(props) {

  const { User } = useContext(GlobalContext)
  

  // console.log("Header Screen :",User,User[0].Blood_Group)

  const [blood_group, setblood] = useState()


  // console.log(blood_group)

  const sig_out=()=>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  props.navigation.navigate('Sign_Up')

  
  }


  useEffect(() => {
    setblood(User[0].Blood_Group)
  }, [User])

  const paperTheme = useTheme();

  const [isDarkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme)
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>

          <View>
            <ImageBackground source={{ uri: 'https://wallpaper-house.com/data/out/12/wallpaper2you_492382.jpg' }} style={{ width: '100%', height: 180,marginTop:'-2%' }}>
              <Image
                source={
                require('../../Images/i11.png')
                }
                style={{ width: 150, height: 90, resizeMode: 'contain', marginTop:'12%'}} />
                 <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>

                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                  <Title style={styles.title}>{User[0].Name}</Title>
                  <Caption style={styles.caption}>{User[0].Email}</Caption>
                </View>
              </View>

            </View>

          </View>

            </ImageBackground>
          </View>

         
          <Drawer.Section style={styles.drawerSection} >
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color='brown'
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate('Main Page') }}
            />

            {blood_group == undefined || blood_group == ' ' ?
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="account-outline"
                    color='brown'
                    size={size}

                  />
                )}
                style={styles.Text}

                onPress={() => { props.navigation.navigate('Register User') }}
                label='Register User '
              />

              :
              <DrawerItem
              icon={({ color, size }) => (
                <Icon2
                  name="database"
                  color='brown'
                  size={20}



                />
              )}

                onPress={() => { props.navigation.navigate('Render Data') }}
                label='User Data'

              />
            }


            <DrawerItem
              label='Contact'
              icon={({ color, size }) => (
                <Icon2
                  name="address-book"
                  color='brown'
                  size={20}



                />
              )}

            />
          {/* <FontAwesome5 name={'comments'} size={100}/> */}
          
            
            <DrawerItem
            
              label='Teams'
              
              icon={({ color, size }) => (
                <Icon2
                  name="users"
                  color='brown'
                  size={20}
                



                />
              )}
            />
          
            <DrawerItem
              label='Profile'
              icon={({ color, size }) => (
                <Icon2
                  name="user"
                  color='brown'
                  size={20}
                



                />
              )}
              onPress={() => { props.navigation.navigate('Profile') }}
            />

<DrawerItem
          label='Sign Out'

          icon={({ color, size }) => (
            <Icon2
              name="sign-out-alt"
              color='brown'
              size={20}
            



            />
          )}
          onPress= {()=>{sig_out()}}
        />

          </Drawer.Section>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => { toggleTheme() }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
      
      </Drawer.Section>

    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 10,
  },
  Text: {
    fontWeight: 'bold',
    color: 'red'

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'white',
    marginTop:'-15%',
    marginLeft:'10%'
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    marginLeft:'10%'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,

  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});