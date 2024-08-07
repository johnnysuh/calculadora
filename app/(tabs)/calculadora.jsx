import React, {useState} from 'react';
import {Button, Text, View} from 'react-native'

const style = function (){
    
    ({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        input:{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
        buttonStyle:{
            color: '#ffffff'
        },
        buttonContainer:{
            
        }
    })
}

const Calculadora = function(){
    const [number1, onChangeNumber1] = useState('');
    const [number2, onChangeNumber2] = useState('');
    const [resultado, onChangeResultado] = useState('');

    const soma = function(){
        onChangeResultado = number1+number2
    }
    console.log(resultado)

}

const PrimeiraPagina = function () {
    const {number, onChangeNumber} = useState('');
    console.log(number)
    
    return <View style={style().container}>
        <Text>PRIMEIRO TESTE</Text>
        <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Insira o número aqui"
        keyboardType="numeric"
        syle={style().input}
        />
        <Button
        title="+"
        onPress={() => stopMapper()}
        />
    </View>
}

export default PrimeiraPagina;