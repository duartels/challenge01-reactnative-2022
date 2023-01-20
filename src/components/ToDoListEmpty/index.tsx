import { Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

import { styles } from "./styles"

export const ToDoListEmpty = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather name="clipboard" size={56} color="#808080" />
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}