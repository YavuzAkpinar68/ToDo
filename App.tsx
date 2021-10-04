import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';



export default function App() {
  
  const [todo, setToDo] = useState<string>("")
  const [todos, setToDos] = useState<string[]>([])
  const addToDo = () => {
    setToDos([todo, ...todos])
    setToDo("")
    Keyboard.dismiss()
  }
  

  const removeToDo = (index: number) => {
    const newToDos = [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    setToDos(newToDos)
  }
  
  return (
    <View style={styles.outerView_container}>
      <View style={styles.titleView_container}>
        <Text style={styles.title_container}>Yapılacaklar</Text>
        <Text style={styles.counter_container}>{todos.length}</Text>
      </View>
      <View style={styles.flatlistView_container}>
        <FlatList
          style={styles.flatlist_container}
          data={todos}
          renderItem={({item, index}) => 
            <TouchableOpacity 
              onPress={() => removeToDo(index)}
              style={styles.flatlistinner_container}>
              <Text 
                style={styles.flatlistinnerText_container}>{item}
              </Text>
            </TouchableOpacity>}>
         </FlatList>
      </View>
      <View style={styles.viewToucIndex_container} >
        <View style={styles.textInput_container}> 
          <TextInput
            placeholder="Yapılacaklar..."
            value={todo}
            onSubmitEditing={addToDo}
            onChangeText={setToDo}>
          </TextInput>
        </View>   
       
        <TouchableOpacity
          style={styles.touchable_container}
          onPress={addToDo}>
            <Text style={{color:"silver"}}>Ekle...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }


