import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'

export default function Food({item, Ammount, image, totalprice, setTotalprice}) {
  const [pay, setPrice] = useState(0);
  function addprice(){
    setPrice(Ammount + pay);
    setTotalprice(totalprice + Ammount);
  }
  function deductprice(){
    setPrice(Ammount - pay);
    setTotalprice(totalprice - Ammount);
  }
  return (
    <View style={styles.contact}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item}</Text>
          <Text>pay: {pay}</Text>
           <Text>{pay}</Text>
         <Button title="Buy item" onPress={addprice} />
        <Button title="return item" onPress={deductprice} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
  },
  details: {
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})