import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recettes: {
    marginVertical: 10,
    paddingVertical:20,
    backgroundColor: "green",
    width:"100%",
  },
  tasks: {
    marginVertical: 10,
    paddingVertical:20,
    backgroundColor: "orange",
    width:"100%",
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal:"auto"
  }
})