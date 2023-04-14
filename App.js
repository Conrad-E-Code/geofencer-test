import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.firstBox}>
        <Text>1</Text>
      </View>
      <View style={styles.secondBox}>
        <Text>2</Text>
      </View>
      <View style={styles.thirdBox}>
        <Text>3</Text>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: 'row',
    height: 300,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  firstBox: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  secondBox: {
    backgroundColor: "blue",
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thirdBox: {
    backgroundColor: "green",
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

});

// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// customText: {
//   color: "blue",
//   borderWidth: 5,
//   borderColor: "red",
//   padding: 20,
//   margin: 20,
//   borderRadius: 7
// }