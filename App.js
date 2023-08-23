import {View, Text, Button} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';

const App = () => {
  // veriyi bizim talebimmiz üzerine tek sefer getirir
  const checkDB = () => {
    const reference = database().ref('books/');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };
  // DB takip eder veriyi günceller
  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log('User data: ', snapshot.val());
    });
  };
  return (
    <View>
      <Text>App</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
    </View>
  );
};

export default App;
