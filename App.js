import React from 'react';
import { SafeAreaView } from 'react-native';
import MidtermAct01 from './MidtermAct01';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <MidtermAct01/>
       <CounterApp/>
    <ColorChangerApp/>
    </SafeAreaView>
  );
}