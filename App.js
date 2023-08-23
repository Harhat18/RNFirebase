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
      model: 'A5',
      price: 128,
    });
  };
  // DB veri güncelleme
  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      model: 'A3',
    });
  };
  // DB veri güncelleme
  const pushDB = () => {
    const reference = database().ref('car/rentable');
    reference.push({
      brand: 'Passat',
      model: '81',
      price: 650,
    });
  };
  return (
    <View>
      <Text
        style={{fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
        Firebase Exmaple
      </Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
      <Button title="Update DB" onPress={updateDB} />
      <Button title="Push DB" onPress={pushDB} />
    </View>
  );
};

export default App;
