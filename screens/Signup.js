import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native'
import { useState, useEffect, useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

export function Signup( props ){
    const [email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const auth = useContext (AuthContext)

    //useEffect ( () => { console.log(email)}, [email] )

     const submitHandler = () => {
        props.handler(email, password)
        .then((user) => {
            //Signup Successful
        })
        .catch((error) => {
            console.log( error )
        })
    }
    return(
        <View style={styles.container}>
            <View style ={ styles.form }>
             <Text style={styles.title}> Register form</Text>
             <Text>Email</Text>
             <TextInput 
                style ={styles.input} 
                placeholder='email@example.com'
                value={email}
                onChangeText={(val) => setEmail(val)}
              />
             <Text>Password</Text>
             <TextInput 
                style ={styles.input} 
                placeholder='minimum 8 character' 
                secureTextEntry={true}
                value={password}
                onChangeText={(val) => setPassword(val)} 
              />
             <Pressable style ={styles.button} onPress={ () => submitHandler()} >
                <Text style={styles.button.text}>
                    Sign Up
                </Text>
             </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
    },
    title:{
        textAlign: 'left',
        fontSize: 18,
        marginVertical: 10,
    },
    form: {
        marginHorizontal: 10,
        backgroundColor: '#fc3503',
        marginTop: 30,
        padding:5,

    },
    input: {
        backgroundColor:'#eeeeee',
        minwidth: 350,
        padding: 5,
        marginBottom: 10,
    },
    button:{
        backgroundColor: '#333333',
        padding: 5,
        text:{
            color:'#eeeeee',
            textAlign:'center',
        }
    },
})