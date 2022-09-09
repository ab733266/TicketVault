import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

class ticketVault extends Component {
  state = { count: 0.00, text: "", newText: "" }
  ticketPrice = 99.99;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ticket Vault</Text>
        <TextInput style={styles.input}
          placeholder="Number of Tickets"
          onChangeText={newText => this.setState({ newText })}
          defaultValue={this.state.text}>
        </TextInput>
        <TouchableOpacity style={styles.button}
          onPress={() => { this.setState({ count: this.state.count + this.ticketPrice * this.state.newText }) }}>
          <Text style={styles.buttonText}>Find the Cost</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.cost}>
            Ticket Cost: ${this.state.count.toFixed(2)}
          </Text>
        </View>
        <Image style={styles.concert} source={require('../ticketVault/assets/concert.png')}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    width: 175,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    width: 250,
    fontSize: 20,
    textAlign: 'center'
  },
  concert: {
    marginBottom: 50,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 50
  },
  button: {
    backgroundColor: "#f98b88",
    padding: 20,
    borderRadius: 5,
    marginBottom: 50,
    width: 250
  },
  buttonText: {
    fontSize: 25,
    color: '#000000',
    textAlign: 'center'
  },
  cost: {
    marginBottom: 50,
    fontSize: 30
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});

export default ticketVault;