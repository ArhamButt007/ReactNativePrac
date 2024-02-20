import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.field1}></View>

      <View style={styles.field2}></View>

</View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#efe',
  },

  field1: {
    flex: 0.5,
    backgroundColor: 'red',
    
  },
  
  
  field2: {
    flex: 0.5,
    backgroundColor: 'green',
  }

  // text1: {
  //   color: '#f50505',
  //   fontSize: 24,
  // },

  // text2: {
  //   color: 363333,
  //   fontSize: 20,
  // }
});
