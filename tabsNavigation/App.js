import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detalles from './screens/Detalles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileHome" component={Profile} options={{ title: 'Perfil' }} />
            <Stack.Screen name="Detalles" component={Detalles} options={{ title: 'Detalles de Usuario' }} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'ProfileStack') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#B07BFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        paddingBottom: 5,
                        height: 60,
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Perfil' }} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}