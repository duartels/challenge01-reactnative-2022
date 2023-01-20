import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import Feather from "@expo/vector-icons/Feather"
import { Header } from "../../components/Header"

import { styles } from "./styles"
import { ToDoListHeaderItem } from "../../components/ToDoListHeaderItem"
import { ToDoListEmpty } from "../../components/ToDoListEmpty"
import { useState } from "react"
import { ToDoItem } from "../../components/ToDoItem"

export type ToDo = {
  title: string;
  done: boolean;
}

export const Home = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [toDoInput, setToDoInput] = useState('');

  const handleAddToDo = () => {
    if (toDoInput === '') {
      return;
    }

    const newToDo = {
      title: toDoInput,
      done: false
    }

    setToDos([...toDos, newToDo]);
    setToDoInput('');
  }

  const handleToggleToDo = (index: number) => {
    setToDos(toDos.map((toDo, i) => i === index ? {
      ...toDo,
      done: !toDo.done
    } : toDo));
  }

  const handleRemoveToDo = (index: number) => {
    setToDos(toDos.filter((toDo, i) => i !== index));
  }

  const completedToDos = toDos.filter(toDo => toDo.done).length;

  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={styles.form}>
          <TextInput 
            style={styles.toDoInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={toDoInput}
            onChangeText={setToDoInput}
          />

          <TouchableOpacity 
            style={styles.toDoButton}
            activeOpacity={0.7}
            onPress={handleAddToDo}
          >
            <Feather 
              name="plus-circle"
              size={16}
              color="#F2F2F2"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toDoList}>
          <View style={styles.toDoListHeader}>
            <ToDoListHeaderItem 
              title="Criadas"
              value={toDos.length}
              titleColor="#4EA8DE"
            />
            <ToDoListHeaderItem 
              title="Concluídas"
              value={completedToDos}
              titleColor="#8284FA"
            />
          </View>

          <FlatList 
            data={toDos}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item, index }) => (
              <ToDoItem 
                toDo={item}
                index={index}
                handleToggleToDo={handleToggleToDo}
                handleRemoveToDo={handleRemoveToDo}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (<ToDoListEmpty />)}
          />

        </View>
      </View>
    </>
  )
}