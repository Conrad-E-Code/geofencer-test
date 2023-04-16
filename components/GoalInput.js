import { View, TextInput, Button, StyleSheet, Modal } from "react-native"
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
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: 'rgba(200, 200, 0, 0.7)',
        borderRadius: 7
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '70%',
        marginRight: 8
      },
})