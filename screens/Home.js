import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from '@expo/vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

import { AuthContext } from '../contexts/AuthContext'
import { useContext, useState, useEffect } from 'react'

import { Data } from './Data'
import { Profile } from './Profile'


const Tab = createBottomTabNavigator()

export function Home(props){

    const [email, setEmail] = useState()

    const Auth = useContext(AuthContext)

    const navigation = useNavigation()

    useEffect( () => {
        if(Auth.currentUser){
            setEmail(Auth.currentUser.email)
        }
        else{
            navigation.reset({ index: 0, routes: [ {name:"Sign in"} ]})
        }
    })

    const DataOptins = {
        tabBarLabel:"Home",
        tabBarIcon:({ color }) => <IonIcons name="home" color={color} size={20} />,
        title: "Home"
    }

    const ProfileOptins = {
        tabBarLabel: "Profile",
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