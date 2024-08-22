import React, { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const listaTarefas = [
    { id: 1, descricao: 'Passear com cachorro', feito: false, date: '21/08/2024' },
    { id: 2, descricao: 'Dar comida pro cachorro', feito: false, date: '21/08/2024' },
    { id: 3, descricao: 'Fazer almoço', feito: false, date: '21/08/2024' },
    { id: 4, descricao: 'Caminhar', feito: false, date: '21/08/2024' },
    { id: 5, descricao: 'Ler', feito: false, date: '21/08/2024' },
    { id: 6, descricao: 'Arrumar quarto', feito: false, date: '21/08/2024' },
    { id: 7, descricao: 'Fazer compras', feito: false, date: '21/08/2024' },
    { id: 8, descricao: 'Cortar o cabelo', feito: false, date: '21/08/2024' },
    { id: 9, descricao: 'Estudar', feito: false, date: '21/08/2024' },
    { id: 10, descricao: 'Fazer deveres', feito: false, date: '21/08/2024' },
]


const toDo = function () {
    const [_tarefas, setTarefas] = useState(listaTarefas)

    const concluirTarefa = function({item}){
        listaTarefas[listaTarefas.indexOf(item)].feito = !listaTarefas[listaTarefas.indexOf(item)].feito
        setTarefas([...listaTarefas])
    }
    
    const Item = ({ item }) => (
        <Pressable style={styles.tarefa} onPress={() => concluirTarefa({item})}>
            <View style={styles.item} >
                {!item.feito
                    ? <Text style={styles.listItem}>{item.descricao}</Text>
                    : <Text style={[styles.listItem, { textDecorationLine: 'line-through' }]}>{item.descricao}</Text>
                }
            </View>
        </Pressable >
    );
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Lista de Tarefas</Text>
                <FlatList
                    data={_tarefas}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    style={styles.lista}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        fontSize: 25,
        color: '#10287d',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#10287d',
    },
    content: {
        width: '80%',
        marginTop: 50,
    },
    tarefa: {
        backgroundColor: '#bfc7e3',
        borderRadius: 20,
    },

    lista: {
        height: '90%',
    }
});

export default toDo