import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { useNavigation, useRoute } from "@react-navigation/native";
import { useFetchRecette } from "./useFetchRecette";

export default function RecetteDetail() {

    const { searchImagesDetail, searchImagesDetailFetch } = useFetchRecette();
    const selectedRecette = useSelector(state => state.recetteList.selectedRecette)
    console.log("selectedRecette", selectedRecette)
    const route = useRoute();
    const { id } = route.params ?? {};

    useEffect(() => {
        searchImagesDetailFetch(id);
    }, [])
    return (
        <ScrollView>

            <Text style={styles.center}>Le détail de la recette</Text>
            <View style={styles.container}>
                <Image src={selectedRecette?.urls?.small} alt={selectedRecette?.alt_description} style={styles.img} />
            </View>

            <Text style={styles.title}>{selectedRecette?.alt_description}</Text>
            <Text>{JSON.stringify(selectedRecette)?.substring(0, 100)}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Recettes")}>
                <Text style={styles.center}>Voir les détails</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    center: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "green"
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "green",
        marginBottom: 20
    },
    container: {
        marginBottom: 10,
    },
    img: {
        marginRight: 10,
        width: "100%",
        height: 200,
    }

})