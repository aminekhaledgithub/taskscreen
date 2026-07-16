import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recettes from './Recettes';
import RecetteDetail from './RecetteDetail';

const Stack = createNativeStackNavigator();

export default function RecetteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Recettes}
      />

      <Stack.Screen
        name="RecetteDetail"
        component={RecetteDetail}
      />
    </Stack.Navigator>
  );
}