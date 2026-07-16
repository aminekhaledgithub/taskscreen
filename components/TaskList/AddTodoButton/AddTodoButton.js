import { Pressable, Text } from "react-native";
import { styles } from "./AddTodoButton.style";

export function AddTodoButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>+ New todo</Text>
    </Pressable>
  );
}
