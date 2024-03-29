import { View, Text, StyleSheet, Pressable} from 'react-native'
import { useContext, useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { doc, getDoc} from "firebase/firestore"
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

import { ProfileImage } from '../components/ProfileImage'


import { AuthContext } from '../contexts/AuthContext'
import { DbContext } from '../contexts/DdContext'



export function Profile (props){
    const defaultProfile = {
        name:"", 
        profileImg:"",
    }
    const [user,setUser] = useState()
    const [profile, setProfile] = useState( defaultProfile )

    const Auth = useContext(AuthContext)
    const db = useContext (DbContext)
    
    const getUserData = async () => {
        const docRef = doc( db, "things", `${user.uid}`)
        const docSnap = await getDoc( docRef)
        if( docSnap.exists){
            setProfile ( docSnap.data())
        }

    }
    useEffect ( () => {
        if (user) {
            getUserData ()
        }
    }, [user] )

    useEffect( ( ) => {
        if (Auth.currentUser){
            setUser ( Auth.currentUser )
        }
        else {
            setUser( null )
        }
    }, [Auth])

    if( !user){
        return (
            <View style = { styles.container}>
                <Text> Getting user Data... </Text>
            </View>
        )
    }
    else {
        return(
            <View style = { styles.container}>
            
                <ProfileImage file={ Profile.profileImg } uid={user.uid} />
                <Text>Hello { user.email}</Text>
                <Pressable 
                style = {styles.button} 
                onPress={ () => {
                    signOut(Auth) .then(
                        //the user is sign out
                    )

                  }
                }>
                    <Text style = {styles.button.text}>Sign Out</Text>
                </Pressable>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },
    button: {
        marginVertical: 15,
        padding:8,
        backgroundColor: "#333333",
        borderRadius:6,
        text: {
            color: "white",
            textAlign: "center",
        }
    }
})