import { FlatList, StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  // const [location, setLocation] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  function startAddGoalHandler() {
    console.log(modalIsVisible)
    setModalIsVisible(true)
  }
  function addGoalHandler(goal) {
    console.log(`GOAL:${goal}`)
    setCourseGoals((prev) => [...prev, {text: goal, id: Math.random().toString()}])
    console.log(courseGoals)
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id) {
    // console.log(courseGoals)
    // console.log("DELETED")
    setCourseGoals(prev => {
      return( prev.filter((goalObj)=>{
return goalObj.id !== id
      }))
    })
    // console.log(courseGoals)

  }


  function findmeHandler() {
  }
  return (
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title='Add A New Goal' />
      <GoalInput setModalIsVisible={setModalIsVisible} visible={modalIsVisible} onAddGoal={addGoalHandler}/>

        {/* <View style={styles.inputContainer}>
        <Text>Latitude: {location ? location.coords.latitude : null}</Text>
        <Text>Longitude: {location ? location.coords.longitude : null}</Text>
          <Button onPress={findmeHandler} title="Find Me" />
        </View> */}
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return(
              <GoalItem onDeleteGoal={deleteGoalHandler} id={itemData.item.id} text={itemData.item.text}/>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />

      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "rgba(25, 180, 65, 0.4)",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 6,
    borderRadius: 7

  },

  goalsContainer: {
    flex: 5.8,
    backgroundColor: "orange",
    marginBottom: 8,
    borderRadius: 7,
    marginTop: 10
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