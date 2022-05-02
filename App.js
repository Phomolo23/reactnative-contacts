import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import {useState} from 'react';
import Food from './Contact.js';

export default function App() {
  const [totalprice, setTotalprice] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.statusbar}>The total price is {totalprice}</Text>
      <ScrollView style={styles.scrollor}>
      <Food item="2L cocacola" Ammount={24} image={require('./assets/cocacola.jpg')} totalprice={totalprice + 24} setTotalprice={setTotalprice} />
      <Food item ="bread" Ammount={12} image={require('./assets/bread.jpg')} totalprice={totalprice} setTotalprice={setTotalprice} />
      <Food item ="snaks" Ammount={2} image={require('./assets/sna.png')} totalprice={totalprice} setTotalprice={setTotalprice} />
      <Food item ="fullmeal" Ammount={50} image={require('./assets/papa.jpg')} totalprice={totalprice} setTotalprice={setTotalprice} />
      <Food item ="Burger" Ammount={10} image={require('./assets/burger.jpg')} totalprice={totalprice} setTotalprice={setTotalprice} />
      <Food item ="minichips" Ammount={15} image={require('./assets/chips.jpg')} totalprice={totalprice} setTotalprice={setTotalprice} />
      <Food item ="large meal" Ammount={60} image={require('./assets/fullmeal.jpg')} totalprice={totalprice} setTotalprice={setTotalprice} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusbar:{
    fontSize: 24,
    marginTop: 20
  }
});
