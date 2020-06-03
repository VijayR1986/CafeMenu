import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import NoOfItemPicker from './NoOfItemPicker';
import {PricingCard} from 'react-native-elements';

const ListItems = ({item, itemValue, deleteItems}) => {
  return (
    <View>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText1}>{item.item}</Text>
        <Text style={styles.listItemText2}>{item.price}</Text>
        <TouchableOpacity
          style={styles.listItem}
          // onPress={() => {alert('Delete item, Are you sure want to delete this?');}}
        >
          <NoOfItemPicker itemValue={itemValue} />
          {/* <Icon name="plus" size={20} onPress={() => addQty(item.value)} /> */}
        </TouchableOpacity>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItems(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // // listItem: {
  // //   backgroundColor: 'yellow',
  // },
  listItemView: {
    width: '96%',

    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },

  listItemText1: {
    color: 'black',
    fontSize: 20,
  },
  listItemText2: {
    color: 'red',
    fontSize: 20,
  },
  listItem: {
    width: '50%',
  },
});

export default ListItems;
