import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { Modal } from "react-native";


const style = StyleSheet.create({
    logo:{
        width: 200,
        height: 100
    },
    container: {
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#ff0000',
        borderRadius: 20,
        height: 40,
        width: 100,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },

})

export default telaBanco = () => {
    // let saldo = 0
    const [saldo, setSaldo] = useState(9999)
    const [valor, setValor] = useState(0)
    const [modalEstaAberta, setModalEstaAberta] = useState(false)
    const logoIst = 'https://logosmarcas.net/wp-content/uploads/2020/11/Santander-Logo.png'

    const depositar = function () {
        // verificações
        setSaldo(Number(saldo) + Number(valor))
    }

    const sacar = () => {
        // verificações
        setSaldo(saldo - valor)
    }

    return <View style={style.container}>
        <View>
            <Image
            style={style.logo}
                source={{
                    uri:logoIst,
                }}
            />
        </View>
        <View>
            <Text>Saldo atual na conta: {saldo}</Text>
        </View>
        <View>
            <TextInput
                onChangeText={setValor}
                value={valor}
                placeholder='Insira o valor aqui'
                keyboardType='numeric'
            />
        </View>
        <View>
            <Pressable
            style={style.botao}
            onPress={sacar}
            >
                <Text>Sacar</Text>
            </Pressable>
            <Pressable
            style={style.botao}
            onPress={depositar}
            >
                <Text>Depositar</Text>
            </Pressable>
        </View>

                <Modal animationType='slide'
                transparent={true}
                visible={modalEstaAberta}
                onRequestClose={() => setModalEstaAberta(false)}
                >
                    <View>Texto modal</View>
                </Modal>

    </View>
}