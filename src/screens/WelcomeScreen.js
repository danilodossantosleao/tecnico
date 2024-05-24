import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/penha.jpg')} style={styles.background}>
      <View style={styles.content}>
        <Text style={styles.title}></Text>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.greeting}>Oi, Danilo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Acessar minha conta</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end', // Push content to the bottom
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: 'white', // Background color for button area
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 30, // Extra padding at the bottom
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 2
  },
  buttonOutlineText: {
    color: 'black'
  }
});

export default WelcomeScreen;
