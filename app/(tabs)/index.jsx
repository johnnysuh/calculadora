import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native'
import { LinearGradient } 

const style = StyleSheet.create({
    container:{

    }
})

const splashScreen = function () {
    const logoIst = 'wekimeki.png'
    return <LinearGradient
        start={{x: 0, y:0}}
        end={{x:0, y:1}}
        colors={['black', 'grey']}
        style={style.container}>
    return <View style={style.container}>
        <Image
            style={style.logo}
            source={{
                uri: logoIst,
            }}
            
        />
        </LinearGradient>
        
    </View>
}

export default splashScreen;