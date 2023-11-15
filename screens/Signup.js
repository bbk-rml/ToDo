import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native'
import { useState, useEffect, useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {useNavigation} from '@react-navigation/native'

export function Signup ( props ){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validEmail, setvalidEmail] = useState(false)
    const [validPassword, setvalidPassword] = useState(false)

    const navigation = useNavigation()

    const auth = useContext (AuthContext)

    //check the value of email

    useEffect ( () => { 
        if (email.indexOf('@') > 0){
            setvalidEmail (true)

        }
        else{
            setvalidEmail(false)
        }
    }, 
    [email] )

    //check value of password
    useEffect ( () => { 
        if (password.length>= 8){
            setvalidPassword (true)

        }
        else{
            setvalidPassword(false)
        }
    }, 
    [password] ) 

     const submitHandler = ( ) => {   
        props.handler( email, password) 
        .then( (user) => {
            console.log('Signup Successful')
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
                placeholder="email@example.com"
                value = {email}
                onChangeText={(val) => setEmail(val)}
              />
             <Text>Password</Text>
             <TextInput 
                style ={styles.input} 
                placeholder="minimum 8 character" 
                secureTextEntry={true}
                value={password}
                onChangeText={(val) => setPassword(val)} 
              />
             <Pressable 
              style ={(validEmail && validPassword) ? styles.button : styles.disabledbutton} 
              onPress={ () => submitHandler()} 
              disabled={ ( validEmail && validPassword) ? false: true }
              >

                <Text style={styles.button.text}>
                    Sign up
                </Text>
             </Pressable>

             <Pressable style={styles.authlink} onPress={() => navigation.navigate("Sign in")}> 
                <Text style={styles.authlink.text}>
                    Go to Signin
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
    disabledbutton:{
        backgroundColor: '#666666',
        padding: 5,
        text:{
            color:'#eeeeee',
            textAlign:'center',
        }
    },

    authlink:{
        marginTop: 13,
        text: {
            textAlign: "center"
        } 
    },   
})