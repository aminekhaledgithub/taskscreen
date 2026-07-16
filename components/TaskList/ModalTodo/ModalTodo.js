import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./ModalTodo.style";

export function ModalTodo({ visible, onClose, inputValue, onChangeText, onCreate }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Créer une tâche</Text>
          <Text style={styles.description}>Choisi un nom pour la nouvelle tâche</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom de la tâche"
            onChangeText={onChangeText}
            value={inputValue}
          />
          <View style={styles.actions}>
            <Pressable onPress={onClose} style={styles.cancelButton}>
              <Text>Annuler</Text>
            </Pressable>
            <Pressable onPress={onCreate} style={styles.createButton}>
              <Text style={styles.createButtonText}>Créer</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
