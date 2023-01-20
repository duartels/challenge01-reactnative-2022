import { Text, View } from "react-native"

import { styles } from "./styles"

type Props = {
  title: string;
  value: number;
  titleColor: string;
}

export const ToDoListHeaderItem = ({ title, titleColor, value}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color: titleColor}}>{title}</Text>

      <View style={styles.value}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      
    </View>
  )
}