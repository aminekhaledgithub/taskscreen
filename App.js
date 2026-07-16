import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./components/Home";
import TaskList from "./components/TaskList/TaskList";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RecetteStack from "./components/Recettes/RecetteStack";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007AFF",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Tasks"
            component={TaskList}
            options={{
              title: "Tasks",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "list" : "list-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Recettes"
            component={RecetteStack}
            options={{
              title: "Recettes",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "receipt" : "receipt-outline"}
                  size={24}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}