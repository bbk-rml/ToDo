import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native'
import { useState, useEffect, useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {useNavigation} from '@react-navigation/native'


export function Signin ( props ){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validEmail, setvalidEmail] = useState( false )
    const [validPassword, setvalidPassword] = useState(false)

    const Auth = useContext (AuthContext) 
    const navigation = useNavigation()

    useEffect ( () => { 
        if (email.indexOf('@') > 0){
            setvalidEmail (true)

        }
        else{
            setvalidEmail(false)
        }
    }, 
    [email] )


    useEffect ( () => { 
        if (password.length >= 8){
            setvalidPassword (true)

        }
        else{
            setvalidPassword(false)
        }
    }, 
    [password] )

    useEffect( () => {
        if (Auth.currentUser){
            navigation.reset({ index: 0, routes: [ {name:"Home"} ]})
        }
    } )
    
    // useEffect ( () => { console.log(email)}, [email] )

     const submitHandler = () => {   
        props.handeler(email, password) 
        .then( (user) => {
            //sign in successful
           
        })
        .catch((error) => {
            console.log( error )
        }) 
     }
        
     
    return(
        <View style={styles.container}>
            <View style ={ styles.form }>
             <Text style={styles.title}> Sign in to your Account</Text>
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
                <Text style={styles.button.text}>Sign in</Text>
             </Pressable>

             <Pressable style={styles.authlink} onPress={() => navigation.navigate("Sign up")}> 
                <Text styles ={styles.authlink.text}>
                    Don't have an account? Sign up
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
        backgroundColor: 'lightblue',
        marginTop: 30,
        padding:20,

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
    authlink:{
        marginTop: 13,
        text: {
            textAlign: "center"
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
})