import React from 'react';
import { SafeAreaView } from 'react-native';
import CounterApp from './Activity_5/CounterApp';
import ColorChangerApp from './Activity_5/ColorChangerApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <CounterApp/>
    <ColorChangerApp/>
    </SafeAreaView>
  );
}