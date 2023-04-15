import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
export default function App() {
  const [goal, setGoal] = useState("")
  const [location, setLocation] = useState("")
  // Function to get permission for location

  function goalInputHandler(enteredText) {
    setGoal(enteredText)
  }
  function addGoalHandler() {
    console.log(`GOAL:${goal}`)

  }
    // function to check permissions and get Location
    const getLocation = () => {
      const result = requestLocationPermission();
      result.then(res => {
        console.log('res is:', res);
        if (res) {
          Geolocation.getCurrentPosition(
            position => {
              console.log(position);
              setLocation(position);
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
              setLocation(false);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      });
      console.log(location);
    };
  function findmeHandler() {
    getLocation()


  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Goal" onChangeText={goalInputHandler}/>
        <Button onPress={addGoalHandler} title="Add Goal"/>
      </View>
      <View style={styles.inputContainer}>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
        <Button onPress={findmeHandler} title="Find Me" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Your list of goals...
        </Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "rgba(25, 180, 65, 0.4)",
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 6,
    borderRadius: 7

  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: 'rgba(200, 200, 0, 0.7)',
    borderRadius: 7,
    marginBottom: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    marginRight: 8
  },
  goalsContainer: {
    flex: 5.8,
    backgroundColor: "orange",
    marginBottom: 8,
    borderRadius: 7
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