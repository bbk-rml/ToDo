import {styleSheet, Text, View, TextInput, Pressable} from 'react-native'

export function Signup( props ){
    return(
        <View style={styles.container}>
            <View style ={ styles.form }>
             <Text style={styles.title}> Register form</Text>
             <Text>Email</Text>
             <TextInput style ={styles.input} placeholder='email@example.com'/>
             <Text>Password</Text>
             <TextInput style ={styles.input} placeholder='minimum 8 character'/>
             <Pressable style ={styles.button} >
                <Text>
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
            textAlign:'center'
        }
    },
})