import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign_up from '../components/Sign_up'
import Sign_In from '../components/Sign_In'
import Home from '../components/Home/Home'
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../components/Main/Main'
import Show from '../components/Main/Show'
import Header from '../components/Main/Header'
import Register from '../components/Register_User/Register_User'
import Render_Data from '../components/Render_Data/Render_Data'
import Donation from '../components/Render_Data/Donation_Render'
import Get_Data from '../components/Render_Data/Get_Data'
import Profile from '../components/User_Profile/Profile'
import Specfic_User from '../components/Render_Data/Specfic_User'
import Search from "../components/Render_Data/Search";

import {DrawerContent} from '../components/Drawer/DrawerContent'
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


function  DrawerScreen (){
  return (
    
      <Drawer.Navigator initialRouteName="Home" drawerContent={props =><DrawerContent {...props} />}>
        
        <Drawer.Screen name="Main Page" component={Main}  />

        <Drawer.Screen name="Register User" component={Register}  />

        <Drawer.Screen name="Render Data" component={Render_Data}  />

        <Drawer.Screen name="Dontaion" component={Donation}  />

        <Drawer.Screen name="Get_Data" component={Get_Data}  />

        <Drawer.Screen name="Profile" component={Profile}  />

        <Drawer.Screen name="Specfic_User" component={Specfic_User}  />

        <Drawer.Screen name="Search" component={Search}  />


   
        <Drawer.Screen name="Show" component={Show} />
      </Drawer.Navigator>
    
  );
}

export default function Navigation  (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign_Up" options={{
          title: 'Sign_Up',
          headerStyle: {
            backgroundColor: '#F9277A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  component={Sign_up} />

        <Stack.Screen name="Sign_In" 
        options={{
          title: 'Sign_In',
          headerStyle: {
            backgroundColor: '#F9277A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={Sign_In} />


<Stack.Screen name="Home" 
        options={{
         
          title: 'Home',
          headerStyle: {
            backgroundColor: '#F9277A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }

        }
        component={Home} />


<Stack.Screen name="DrawerScreen" 
       options={{ headerShown: false }}
        component={DrawerScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

