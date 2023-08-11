import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { DatePickerInput } from 'react-native-paper-dates';


const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState(null); // Cambia el estado inicial
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const formattedBirthDate = birthdate ? birthdate.toISOString() : '';
  
      const userData = {
        username,
        birthdate: formattedBirthDate,
        gender,
        weight,
        height,
        email,
        password,
      };

      //verificar datos
      console.log('Enviando solicitud de registro con estos datos:', userData);


      const response = await axios.post('http://192.168.1.64/register', userData);

      //verificar respuesta del servidor
      console.log('Respuesta del servidor:', response.data);


      if (response.data === 'USUARIO REGISTRADO') {
        navigation.navigate('Login');
      } else {
        console.log('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  const handleBack = () => {
    navigation.navigate('Graficas');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTRARSE</Text>

        {/* Datos personales */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Nombre de usuario</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Nombre de usuario"
          />
        </View>
        
        
        <View style={styles.section}>
          <Text style={styles.subtitle}>Genero</Text>
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
            placeholder="Genero"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Fecha de nacimiento</Text>
          <DatePickerInput
            value={birthdate}
            onChange={(date) => setBirthdate(date)}
            placeholder="Seleccione una fecha"
            displayFormat="DD/MM/YYYY"
            mode="date"
            style={styles.input}
          />
        </View>


        <View style={styles.section}>
          <Text style={styles.subtitle}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight.toString()}
            onChangeText={(text) => {
              const parsedWeight = parseInt(text);
              if (!isNaN(parsedWeight) && parsedWeight <= 999) {
                setWeight(parsedWeight);
              }
            }}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Altura (cm)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height.toString()}
            onChangeText={(text) => {
              const parsedHeight = parseInt(text);
              if (!isNaN(parsedHeight) && parsedHeight <= 999) {
                setHeight(parsedHeight);
              }
            }}
          />
        </View>


        
        {/* Datos de registro */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Correo Electronico</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Correo Electronico"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para que ScrollView ocupe todo el espacio disponible
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default RegistrationScreen;
