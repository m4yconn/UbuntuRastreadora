import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Registre from "../screens/Registre";

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options = {{headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options = {{headerShown: false}}
            />

            <Stack.Screen
                name="Registre"
                component={Registre}
                options = {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}