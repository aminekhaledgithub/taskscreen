import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';



export default function RecetteTile({ recette }) {
    const navigation = useNavigation(); 

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('RecetteDetail', { id: recette?.id })
        }}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: recette?.urls?.small }} style={styles.img} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >{recette?.alt_description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        maxWidth: "100%",
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        
    },
    titleContainer: {
        width: "70%",
        flex:1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        flexWrap:"wrap"
    },
    imgContainer: {
        width: "30%",
        marginRight:10
    },
    img: {
        width: "100%",
        height: 70,
    }
})