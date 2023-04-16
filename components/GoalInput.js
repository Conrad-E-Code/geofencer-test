import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from "react"
function GoalInput({ visible, addGoalHandler, onAddGoal, setModalIsVisible}) {
    const [goal, setGoal] = useState("")
    function goalInputHandler(enteredText) {
        setGoal(enteredText)
      }
      function addGoalHandler() {
        onAddGoal(goal)
        setGoal("")
      }

return (
    <Modal visible={visible} animationType="slide">  
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/favicon.png")} />
        <TextInput value={goal} style={styles.textInput} placeholder="Your Goal" onChangeText={goalInputHandler} />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <Button onPress={() => {setModalIsVisible(false)}} title="cancel" />
    </Modal>  
)
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: 'rgba(200, 200, 0, 0.7)',
        borderRadius: 7
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '70%',
        margin: 10,
        marginBottom: 20
      },
      image: {
      }
})