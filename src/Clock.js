import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PlayerStyles from './styles/Playerstyles';

const ChessClock = ({ navigation }) => {
  const [player1Time, setPlayer1Time] = useState(300); // 5 minutes in seconds
  const [player2Time, setPlayer2Time] = useState(300); // 5 minutes in seconds
  const [isPlayer1Active, setIsPlayer1Active] = useState(false);
  const [isPlayer2Active, setIsPlayer2Active] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlayer1Active && player1Time > 0) {
      timer = setInterval(() => {
        setPlayer1Time(prevTime => prevTime - 1);
      }, 1000);
    } else if (isPlayer2Active && player2Time > 0) {
      timer = setInterval(() => {
        setPlayer2Time(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPlayer1Active, player1Time, isPlayer2Active, player2Time]);

  useEffect(() => {
    console.log('Player 1:', isPlayer1Active, 'Player 2:', isPlayer2Active);
  }, [isPlayer1Active, isPlayer2Active]);

  const startPlayer1 = () => {
    setIsPlayer1Active(false);
    setIsPlayer2Active(true);
    setHasStarted(true);
  };

  const startPlayer2 = () => {
    setIsPlayer1Active(true);
    setIsPlayer2Active(false);
    setHasStarted(true);
  };

  const togglePlayer1 = () => {
    setIsPlayer1Active(false);
    setIsPlayer2Active(true);
  };

  const togglePlayer2 = () => {
    setIsPlayer1Active(true);
    setIsPlayer2Active(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <TouchableOpacity
          style={[styles.button, isPlayer1Active && styles.activeButton]}
          onPress={hasStarted ? togglePlayer1 : startPlayer1}
          disabled={!isPlayer1Active && hasStarted}
        >
          <Text style={styles.timerText}>Player 1: {formatTime(player1Time)}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.playerContainer}>
        <TouchableOpacity
          style={[styles.button, isPlayer2Active && styles.activeButton]}
          onPress={hasStarted ? togglePlayer2 : startPlayer2}
          disabled={!isPlayer2Active && hasStarted}
        >
          <Text style={styles.timerText}>Player 2: {formatTime(player2Time)}</Text>
        </TouchableOpacity>
      </View>
      <View style={[PlayerStyles.subcontainer2, PlayerStyles.homeButton]}>
        <TouchableOpacity style={PlayerStyles.button} onPress={() => { navigation.navigate('Home') }}>
          <Text style={PlayerStyles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb887',
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff', // Ensure the text is visible on the button
  },
  button: {
    padding: 100,
    backgroundColor: '#000',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Adjust width as needed
  },
  activeButton: {
    backgroundColor: '#b8860b',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default ChessClock;
