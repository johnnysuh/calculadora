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
        backgroundColor: '#ff55ff'
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
        setSaldo(saldo + valor)
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
            <Text>Saldo atual na conta:</Text>{saldo}
        </View>
        <View>
            <TextInput
                onChangeText={setvalor}
                value={valor}
                placeholder='Insira o valor aqui'
            />
        </View>
        <View>
            <Text>Inserir botões aqui</Text>
            <Pressable
            onPress={}
            style={style.botao}
            >
                
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