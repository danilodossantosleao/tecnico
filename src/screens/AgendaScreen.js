import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const events = {
  '2023-11-07': [{ type: 'Próximo Jogo', time: '15:30', location: 'Arena Fênix', teams: 'Real Cangaíba X Digidigie' }],
  '2023-11-13': [{ type: 'Treino', time: '16:30', location: 'Quadra da ZL', teams: 'Real Cangaíba Feminino' }],
  '2023-11-18': [{ type: 'Amistoso', time: '14:00', location: 'Arena Itaquera 2', teams: 'Real Cangaíba X Os D' }],
  '2023-11-20': [{ type: 'Copa Orgulho', time: '17:00', location: 'Estádio do Morumbi', teams: 'Real Cangaíba' }]
};

const nextGameDate = '2023-11-07'; // Defina a data do próximo jogo

const AgendaScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = {
    ...Object.keys(events).reduce((acc, cur) => ({
      ...acc,
      [cur]: { marked: true, dotColor: 'blue' }
    }), {}),
    [nextGameDate]: { marked: true, dotColor: 'red', customStyles: {
      container: {
        backgroundColor: 'navy'
      },
      text: {
        color: 'white',
        fontWeight: 'bold'
      }
    }} // Destaca a data do próximo jogo
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        markingType={'custom'}
      />
      <ScrollView style={styles.detailsContainer}>
        {selectedDate === nextGameDate && (
          <Text style={styles.nextGameMessage}>Prox Jogo!</Text>
        )}
        {events[selectedDate]?.map((event, index) => (
          <View key={index} style={styles.eventBox}>
            <Text style={styles.eventType}>{event.type} às {event.time}</Text>
            <Text style={styles.eventDetails}>{event.location}</Text>
            <Text style={styles.eventDetails}>{event.teams}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  detailsContainer: {
    marginTop: 20
  },
  eventBox: {
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  eventType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  eventDetails: {
    fontSize: 14,
    color: 'white',
  },
  nextGameMessage: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  }
});

export default AgendaScreen;
