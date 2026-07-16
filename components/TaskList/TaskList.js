import { Alert, Pressable, ScrollView, Text, View,StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { CardTask } from "./CardTask/CardTask";
import { Header } from "./Header/Header";
import { ModalTodo } from "./ModalTodo/ModalTodo";
import { TabBottomMenu } from "./TabBottomMenu/TabBottomMenu";
import { AddTodoButton } from "./AddTodoButton/AddTodoButton";

import { useState } from "react";
import uuid from "react-native-uuid";

export default function TaskList() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Cuisiner un plat", isCompleted: true },
    { id: 2, title: "Apprendre ecrire japonais", isCompleted: false },
    { id: 3, title: "Apprendre l'espagnole", isCompleted: true },
    { id: 4, title: "Voyager en Turquie", isCompleted: true },
  ]);

  function onPressTodo(pressedTodo) {
    const udpatedTodo = {
      ...pressedTodo,
      isCompleted: !pressedTodo.isCompleted,
    };
    const index = todoList.findIndex((t) => t.id === pressedTodo.id);
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = udpatedTodo;
    setTodoList(updatedTodoList);
  }
  function onLongPressTodo(longPressedTodo) {
    Alert.alert(
      "Suppression",
      "Es tu sûre de vouloir supprimer cette tâche ?",
      [
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => {
            setTodoList(todoList.filter((t) => t.id !== longPressedTodo.id));
          },
        },
        {
          text: "Annuler",
          style: "cancel",
        },
      ]
    );
  }

  const filteredNoteList = getFilteredNoteList();

  function renderTasks() {
    return filteredNoteList.map((todo, i) => (
      <View key={todo + i} style={{ marginBottom: 20 }}>
        <CardTask
          todo={todo}
          onPress={onPressTodo}
          onLongPress={onLongPressTodo}
        />
      </View>
    ));
  }

  function getFilteredNoteList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter(({ isCompleted }) => !isCompleted);
      case "done":
        return todoList.filter(({ isCompleted }) => isCompleted);
    }
  }

  function createTodo() {
    if (inputValue.trim().length > 0) {
      setTodoList([
        ...todoList,
        { id: uuid.v4(), title: inputValue, isCompleted: false },
      ]);
    }
    setIsDialogVisible(false);
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: "#F9F9F9" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={s.root}>
          <View style={{ flex: 1 }}>
            <Header />
          </View>
          <View style={{ flex: 5 }}>
            <ScrollView>{renderTasks()}</ScrollView>
          </View>
        </View>
        <AddTodoButton onPress={() => setIsDialogVisible(true)} />

        <ModalTodo
          visible={isDialogVisible}
          onClose={() => setIsDialogVisible(false)}
          inputValue={inputValue}
          onChangeText={setInputValue}
          onCreate={createTodo}
        />
      </SafeAreaView>
      <TabBottomMenu
        todoList={todoList}
        onPress={setSelectedTabName}
        selectedTabName={selectedTabName}
      />
    </SafeAreaProvider>
  );
}


export const s = StyleSheet.create({
  root: {
    padding: 10,
    flex: 1,
  },
});