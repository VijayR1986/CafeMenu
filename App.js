import React, {useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View, Alert} from 'react-native';
import Header from './components/Header';
import ListItems from './components/ListItems';
import AddItem from './components/AddItems';
import NoOfItemPicker from './components/NoOfItemPicker';

export default function App(value) {
  const random = Math.random() * 100;
  // Use of useState Hook in function
  const [selectedValue, setSelectedValue] = useState('0');

  const [items, setItems] = useState([
    {id: 1, item: 'Cold-Drink', price: '20 ₹.'},
    {id: 2, item: 'Masala-Tea', price: '20 ₹.'},
    {id: 3, item: 'Bataka-Pauva', price: '30 ₹'},
    {id: 4, item: 'Coffee', price: '20 ₹'},
    {id: 5, item: 'Dabeli', price: '20 ₹'},
    {id: 6, item: 'Vada-pav', price: '20 ₹'},
    {id: 7, item: 'Cheese-Maggi', price: '40 ₹'},
    {id: 8, item: 'Masala-Maggi', price: '30 ₹'},
    {id: 9, item: 'Bataka-vada', price: '20 ₹'},
    {id: 10, item: 'Pav-bhaji', price: '80 ₹'},
  ]);

  // const addQty = (value) => {
  //   setItems((previousItems) => {
  //     return [{id: random, value: value}, ...previousItems];
  //   });
  // };

  const deleteItems = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item.id != id);
    });
  };

  const addItem = ({items}) => {
    if (!items) {
      Alert.alert('Error', 'Please add an item');
    } else {
      setItems((previousItems) => {
        return [{id: random, item: items}, ...previousItems];
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItems item={item} deleteItems={deleteItems} />
        )}
        // keyExtractor={(item) => item.id}
      />
      {/* <NoOfItemPicker value={value} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 70,
  },
});
