import React from 'react';
import { SafeAreaView } from 'react-native';
import MessengerApp from './MidAct01/MessengerApp';
import ColorChangerApp from './MidAct01/CommentApp';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <CommentApp/>
    <MessengerApp/>
    </SafeAreaView>
  );
}