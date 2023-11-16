import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from '@expo/vector-icons/Ionicons'

import { AuthContext } from '../contexts/AuthContext'
import { useContext, useState, useEffect } from 'react'

import { Data } from './Data'
import { Profile } from './Profile'


const Tab = createBottomTabNavigator()

export function Home(props){

    const [email, setEmail] = useState()

    const Auth = useContext(AuthContext)

    useEffect( () => {
        if(Auth.currentUser){
            setEmail(Auth.currentUser.email)
        }
    })

    const DataOptins = {
        tabBarLabel1:"Home",
        tabBarIcon:({ color }) => <IonIcons name="home" color={color} size={20} />,
        title: "Home"
    }

    const ProfileOptins = {
        tabBarLabel1: "Profile",
        tabBarIcon:({ color }) => <IonIcons name="person" color={color} size={20} />,
        title: email 
    }
    
    return(
        <Tab.Navigator initialRouteName="Data">
           <Tab.Screen name="Data" component={Data}  options={DataOptins}/>
           <Tab.Screen name= "Profile" component={Profile} options={ProfileOptins}/>
        </Tab.Navigator>    
    )

}