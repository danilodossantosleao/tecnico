import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Olá Teste, Seja bem-vindo(a)!</Text>
          <Image source={require('../../assets/penha2.png')} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Bem-vindo ao App Real Cangaíba! Aqui, a paixão pelo futebol de várzea encontra união e amizade.
            Fundado há 9 anos, nosso time cresceu graças à colaboração de pessoas dedicadas. Juntos,
            superamos desafios, celebramos vitórias e construímos uma história de orgulho que vai além do esporte.
            Este é o Real Cangaíba, uma comunidade vibrante e apaixonada.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Notícias Recentes</Text>
          {/* Adicione aqui componentes para notícias recentes */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Eventos</Text>
          {/* Adicione aqui componentes para eventos */}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Agenda')}>
          <FontAwesome name="calendar" size={50} color="orange" />
          <Text style={styles.iconText}>Agenda</Text>
        </TouchableOpacity>
        <View style={styles.icon}>
          <Image source={require('../../assets/penha2.png')} style={styles.clubLogo} resizeMode="contain" />
        </View>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Galeria')}>
          <FontAwesome name="photo" size={50} color="orange" />
          <Text style={styles.iconText}>Galeria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 100,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
  },
  sectionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    marginTop: 5,
  },
  clubLogo: {
    width: 70, // Tamanho da imagem do clube
    height: 70,
  },
});

export default HomeScreen;
