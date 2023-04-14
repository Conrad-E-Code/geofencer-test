import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Goal"/>
        <Button title="add goal"/>
      </View>
      <View>
        <Text>Your list of goals...</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,

  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between'

  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    marginRight: 8
  }

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