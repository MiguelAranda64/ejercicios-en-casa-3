import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import rutinasData from '../exercises.json';



const App = () => {
  const partesCuerpo = ["Antebrazos", "Bicep", "Hombros", "Trapecio", "Pecho", "Abdomen", "Oblicuo", "Cuadricep", "Pantorrilla", "gluteo", "Lateral", "Espalda Baja", "Trapecio Espalda", "Tricep", "isquiotibiales"]; // Example body parts
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  const handleCalculateIMC = () => {
    setSelectedBodyPart(rutinasData.exercises);
  };

  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rutinas de Ejercicio</Text>
      <TouchableOpacity style={styles.calculateIMCButton} onPress={handleCalculateIMC}>
        <Text style={styles.calculateIMCText}>Calcular IMC</Text>
      </TouchableOpacity>
      {/* Display selected exercises */}
      {selectedBodyPart && (
        <View>
          {selectedBodyPart.map((bodyPart, index) => (
            <View key={index}>
              <Text style={styles.bodyPartTitle}>{partesCuerpo[index]}</Text>
              <View style={styles.selectedExercise}>
                <Text style={styles.exerciseName}>{bodyPart.routine[0].name}</Text>
                <Text style={styles.exerciseDifficulty}>{bodyPart.routine[0].difficulty}</Text>
               {/* renderizar todas las imagenes */}
               <Image
                style={styles.exerciseImage}
                source={images[bodyPart.routine[0].img]}
              />


                {console.log('Image Key:', bodyPart.routine[0].img)}
                <Text style={styles.exerciseStepsTitle}>Pasos:</Text>
                <Text style={styles.exerciseSteps}>{bodyPart.routine[0].steps.join('\n')}</Text>
              </View>
            </View>
          ))}
        </View>
      )}

<Image style={styles.exerciseImage} source={require('../img/chinups.png')} />


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  calculateIMCButton: {
    alignSelf: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  calculateIMCText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyPartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectedExercise: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  exerciseDifficulty: {
    fontSize: 16,
    marginBottom: 8,
  },
  exerciseImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  exerciseStepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  exerciseSteps: {
    fontSize: 16,
  },
});

export default App;
