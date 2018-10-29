import React from 'react'
import {View, ActivityIndicator} from 'react-native'

const styles = {
    spinnerStyle: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1
    }
}

const Spinner = ({size}) =>{
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    )
}

export {Spinner}