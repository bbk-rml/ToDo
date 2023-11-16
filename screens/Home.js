import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IonIcons from '@expo/vector-icons/Ionicons'

import { Data } from './Data'
import { Profile } from './Profile'


const Tab = createBottomTabNavigator()

export function Home(props){

    const DataOptins={
        tabBarLabel1:"Home",
        tabBarIcon:({ color }) => <IonIcons name="home" color={color} size={20} />
    }

    const ProfileOptins={
        tabBarLabel1:"Profile",
        tabBarIcon:({ color }) => <IonIcons name="person" color={color} size={20} />
    }
    
    return(
        <Tab.Navigator initialRouteName="Data">
           <Tab.Screen name="ToDo" component={Data}  options={DataOptins}/>
           <Tab.Screen name="Profile" component={Profile} options={ProfileOptins}/>
        </Tab.Navigator>
       
        
    )

}