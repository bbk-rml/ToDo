import { View, Text, StyleSheet, Pressable} from 'react-native'

export function ListItem ( props) {
    return(
        <View style={styes.item}>
            <Pressable onPress={() => props.editor(props.item)}>
                <Text>{ props.item.name }</Text>
                
            </Pressable>
        </View>
    )

}
const styes =StyleSheet.create({
    item:{
        padding: 10,
        flex:1,
        backgroundColor: "white",
        margin: 5,
    }
})