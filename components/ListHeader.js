import { View,  StyleSheet, Pressable, FlatList, Text} from 'react-native'

export function ListHeader (props){

    return(
        <View style ={styles.header}>
            <Text style={styles.text}> {props.text} </Text>
            <Pressable style= {styles.button} 
            onPress ={ () => props.handler() }>
                <Text style={styles.button.text}>Add</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create ( {
    header: {
        backgroundColor: "lightblue",
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius:15,   
    },
    text:{
    color: "black",
    fontSize:20,
    },
    button: {
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        width: 40,
        height: 30,
        text: {
            fontSize:15,
            color: "white",
        }
    }
})