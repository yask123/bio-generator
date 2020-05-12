import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import { showMessage, hideMessage } from "react-native-flash-message";

const BIOS = [
  'What\'s the best coronavirus pickup line you have heard?',
  'Help me spread herd immunity',
  'On the hunt for the best tacos in Los Angeles. Message me with your recs!',
  'I would love to meet someone special on here so we can both get off this app.',
  'Upcoming trips to Paris and London. Would love to swap travel stories with a fellow globetrotter.',
  'Might be slow to respond, but I always make time for dog lovers.',
];

export default function App() {
  return (
    <View style={styles.container}>
        <View style={{ flex: 2, backgroundColor: '#0779e4', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => showMessage({message: "copied", type: 'info'})}>
          <Text style={{ color: 'black', fontSize: 37, textAlign: 'center', fontFamily: 'Helvetica' }}>" {BIOS[0]} "</Text>
        </TouchableOpacity>
        </View>
      <View style={{ flex: 1, backgroundColor: '#abf0e9', alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Generate' containerViewStyle={{ width: '100%'  }} color='#0779e4' titleStyle={{
          color: "white",
          fontSize: 30,
          padding: 12,
          paddingBottom: 10,
          paddingTop: 10,
        }}> </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
