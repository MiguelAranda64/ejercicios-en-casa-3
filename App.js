import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen'; 
import HomeScreen from './src/screens/HomeScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import RealTimeChart from './src/screens/RealTimeChart';
import CrudUsuario from './src/screens/CrudUsuario';
import RoutineScreen from './src/screens/RoutineScreen' //pantalla rutinas

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegistrationScreen} />
        <Stack.Screen name="Graficas" component={RealTimeChart} />
        <Stack.Screen name="Crud" component={CrudUsuario} />
        <Stack.Screen name="Routine" component={RoutineScreen} /> //pantalla rutinas
        {/* Agrega otras pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;