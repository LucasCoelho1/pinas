import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SplashScreen from "./screens/SplashScreen";
import GameScreen from "./screens/GameScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

// Instancia um objeto Native Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * Função base da navegação do aplicativo
 * 
 * @returns {object} React Component
 */


export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: true, 
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Instancia um objeto Material Bottom Tabs Navigator
const tabs = createMaterialBottomTabNavigator();

/**
 * Função responsavel pela navegação do Material Bottom Tabs
 * @returns 
 */

/**
 * 
 */
function TabsNavigation() {
  return (
    <tabs.Navigator
      activeColor="#ff4655"
      inactiveColor="#ffffff"
      barStyle={{ backgroundColor: '#1c1c1c' }}>
      <tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={"#ff4655"} size={26} />
          ),
        }}
      />
      <tabs.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarLabel: "Game",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-variant-outline" color={"#ff4655"} size={26} />
          ),
        }}
      />
    </tabs.Navigator>
  );
}