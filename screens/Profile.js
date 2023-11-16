import { View, Text, StyleSheet, Pressable} from 'react-native'
import { useContext, useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'


import { AuthContext } from '../contexts/AuthContext'



export function Profile (props){

    const [user,setUser] = useState()

    const Auth = useContext(AuthContext)
    

    useEffect( ( ) => {
        if (Auth.currentUser){
            setUser ( Auth.currentUser )
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
        console.log(user)
        return(
            <View style = { styles.container}>
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