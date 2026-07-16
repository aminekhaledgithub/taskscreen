import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './CardTask.style';

export function CardTask({ todo, onPress, onLongPress }) {
    return <TouchableOpacity style={styles.container}
     onPress={() => onPress(todo)}
        onLongPress={() => onLongPress(todo)}>
        <Text style={[ styles.title , todo.isCompleted && styles.titleCompleted]}>{todo.title}</Text>
        {todo.isCompleted && <Image source={require("../../../assets/check.png")} 
        style={styles.checkImage} resizeMode="contain" />}
    </TouchableOpacity>
}
