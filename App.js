import React from 'react';
import { SafeAreaView } from 'react-native';
import ColorChangerApp from './Activity_5/ColorChangerApp';
import CounterApp from './Activity_5/CounterApp';
import ColorChangerApp from './MidAct01/CommentApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ColorChangerApp/>
      <CounterApp/>
       <CommentApp/>
    <MessengerApp/>
    </SafeAreaView>
  );
}