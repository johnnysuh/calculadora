import React, { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const TAREFAS = [
    { id: 1, descricao: 'Passear com cachorro', feito: false, date: '21/08/2024' },
    { id: 2, descricao: 'Dar comida pro cachorro', feito: false, date: '21/08/2024' },
    { id: 3, descricao: 'Fazer almoço', feito: true, date: '21/08/2024' },
    { id: 4, descricao: 'Caminhar', feito: true, date: '21/08/2024' },
    { id: 5, descricao: 'Ler', feito: true, date: '21/08/2024' },
    { id: 6, descricao: 'Arrumar quarto', feito: true, date: '21/08/2024' },
    { id: 7, descricao: 'Fazer compras', feito: true, date: '21/08/2024' },
    { id: 8, descricao: 'Cortar o cabelo', feito: true, date: '21/08/2024' },
    { id: 9, descricao: 'Estudar', feito: true, date: '21/08/2024' },
    { id: 10, descricao: 'Fazer deveres', feito: true, date: '21/08/2024' },
]


const toDo = function () {
    const [_tarefas, setTarefas] = useState(TAREFAS)

    const concluirTarefa = function({item}){
        TAREFAS[TAREFAS.indexOf(item)].feito = !TAREFAS[TAREFAS.indexOf(item)].feito
        setTarefas([...TAREFAS]) //Necessário pois sem isso o React ignora a alteração, já que o endereço de memória seria o mesmo. Isso faz uma cópia em outro endereço, basicamente
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
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: '#10287d',
        borderBottomWidth: 1,

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#10287d',
        fontFamily: 'Arial Narrow',
    },
    content: {
        width: '80%',
        marginTop: 50,
    },
    tarefa: {
        backgroundColor: '#ffffff',
    },

    lista: {
        height: '90%',
    }
});

const SplashScreen = function () {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#bfc7db', '#0231a1']}
          style={styles.background}
  
        />
        <Image
          style={styles.logo}
          source={{ uri: '' }} />
      </View>
  
    )
  };

export default toDo