import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import Actions from "./src/screens/Actions";
import AuthProvider, {useAuth} from './src/hooks/AuthContext';

const Stack = createNativeStackNavigator();
const Navigator = () => {
    const [user] = useAuth();

    if (!user) {
        return (
            <Stack.Navigator screenOptions={{headerShown: false }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Settings' component={Settings}/>
            <Stack.Screen name='Actions' component={Actions} />
        </Stack.Navigator>
    )
}
const App = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Navigator/>
            </AuthProvider>
        </NavigationContainer>
    )
};
export default App;