import { View,  StyleSheet, Pressable, FlatList, Textw} from 'react-native'
import { useContext, useState, useEffect } from 'react'
import { DbContext } from '../contexts/DdContext'
import { AuthContext } from '../contexts/AuthContext'
import { ListItem } from '../components/ListItem'


import { collection,getDocs, query, onSnapshot } from "firebase/firestore"
import { ListHeader } from '../components/ListHeader'

export function Data (props){
    const db = useContext( DbContext ) 
    const Auth = useContext( AuthContext )

    const[data, setData] = useState([])
    const[user, setUser] = useState()

    //get data only once when Loaded
    const getData = async() => {
        if( !user){
            return
        }
        const col = collection(db, `things/${user.uid}/list`)

        const snapshot = await getDocs( col )
        let dataList =[]
        snapshot.forEach( (item) => {
            let obj  = item.data()
            obj.id = item.id
            dataList.push( obj )
        })
        setData( dataList )
        console.log( dataList )
    }
    // get  data with realtime updates

    const getRealTimeData = () => {
        if(!user){
            return
        }
        const col = query( collection(db, `things/${user.uid}/list`) )
        const unsub = onSnapshot( col, (snapshot) => {
            let dataList = []
            snapshot.forEach( (item) => {
            let obj  = item.data()
            obj.id = item.id
            dataList.push( obj )
        })
        setData( dataList )
    
        } )
        
    }
    useEffect ( () => {
        if( Auth.currentUser){
            setUser(Auth.currentUser)
            //getData()

            getRealTimeData()
        }
        else{
            setUser(null)
        }
    }, [user])

    const renderItem =({item}) => {
        return(
            <ListItem  item={item}/>
        )
    }

    return(
        <View style= {styles.container}>
            <FlatList 
            data = {data}
            renderItem={renderItem}
            keyExtractor={ (item) => item.id }
            ListHeaderComponent = {<ListHeader text="List" />}
            />
        </View>
    )
    }
const styles = StyleSheet.create ({
    container: {
        padding:5
    }
})