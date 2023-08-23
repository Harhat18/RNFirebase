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
  // DB veri girmek için
  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A3',
      price: 128,
    });
  };
  return (
    <View>
      <Text>App</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
    </View>
  );
};

export default App;
