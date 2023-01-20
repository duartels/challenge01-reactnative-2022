import { Alert, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";
import { ToDo } from "../../screens/Home";

import { styles } from "./styles";

type Props = {
  toDo: ToDo;
  index: number;
  handleToggleToDo: (index: number) => void;
  handleRemoveToDo: (index: number) => void;
}

export const ToDoItem = ({ toDo, index, handleToggleToDo, handleRemoveToDo }: Props) => {

  const handleRemoveToDoItem = () => {
    Alert.alert("Remover", "Deseja remover essa tarefa?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => handleRemoveToDo(index)
      }
    ])
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox 
        size={18}
        fillColor={toDo.done ? '#5E60CE' : '#4EA8DE'}
        onPress={() => handleToggleToDo(index)}
      />

      <Text style={styles.title}>{toDo.title}</Text>

      <TouchableOpacity
        onPress={handleRemoveToDoItem}
      >
        <Feather 
          name="trash-2" 
          size={16} 
          color="#808080"
        />
      </TouchableOpacity>
      
    </View>
  )

}