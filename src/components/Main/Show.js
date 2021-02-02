import React,{useContext} from 'react'
import {Text,View} from 'react-native'
import { GlobalContext } from '../../config/store/Context';

function Main() {

    const {User}  = useContext(GlobalContext)

    // console.log("Main Screen :",User)
    return(
        <>
        <View>
            <Text>
                Gi
            </Text>
        </View>
        </>

    )
    
}

export default Main