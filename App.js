import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App(){
  const [ counter, setCounter ] = useState(0)

  return(
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
        <View style={styles.counterWrapper}>
          <Text style={styles.counter}>{counter}</Text>
        </View>
        <TouchableHighlight
          style={[styles.text, {backgroundColor: 'hsla(0, 90%, 55%, 0.6', marginBottom: 30} ]}
          activeOpacity={0.6}
          underlayColor='hsla(0, 90%, 40%, 0.8)'
          onPress={()=>setCounter(counter + 1)}
        >
          <IconMat name='plus' size={100} color='black' />
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.text, {backgroundColor: 'hsla(210, 90%, 40%, 0.8)'}]}
          activeOpacity={0.6}
          underlayColor='hsla(210, 90%, 40%, 0.8)'
          onPress={counter==0 ? ()=> setCounter(counter) : ()=>setCounter(counter - 1)}
        >
          <IconMat name='minus' size={100} color='black' />
        </TouchableHighlight>
        <View style={styles.resetWrapper}>
          <TouchableOpacity
            style={styles.resetView}
            onPress={()=>setCounter(0)}
            >
            <Text style={styles.resetText}>リセット</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(0,0%,0%,0)'
  },
  counterWrapper: {
    flex: 6,
    justifyContent: 'center',
  },
  counter: {
    fontSize: 150,
    fontWeight: 'bold',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
  },
  resetWrapper:{
    flex: 2,
    marginTop: '10%',
  },
  resetView: {
    shadowColor: 'black',
    shadowOffset: {
      height: 4,
      width: 4
    },
    shadowRadius: 3,
    shadowOpacity: 0.6,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'hsla(0, 0%, 55%, 0.6)',
  },
  resetText: {
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 100,
    textAlign: 'center',
    height: 100,
    width: 300,
    color: 'white',
  },
});