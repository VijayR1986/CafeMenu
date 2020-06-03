import React, {useState, Component} from 'react';
// import {Picker} from '@react-native-community/picker';
import {StyleSheet, Picker, View, Text} from 'react-native';

class NoOfItemPicker extends Component {
  state = {user: ''};
  updateUser = (user) => {
    this.setState({user: user});
  };
  render() {
    return (
      <View>
        <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
          <Picker.Item label="Click for Quantity" value="0" />
          <Picker.Item label="1" value="Quantity" />
          <Picker.Item label="2" value="Quantity" />
          <Picker.Item label="3" value="Quantity" />
          <Picker.Item label="4" value="Quantity" />
        </Picker>
        <Text style={styles.pickView}>{this.state.user}</Text>
      </View>
    );
  }
}
export default NoOfItemPicker;

const styles = StyleSheet.create({
  pickView: {
    fontSize: 16,
    alignSelf: 'auto',
    color: 'red',
  },
});

// const NoOfItemPicker = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   return (
//     <View style={styles.pickView}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{height: 30, width: 40}}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue({itemValue})}>
//         <Picker.Item label="One" value="1" />
//         <Picker.Item label="Two" value="2" />
//         <Picker.Item label="Three" value="3" />
//         <Picker.Item label="4" value="4" />
//         <Picker.Item label="5" value="5" />
//       </Picker>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pickView: {
//     width: '40%',
//     // paddingTop: 10,
//     // flexDirection: 'row',
//     // justifyContent: 'center',
//     color: 'black',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderEndWidth: 3,
//     borderRadius: 4,
//     borderColor: 'black',
//   },
// });

// export default NoOfItemPicker;
