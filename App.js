import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Header } from 'react-native-elements';

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
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: '#0779e4', alignItems: 'center', justifyContent: 'center', paddingLeft: 5, paddingRight: 5 }}>
        <TouchableOpacity onPress={() => showMessage({ message: "copied", type: 'info' })}>
          <Text style={{ color: 'black', fontSize: 33, textAlign: 'center', fontFamily: 'Helvetica' }}>" {BIOS[index]} "</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: '#abf0e9', alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Generate' containerViewStyle={{ width: '100%' }} color='#0779e4' titleStyle={{
          color: "white",
          fontSize: 25,
          padding: 12,
          paddingBottom: 10,
          paddingTop: 10,
        }}
        onPress={()=> {
          if(index >= BIOS.length-1){
            setIndex(0);
          }
          else{
            setIndex(index+1)}
          }
        }
        > </Button>
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
